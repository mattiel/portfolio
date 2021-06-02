import { useEffect, useLayoutEffect, useState } from 'react'
import { useHeadIDs } from '../../utils/useHeadIDs'
import { useIntersectionObserver } from '../../utils/useIntersectionObserver'

const TOC = () => {
  // const { intersectionObserver } = useIntersectionObserver();
  const [IDs, setIDs] = useState([]);

  useLayoutEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2'))
    const headings = []
    elements.forEach(heading => {
      headings.push(
        {
          title: heading.innerText, 
          id: heading.id
        }
      )
    })
    setIDs(headings)
  }, [])

  useEffect(() => {
    const callback = (headings) => {

    }
  })

  return (
    <ul className="fixed h-12 bg-blue-600 w-full top-0 left-0 z-10 flex">
      <div className="absolute top-0 left-0 w-1/2 bg-blue-700 h-full pointer-events-none"></div>
      {IDs.map((heading, idx) => {
        return(
          <li className="inline-flex h-full items-center px-4 flex-grow" key={idx}>
            <span className="text-white text-sm z-10 font-semibold">0{idx + 1} {heading.title}</span>
          </li>
        )
      })}
{/*       
      <li className="inline-flex h-full items-center px-4 flex-grow">
        <span className="text-white text-sm z-10">01 INTRODUCTION</span>
      </li>
      <li className="inline-flex h-full items-center px-4 flex-grow">
        <span className="text-white text-opacity-50 text-sm z-10">02 PROBLEM</span>
      </li>
      <li className="inline-flex h-full items-center px-4 flex-grow">
        <span className="text-white text-opacity-50 text-sm z-10">03 PROCESS</span>
      </li>
      <li className="inline-flex h-full items-center px-4 flex-grow">
        <span className="text-white text-opacity-50 text-sm z-10">04 SOLUTIONS</span>
      </li>
      <li className="inline-flex h-full items-center px-4 flex-grow">
        <span className="text-white text-opacity-50 text-sm z-10">05 FINAL OUTCOME</span>
      </li> */}
    </ul>
  )
}

export default TOC