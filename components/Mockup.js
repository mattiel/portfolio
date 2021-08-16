import { useRef, useEffect, useState } from "react";

function Mockup({ source }) {
  const foreignObj = useRef(null)
  const foriegnElement = useRef(null)
  const [isSafari, setIsSafari] = useState(false)
  const [containerSize, setContainerSize] = useState({
    width: 375, 
    height: 812,
    scaleFactor: 1
  })

  useEffect(() => {
    const userAgent = window.navigator.userAgent

    function calculateSize() {
      const width = foreignObj.current.getBoundingClientRect().width * 1.01
      const height = foreignObj.current.getBoundingClientRect().height * 1.01
      const scaleFactor = height / 812
      setContainerSize({width, height, scaleFactor})
    }
    calculateSize()
    setIsSafari(
      /constructor/i.test(window.HTMLElement) 
      || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] 
      || (typeof safari !== 'undefined' && safari.pushNotification))
      || userAgent.match(/iPad/i) 
      || userAgent.match(/iPhone/i)
    )

    window.addEventListener("resize", calculateSize())
    return (() => window.removeEventListener("resize", calculateSize))
  }, []);
  
  return (
    <div className="p-8 flex justify-center items-center">
      <div className="inline-block relative w-full align-middle max-w-[425px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 425 856"
          className="inline-block relative"
          preserveAspectRatio="xMinYMin meet"
        >
          <foreignObject 
            x={isSafari ? 25 * containerSize.scaleFactor * 0.98 : 25} 
            y={isSafari ? 21 * containerSize.scaleFactor * 0.98 : 22} 
            rx="30" 
            className="fixed flex left-0 top-0 z-0 overflow-hidden" 
            width="375" 
            height="812" 
            ref={foreignObj}
            overflow="hidden"
          >
            <div className="flex w-full h-full relative">
              <div className="absolute left-0 top-0 flex-1 overflow-hidden">
                <div 
                  dangerouslySetInnerHTML={{
                    __html: `
                      <video 
                        webkit-playsinline 
                        playsinline
                        width="${isSafari ? containerSize.width : 375}"
                        height=${isSafari ? containerSize.height : 812}
                        preload="auto"
                        autoplay
                        muted
                        loop
                        style="${isSafari ? `border-radius: 2.5vh` : ''}"
                      >
                        <source src=${source} type="video/mp4"></source>
                      </video>`
                  }}
                />
              </div>
            </div>
          </foreignObject>
          <rect
            width="397"
            height="834"
            x="14"
            y="11"
            stroke="#6B7280"
            strokeWidth="22"
            rx="51"
            className="z-10"
          ></rect>
          <path
            className="z-10"
            fill="#6B7280"
            d="M422 195h1.5a1.5 1.5 0 011.5 1.5v93a1.5 1.5 0 01-1.5 1.5H422v-96zM3 176H1.5a1.5 1.5 0 00-1.5 1.5v55a1.5 1.5 0 001.5 1.5H3v-58zM3 253H1.5a1.5 1.5 0 00-1.5 1.5v55a1.5 1.5 0 001.5 1.5H3v-58zM3 115H1.5a1.5 1.5 0 00-1.5 1.5v26a1.5 1.5 0 001.5 1.5H3v-29z"
          ></path>
        
          <rect
            width="391"
            height="828"
            x="17"
            y="14"
            stroke="#1E1E20"
            strokeWidth="16"
            rx="48"
          ></rect>
          
          <defs>
            <clipPath id="clip0"></clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default Mockup;
