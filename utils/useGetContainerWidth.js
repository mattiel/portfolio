import { useEffect, useState } from 'react'

export default function useGetContainerWidth() {
  const [containerWidth, continerWidth] = useState(null)
  const viewportSizes = [640, 768, 1024]
  
  useEffect(() => {
    const getContainerWidth = () => {
      viewportSizes.forEach(size => {
        console.log(size, window.matchMedia(`(min-width: ${size}px)`).matches)
        if(window.matchMedia(`(min-width: ${size}px)`).matches) {
          continerWidth(size)
        }
      })
    }
    window.addEventListener('resize', getContainerWidth())
    return(() => {
      window.removeEventListener('resize', getContainerWidth())
    })
  },[]);

  return containerWidth
}