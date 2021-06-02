import React, { useState } from 'react'

import Logo from '@/components/Logo'
import Modal from '@/components/Modal'
import Command from '@/components/Command'
import Link from 'next/link'

const Navbar = () => {
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  return (
    <nav className="w-full top-0 left-0 absolute z-10">
      <div className="container mx-auto xl:max-w-screen-xl px-4">
        <div className="flex justify-between items-center text-gray-900 h-16">
          <Link href="/">
            <Logo/>
          </Link>
          <ul className="uppercase space-x-4 flex text-xs font-semibold text-gray-500 items-center">
            {/* <li>About</li>
            <li>Projects</li>
            <li>Contact</li> */}
            <li 
              className="text-lg cursor-pointer"
              onClick={() => setIsCommandOpen(true)}
            >
              ⌘
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
      </div>
    </nav>
  );
};

export default Navbar;7