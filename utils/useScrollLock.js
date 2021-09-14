import { useState, useEffect } from 'react'

export default function useScrollLock() {
  const [scrollLocked, setScrollLocked] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
    if(isBrowser) {
      setScrollLocked(true)
      document.body.classList.add('disable-body-scroll')
      document.body.classList.remove('disable-body-scroll')
    }
    return() => {
      document.body.classList.remove('disable-body-scroll')
    }
  }, [scrollLocked])
}