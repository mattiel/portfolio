import { useState, useEffect } from 'react'

export const useHeadIDs = () => {
  const [IDs, setIDs] = useState([]);
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
    if(isBrowser) {
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
      console.log(headings)
    }
  }, [])

  return { IDs }
}