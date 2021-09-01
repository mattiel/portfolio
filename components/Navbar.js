import React, { useState } from 'react'

import Logo from '@/components/Logo'
import Modal from '@/components/Modal'
import Command from '@/components/Command'
import Container from '@/components/Container'

const CommandIcon = (props) => {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6a4 4 0 004 4h2v4H6a4 4 0 104 4v-2h4v2a4 4 0 104-4h-2v-4h2a4 4 0 10-4-4v2h-4V6a4 4 0 10-8 0zm14 12a2 2 0 102-2h-2v2zm4-12a2 2 0 01-2 2h-2V6a2 2 0 114 0zM8 6a2 2 0 10-2 2h2V6zM4 18a2 2 0 012-2h2v2a2 2 0 11-4 0zm10-4v-4h-4v4h4z"
        fill="currentColor"
      />
    </svg>
  )
}

const Navbar = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  return (
    // dark:bg-gray-900 text-gray-900 dark:text-gray-300
    <nav className="w-full top-0 left-0 fixed z-30 bg-white">
      <Container>
      {/* dark:hover:text-white */}
        <div className="flex justify-between items-center h-14">
          <Logo/>
          {/* dark:text-gray-300 */}
          <ul className="uppercase space-x-4 flex text-xs font-semibold text-gray-500 items-center">
            {/* <li>About</li>
            <li>Projects</li>
            <li>Contact</li> */}
            <li 
              className="text-lg cursor-pointer"
              onClick={() => setIsCommandOpen(true)}
            >
              <CommandIcon />
            </li>
            <Modal
              onClose={() => setIsCommandOpen(false)}
              show={isCommandOpen}
              isSkeleton
            >
              <Command/>
            </Modal>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;