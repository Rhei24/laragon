import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function DarkModeToggle() {
  /* use parent state */
  /*
  const [enabled, setEnabled] = useState(false)
  */

  return (

      /*
    const [onToggle, setOnToggle] = useState(false);
    
    const toggle = () => {
        setOnToggle((previousState) => !previousState);
    }
  */

    /* what the switch do */
    /* make switch use useState from parent(AuthenticatedLayout) */
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? 'bg-blue-600' : 'bg-gray-200'
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      {/* sr for accessibility purposes */}
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
      />
    </Switch>
  )
}

