import { useEffect, useRef, useState } from 'react';

// export function useIntersectionObserver(ref, callback, options = {
//   root: null,
//   rootMargin: 0,
//   threshold: 0,
// }) {
//   const ref = useRef({})
//   const [isIntersecting, setIsIntersecting] = useState(false)

//   const callback = (entries) => {
//     const [entry] = entries
//     setIsIntersecting(entry.isIntersecting)
//   }

//   useEffect(() => {
//     const observer = new IntersectionObserver(callback, options)
//     ref.current && observer.observer(ref.current)
//     return () => {
//       ref.current && observer.unobserve(ref.current)
//     }

//   }, [ref])
// };

// // export function useIntersectionObserver(ref, options = {root: null, rootMargin: 0, threshold: 0}) {
// //   const [entry, setEntry] = useState(null)

// //   useEffect(() => {
// //     if(ref.current && typeof IntersectionObserver === 'function') {
// //       const handler = (entries => {
// //         setEntry(entries[0]);
// //       })

// //       const observer = new IntersectionObserver(handler, options)
// //       observer.observe(ref.current)

// //       return () => {
// //         setEntry(null)
// //         observer.disconnect()
// //       };
// //     }
// //     return () => {}
// //   },[ref.current, options])

// //   return entry
// // }

export default function useIntersectionObserver(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting)
  )

  useEffect(() => {
    observer.observe(ref.current)
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}