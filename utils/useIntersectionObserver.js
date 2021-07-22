// import { useEffect, useState } from 'react';

// export default function useIntersectionObeserver(ref, options) {
//   const [entry, setEntry] = useState(null)

//   useEffect(() => {
//     if(ref.current && typeof IntersectionObserver === 'function') {
//       const handler = (entries => {
//         setEntry(entries[0]);
//       })

//       const observer = new IntersectionObserver(handler, options)
//       observer.observe(ref.current)

//       return () => {
//         setEntry(null)
//         observer.disconnect()
//       };
//     }
//     return () => {}
//   },[ref.current, options])

//   return entry
// }