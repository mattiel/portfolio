import React, { useState, useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Transition } from '@headlessui/react'
import clsx from "clsx";

import useIntersect from '@/utils/useIntersect'
import FullBleed from '@/components/FullBleed'

import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/outline";

const Button = ({onClick, hidden, children}) => {
  const [isDisabled, setIsDisabled] = useState(false)
  const buttonClass = clsx(
    'left-4 w-12 h-12 bg-black bg-opacity-40 shadow-lg rounded-full text-gray-200 transition-all hover:text-white hover:shadow-xl hover:bg-opacity-70',
    hidden ? 'hidden' : 'grid place-items-center'
  )

  const handleClick = e => {
    if(!isDisabled) {
      e.preventDefault()
      e.stopPropagation()
      setIsDisabled(true)
      onClick()
      setTimeout(() => setIsDisabled(false), 300)
    }
  }

  return(
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  )
}

const Scroller = ({ elements, children }) => {
  const [scrollerState, setScrollerState] = useState({
    container: null,
    currentIndex: 0,
    itemElements: [],
    isNavHidden: true,
    isPrevHidden: true,
    isNextHidden: true,
  })

  const intersect = useIntersect({ root: scrollerState.container, threshold: 0.75 })

  const scrollerContainerRef = useRef()

  useEffect(() => {
    smoothscroll.polyfill()
    const container = scrollerContainerRef.current
    const scrollLeftMax = container.scrollWidth - container.clientWidth;
    const itemElements = container.childNodes
    const isNextHidden = !scrollLeftMax > 0
    setScrollerState({...scrollerState, container, itemElements, isNextHidden})

    // container.addEventListener('resize', initialize())
    // return () => {
    //   container.removeEventListener('resize', initialize())
    // }
  },[elements])

  function handleIntersect(entries, elements) {
    const entry = entries.find(e => e.isIntersecting)
    let index = null
    if(entry) {
      index = elements.findIndex(e => e === entry.target)
      setScrollerState({...scrollerState, currentIndex: index})
    }
  }  

  const handleNext = () => {
    const currentIndex = ++scrollerState.currentIndex
    let isNextHidden = false
    let isPrevHidden = false
    setScrollerState({...scrollerState, currentIndex})

    scrollerState.container.scrollBy({
      top: 0,
      left: scrollerState.itemElements[currentIndex].clientWidth,
      behavior: 'smooth'
    })

    const nextRemainingScrollLeft =
      scrollerState.container.scrollLeft + scrollerState.itemElements[scrollerState.currentIndex + 1]?.clientWidth
    const scrollLeftMax = scrollerState.container.scrollWidth - scrollerState.container.clientWidth;

    if(scrollerState.currentIndex === scrollerState.itemElements.length - 1 
      || nextRemainingScrollLeft >= scrollLeftMax) {
      isNextHidden = true;
    }
    setScrollerState({...scrollerState, currentIndex, isPrevHidden, isNextHidden})
  }

  const handlePrev = () => {
    let currentIndex = --scrollerState.currentIndex
    let isNextHidden = false
    let isPrevHidden = false
    setScrollerState({...scrollerState, currentIndex})

    scrollerState.container.scrollBy({
      top: 0,
      left: -scrollerState.itemElements[scrollerState.currentIndex].clientWidth,
      behavior: 'smooth'
    })

    const prevRemainingScrollLeft = 
      scrollerState.container.scrollLeft - scrollerState.itemElements[scrollerState.currentIndex - 1]?.clientWidth

    // Hide prev button if prev item is not available
    if(scrollerState.currentIndex === 0 || prevRemainingScrollLeft <= 0) {
      isPrevHidden = true
      currentIndex = 0
    }
    setScrollerState({...scrollerState, currentIndex, isPrevHidden, isNextHidden})
  }
  
  return (
    <FullBleed brute>
      <div 
        className="relative"
        onMouseEnter={() => setScrollerState({...scrollerState, isNavHidden: false})}
        onMouseLeave={() => setScrollerState({...scrollerState, isNavHidden: true})}
      >
        <div className="scroller" ref={scrollerContainerRef}> 
          {
            React.Children?.map(children, child => {
              return (
                <div className="scroller-item">
                  {React.cloneElement(child)}
                </div>
              )
            })
          }
        </div>
        <Transition
          show={!scrollerState.isNavHidden}
          appear={true}
          enter="transition-opacity ease-linear duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="absolute w-full flex-shrink-0 px-6 top-1/2 transform -translate-y-1/2 justify-between flex opacity-0 h-12"
        >
          <div>
            <Button onClick={handlePrev} hidden={scrollerState.isPrevHidden}>
              <ChevronLeftIcon className="w-6 h-6"/>
            </Button>
          </div>
          <div>
            <Button onClick={handleNext} hidden={scrollerState.isNextHidden}>
              <ChevronRightIcon className="w-6 h-6"/>
            </Button>
          </div>
        </Transition>
      </div>
    </FullBleed>
  )
}

export default Scroller