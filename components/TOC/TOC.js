import { useEffect, useState } from 'react'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

const twConfig = resolveConfig(tailwindConfig)

const Item = ({ section, isTiny }) => {
  return (
    <li 
      className={`inline-flex h-full items-center flex-grow relative text-gray-500 transition-all duration-150 overflow-hidden
        ${section.isVisible ? 'text-gray-900 font-semibold' : ''}
        ${isTiny && section.isVisible ? 'min-w-full' : ''}
        ${isTiny && !section.isVisible ? 'max-w-0' : ''}
        ${!isTiny ? 'min-w-[23%]' : ''}
      `}
    >
      <a 
        href={`#${section.id}`}
        className="text-sm pr-4 z-10"
      >
        {section.title}
      </a>
    </li>
  )
}

const TOC = () => {
  const [scroll, setScroll] = useState({
    isTiny: false,
    min: 0,
    max: 0,
    progress: 0,
  })

  const [sections, setSections] = useState([])

  useEffect(() => {
    const elements = document.querySelectorAll(`[data-toc-title]`)
    const sections = []

    // initialize
    elements.forEach(content => {
      sections.push(
        {
          title: content.getAttribute('data-toc-title'),
          id: content.id,
          startPosition: content.offsetTop,
          endPosition: content.offsetTop + content.getBoundingClientRect().height,
          isVisible: false,
        }
      )
    })

    setScroll({
      ...scroll,
      isTiny: window.innerWidth <= parseInt(twConfig.theme.screens.md),
      min: sections[0].startPosition,
      max: sections[0].endPosition
    })
    setSections(sections)

    function handleResize() {
      setScroll({
        ...scroll, 
        isTiny: window.innerWidth <= parseInt(twConfig.theme.screens.md)
      })
    }
  
    function handleScroll() {
      let min = scroll.min
      let max = scroll.max
      const progress = scroll.isTiny
        ? window.scrollY / scroll.max * 100
        : window.scrollY / window.scrollMaxY * 100
      const toChange = sections.slice()
      console.log(window.scrollY / scroll.max * 100)
      
      if(window.scrollY > scroll.max) {
        toChange.forEach(section => {
          if(window.scrollY >= section.startPosition && window.scrollY <= section.endPosition) {
            section.isVisible = true
            min = section.startPosition
            max = section.endPosition
          } else {
            section.isVisible = false
          }
        })
        setScroll(scroll => ({
          ...scroll, min, max
        }))
        setSections(toChange)
      }
      setScroll(scroll => ({
        ...scroll, progress
      })) 
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('touchmove', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('touchmove', handleScroll)
    }

  }, [])

  return (
    <nav className="w-full full-bleed sticky h-12 bg-gray-100 shadow-sm border-b border-gray-200 top-14 left-0 z-10 overflow-hidden">
      <div className="absolute top-0 left-0 h-full bg-gray-200" style={{ width: `${scroll.progress}%`}}></div>
      <div className="layout h-full px-5">
        <ul className="flex transition-all">
          {sections.map((section, idx) => {
            return(
              <Item key={idx} section={section} isTiny={scroll.isTiny}/>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default TOC