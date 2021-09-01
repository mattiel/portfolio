import { useState, useEffect, useRef, useCallback } from 'react'

export function useIntersect({ root = null, rootMargin, threshold = 0}) {
  const [entry, setEntry] = useState(null)
  const [node, setNode] = useState(null)

  const ref = useCallback(element => {
    setNode(element)
  }, [])
  
  const observer = useRef(null)

  useEffect(() => {
    if("IntersectionObserver" in window === false) return () => {}
    observer.current = new window.IntersectionObserver(([ent]) => setEntry(ent), {
      root,
      rootMargin,
      threshold 
    })

    const { current: currentObserve } = observer
    if(node) currentObserve?.observe(node)
    return () => currentObserve.disconnect()

  }, [node, root, rootMargin, threshold])

  return { ref, entry }
}