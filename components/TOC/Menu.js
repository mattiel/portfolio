import { Transition } from '@headlessui/react'
import { useState, useEffect } from 'react'

const Menu = ({e,  sections, isVisible, onClose }) => {
  function handleClose(e) {
    e.stopPropagation()
    onClose()
  }

  return (
    <Transition
      show={isVisible}
      appear={true}
      enter="transition-all ease-linear duration-300"
      enterFrom="opacity-0 max-h-0 max-w-0"
      enterTo="opacity-100 max-h-full max-w-full"
      leave="transition-all ease-linear duration-300"
      leaveFrom="opacity-100 max-h-full max-w-full"
      leaveTo="opacity-0 max-h-0 max-w-0"
      className="transition-all opacity-0 w-full max-h-0 max-w-0 absolute left-0 top-0 z-20"
    >
      <nav className="w-full relative">
        <ul className="w-full bg-purple-600 text-white text-sm font-semibold">
          { sections.map((section, idx) => {
            return(
              <li 
                className="w-full inline-flex items-center leading-loose hover:bg-purple-700" 
                key={idx} 
                onClick={handleClose}
              >
                <a 
                  className="w-full h-full py-3 px-4" 
                  href={`#${section.id}`}
                  >
                  {section.title}
                </a>
              </li>
            )
          })}
        </ul>
        <a 
          className="absolute w-[3.25rem] h-[3.25rem] right-0 top-0 grid place-items-center text-white hover:bg-purple-700 cursor-pointer" 
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </a>
      </nav>
    </Transition>
  )
}

export default Menu