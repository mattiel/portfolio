import { useEffect } from 'react'
import Hotkeys from './Hotkeys'
import Router from 'next/router'
import Link from 'next/link'

const Option = ({ label, glyph, path, hotkeys, isFocused, disabled, link}) => {
  useEffect(() => {
    window.addEventListener('onkeypress', handleEnter)
    return window.removeEventListener('onkeypress', handleEnter)
  }, [])

  const handleEnter = e => {
    const {pathname} = Router
    e.keyCode === 13 && pathname === '/' && Router.push(path)
  }

  return (
    <Link href={link ? href : ''}>
      <li 
        className={`
          flex justify-between items-center cursor-pointer px-2 py-3 text-gray-300
          ${disabled ? 'cursor-not-allowed bg-gray-200 text-gray-300' : 'hover:bg-gray-100 hover:text-gray-700 hover:font-semibold'}
          ${isFocused && 'bg-gray-100 '}
        `}
      >
        <div className="space-y-2">
          <span className={`
            leading-6 
            ${isFocused && 'font-semibold text-gray-700'}
          `}>
            {label}
          </span>
          
        </div>
        {/* <Hotkeys
          keys={['A', 'B']}
          isFocused={isFocused}
        /> */}
      </li>
    </Link>
  );
};

export default Option;