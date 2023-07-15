import { Link, Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DarkModeToggle from '@/Components/DarkModeToggle';

export default function Welcome({ auth }) {

    /* darkmode switch temporary*/
    const [toggle, setToggle] = useState('');

    useEffect(() => {
        const savedToggle = localStorage.getItem('toggle');
        if (savedToggle) {
          setToggle(savedToggle);
        }
      }, []);
    
      const handleDarkModeToggle = () => {
        {/* true = dark, false = light */}
        const newToggle = toggle === '' ? 'dark' : '';
        {/* change const toggle to the new assigned mode */}
        setToggle(newToggle);
        {/* .setItem requires 2 parameters  */}
        localStorage.setItem('toggle', newToggle);

        /* darkmode end */

      };

    return (
        <div className={`${toggle}`}>
            <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900">
            <Head title="Welcome" />

            {/* darkmode toggle */}
        

            {/* relative fixed so that Login/Register retains */}
            {/* TopBar */}
            {/* adjust padding same as other page */}
            <div className="flex justify-between p-8">
                <DarkModeToggle toggle={toggle} setToggle={setToggle} handleDarkModeToggle={handleDarkModeToggle}/>
                    
                <div className="">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                    
                </div>
            </div>
                <div>content</div>
            </div>
        </div>
    );
}

/* what dis do */
/* bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white */
/* sm:fixed sm:top-0 sm:right-0 p-6 text-right */