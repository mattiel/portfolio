import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Transition } from '@headlessui/react'
const Modal = ({
  show,
  onClose,
  children,
  title,
  isSkeleton
}) => {
  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true);
    document.body.style.overflow = 'hidden';
    document.body.scroll = 'no'
    return() => {
      document.body.style.overflow = 'unset'
      document.body.scroll = 'yes'
    }
  }, [])

  const handleClose = e => {
    e.preventDefault()
    onClose();
  } 

  const content = (
    <Transition
      show={show}
      appear={true}
      enter="transition-opacity ease-linear duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity ease-linear duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="fixed top-0 left-0 w-full h-full grid place-items-center bg-black bg-opacity-50 p-4 z-50"
      onClick={() => onClose()}
    >
      <Transition.Child
        enter="transition ease-in-out duration-200 transform"
        enterFrom="-translate-y-full"
        enterTo="translate-y-0"
        leave="transition ease-in-out duration-200 transform"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
        className="flex flex-col lg:max-w-screen-xl"
        onClick={e => e.stopPropagation()}
      >
        { isSkeleton 
          ? (
            <>
              {children}
            </>
          )
          : (
            <div className="bg-white shadow-md rounded-2xl">
              <div className="flex justify-between items-center w-full p-4 container">
                <div className="">{title}</div>
                <a href="#" onClick={handleClose}>X</a>
              </div>
              <div className="flex-1 px-4 pb-4">
                {children}
              </div>
            </div>
          )
        }
      </Transition.Child>
    </Transition>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(
      content,
      document.getElementById('portal')
    )
  } else return null
}

export default Modal