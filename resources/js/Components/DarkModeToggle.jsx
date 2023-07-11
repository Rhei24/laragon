import React from 'react'
import { useState } from 'react'

export default function DarkModeToggle() {

    const [onToggle, setOnToggle] = useState(false);
    
    const toggle = () => {
        setOnToggle((previousState) => !previousState);
    }

  return (
    /* switch toggle */
    /*  */
    <>
    <button className="px-6 py-2 bg-green-600 rounded-lg" onClick={toggle}>
            <span className='text-white'>Test</span>
    </button>
    {/* logs current state */}
    {console.log(onToggle)}
    </>
  )
}
