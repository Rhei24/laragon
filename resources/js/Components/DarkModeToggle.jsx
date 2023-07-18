import { useState } from 'react'
import { Switch } from '@headlessui/react'

import {SunIcon} from "@heroicons/react/24/outline"
import {MoonIcon} from "@heroicons/react/24/solid"

export default function DarkModeToggle({ toggle, setToggle, handleDarkModeToggle }) {
  /* use parent state - done */
  /* const [enabled, setEnabled] = useState(false) */
  

  return (

      /*
    const [onToggle, setOnToggle] = useState(false);
    `
    const toggle = () => {
        setOnToggle((previousState) => !previousState);
    }
  */

    /* what the switch do */
    /* make switch use useState from parent(AuthenticatedLayout) */
    /* button and switch should be connected in toggle value */

    /* flex container */
  <div className='flex items-center'>
    <button className="rounded-lg mx-1" onClick={handleDarkModeToggle}>
    {
      /* setting colors for svg cause idk why sun goes solid when import is outline */
        toggle === '' ?
        <SunIcon className="text-black w-6 h-6"/>
        :
        <MoonIcon className="text-white w-6 h-6"/>
    }
        {/*<span className='text-white'>Test</span> */}
    </button>
    {/* logs current state */}
    {/* {console.log(toggle)} */} 

    {/* should depend on toggle state not on enabled boolean state*/}
    {/* removed onChange={}, idk what checked is */}
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

