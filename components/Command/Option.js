import { useEffect } from 'react'
import Hotkeys from './Hotkeys'
import Router from 'next/router'

const Option = ({ label, glyph, path, hotkeys, isFocused, disabled}) => {
  useEffect(() => {
    window.addEventListener('onkeypress', handleEnter)
    return window.removeEventListener('onkeypress', handleEnter)
  }, [])

  const handleEnter = e => {
    const {pathname} = Router
    e.keyCode === 13 && pathname === '/' && Router.push(path)
  }

  return (
    <li 
      className={`
        flex justify-between items-center cursor-pointer px-2 py-3
        ${disabled ? 'cursor-not-allowed bg-gray-100' : 'hover:bg-gray-100'}
        ${isFocused && 'bg-gray-100'}
      `}
    >
      <div className="space-y-2">
        <span className={`
          text-gray-300 leading-6 
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
  );
};

export default Option;