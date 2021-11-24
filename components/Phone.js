import React from 'react';
import clsx from 'clsx';

const Phone = ({ source, maxWidth, className, isVideo }) => {
  const outerClasses = clsx(
    'rounded-[3rem] bg-black border-gray-600 border-4 inline-block drop-shadow-2xl max-w-[320px]',
    className,
  )

  const innerClasses = clsx(
    'bg-black',
  )

  return (
    <div 
      className={outerClasses}
      style={{
        borderWidth: "clamp(0.125rem, 10vw, .35rem)"
      }}
    >
      <div 
        className="border-[clamp(.75rem)] border-black rounded-[3rem] webkit-fix-overflow overflow-hidden"
        style={{
          borderWidth: "clamp(.25rem, 10vw, .75rem)"
        }}
      >
        <div className={innerClasses}>
          {isVideo ? 
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
            : 
              <img 
                src={source} 
                width="375"
                height="812"
                alt="iPhone X Mockup"
                className="w-full"
              />
            }
        </div>
      </div>
    </div>
  );
};

export default Phone;