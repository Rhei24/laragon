import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function DarkModeToggle({ toggle, setToggle, handleDarkModeToggle }) {
  /* use parent state */
  
  const [enabled, setEnabled] = useState(false)
  

  return (

      /*
    const [onToggle, setOnToggle] = useState(false);
    
    const toggle = () => {
        setOnToggle((previousState) => !previousState);
    }
  */

    /* what the switch do */
    /* make switch use useState from parent(AuthenticatedLayout) */
    /* button and switch should be connected in toggle value */
  <div className='flex items-center'>
    <button className="rounded-lg mx-1" onClick={handleDarkModeToggle}>
    {
        toggle === '' ?
        <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="text-black w-6 h-6">
<path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
</svg>
</span>
        :
        <span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
      </svg>
      
      </span>
    }
        {/*<span className='text-white'>Test</span> */}
    </button>
    {/* logs current state */}
    {console.log(toggle)} 

    {/* should depend on toggle state not on enabled boolean state*/}
    <Switch
      checked={toggle}
      onClick={handleDarkModeToggle}
      className={`${
        toggle === '' ? 'bg-gray-200' : 'bg-blue-600'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      {/* sr for accessibility purposes */}
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          toggle === '' ? 'translate-x-1' : 'translate-x-6'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  </div>
  )
}

