import React, { useState, useEffect, useRef } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
import { Transition } from '@headlessui/react'

import useIntersect from '@/utils/useIntersect'
import FullBleed from '@/components/FullBleed'

const Button = ({onClick, hidden, children}) => {
  const [isDisabled, setIsDisabled] = useState(false)

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
      className={`left-4 w-12 h-12 bg-black bg-opacity-40 shadow-lg rounded-full text-gray-200
      transition-all hover:text-white hover:shadow-xl hover:bg-opacity-70
        ${hidden ? 'hidden' : 'grid place-items-center'}
      `}
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
    const itemElements = scrollerContainerRef.current.childNodes
    const isNextHidden = !scrollerContainerRef.current.scrollLeftMax > 0
    setScrollerState({...scrollerState, container, itemElements, isNextHidden})

    container.addEventListener('resize', () => {
      
    })
    return () => {
      container.removeEventListener('resize', () => {

      })
    }
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

    if(scrollerState.currentIndex === scrollerState.itemElements.length - 1 
      || nextRemainingScrollLeft >= scrollerState.container.scrollLeftMax) {
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
    <FullBleed brute className="bg-gray-100">
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
          className="absolute w-full flex-shrink-0 px-6 top-1/2 transform -translate-y-1/2 justify-between flex opacity-0"
        >
          <div className="">
            <Button onClick={handlePrev} hidden={scrollerState.isPrevHidden}>
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
          </div>

          <div className="">
            <Button onClick={handleNext} hidden={scrollerState.isNextHidden}>
              <svg 
                className="w-6 h-6" 
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </Transition>
      </div>
    </FullBleed>
  )
}

export default Scroller