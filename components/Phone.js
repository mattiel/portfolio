import React from 'react';

import Fade from 'react-reveal/Fade'

const Phone = ({ source }) => {
  return (
    <Fade bottom>
      <div 
        className="rounded-[3.5rem] bg-black border-gray-700 border-[.75rem] inline-block drop-shadow-2xl"
      >
        <div className="border-8 border-black rounded-[3rem] webkit-fix-overflow overflow-hidden">
          <div className="w-full h-full max-w-[23.4375rem] max-h-[50.75rem] bg-black">
            <div 
              dangerouslySetInnerHTML={{
                __html: `
                  <video
                    webkit-playsinline 
                    playsinline
                    width="375"
                    height="812"
                    preload="auto"
                    autoplay
                    muted
                    loop
                  >
                    <source src=${source} type="video/webm"></source>
                  </video>`
              }}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Phone;