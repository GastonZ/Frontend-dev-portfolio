import { useEffect, useState } from 'react';
import Nav from './nav'
import { AnimatePresence } from 'framer-motion';

export default function Home() {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="main">
        <div className="p-[2px] fixed right-0 z-4">
          <div onClick={() => { setIsActive(!isActive) }} className="fixed right-0 m-5 w-20 h-20 rounded-[50%] bg-purple-800 cursor-pointer flex flex-col gap-2 items-center justify-center">
            <div className={`bg-white rounded-lg transition-all  ${isActive ? 'absolute rotate-45 w-11 h-1' : 'w-8 h-1'}`}></div>
            <div className={`bg-white rounded-lg transition-all ${isActive ? 'absolute -rotate-45 w-11 h-1' : 'w-8 h-1'}`}></div>
            <div className={`w-8 h-1 bg-white rounded-lg ${isActive ? 'hidden' : ''}`}></div>
          </div>
        </div>

      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav />}
      </AnimatePresence>
    </>
  )
}