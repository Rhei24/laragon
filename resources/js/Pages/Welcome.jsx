import { Link, Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import DarkModeToggle from '@/Components/DarkModeToggle';
import ApplicationLogo from '@/Components/ApplicationLogo';

export default function Welcome({ auth }) {

    {/* for responsivenav */}
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    /* darkmode switch temporary*/
    const [toggle, setToggle] = useState('');

    useEffect(() => {

        {/* idk how to pass child to parent props */}

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

      /*<img src="https://images.everydayhealth.com/images/diet-nutrition/all-about-bananas-nutrition-facts-health-benefits-recipes-and-more-rm-722x406.jpg" className="h-24 w-full mb-2 border object-cover"/> */
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
            {/* Main Content */}
                <div className="flex flex-col justify-center items-center md:flex-row md:justify-between text-black dark:text-white">
                    {/* Left Content */}
                    <div className="md:w-1/2 md:p-8 md:mx-8">
                        {/* Logo and Description div */}
                        <div className="mb-24">
                        <ApplicationLogo className="h-24 w-24"/>
                        <p>Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.</p>
                        <Link href="/map" as="button" type="button" className="text-blue-600">Map</Link>
                        </div>
                    
                    {/* Card Area */}
                        <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 gap-8 border md:p-6 md:max-h-7xl md:max-w-7xl">
                            {/* Card */}
                            <a href="/" className="p-3 shadow-md rounded-md overflow-hidden dark:bg-gray-700 w-96">
                                <img src='/images/farmer1.png' className="w-full mb-2 border object-cover"/>
                                <span><a href="/" className="text-sm dark:text-white leading-3">FirstName MiddleName Initial LastName</a></span>
                                <span><a href="/" className="text-blue-600 text-sm hover:underline underline-offset-2"><p className="text-left text-xs truncate">verylongusernamethatbecomes...cause its too long</p></a></span>
                                <p className="break-all w-full mb-2 text-xs line-clamp-5 text-gray-400">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                
                            </a>
                            {/* Card end */}
                            {/* Card */}
                            <a href="/" className="p-3 shadow-md rounded-md overflow-hidden dark:bg-gray-700 w-96">
                                <img src='/images/farmer1.png' className="w-full mb-2 border object-cover"/>
                                <span><a href="/" className="text-sm dark:text-white leading-3">FirstName MiddleName Initial LastName</a></span>
                                <span><a href="/" className="text-blue-600 text-sm hover:underline underline-offset-2"><p className="text-left text-xs truncate">verylongusernamethatbecomes...cause its too long</p></a></span>
                                <p className="break-all w-full mb-2 text-xs line-clamp-5 text-gray-400">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                
                            </a>
                            {/* Card end */}
                            <div>Card#2</div>
                            <div>Card#3</div>
                            <div>Card#4</div>
                            <div>Card#5</div>
                            <div>Card#6</div>
                        </div>
                    </div>
                    {/* Left Content end */}

                    {/* Right Content */}
                    <div className="w-1/2 p-8 mx-4 space-y-4">
                        <div className="flex items-center justify-center">
                        <ApplicationLogo className="h-24 w-24 mb-4"/>
                        </div>
                        <p className="text-2xl">Featured Products</p>
                        <p className="border p-4">Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.Very long paragraph that explains what the website is about n all about that jazz.</p>
                    </div>
                    {/* Right Content end */}
                </div>
            {/* Main Content end */}
            </div>
        </div>
    );
}

/* what dis do */
/* bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white */
/* sm:fixed sm:top-0 sm:right-0 p-6 text-right */