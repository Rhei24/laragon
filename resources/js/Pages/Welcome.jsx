import { Link, Head } from "@inertiajs/react";
import { useState, useEffect } from "react";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DarkModeToggle from "@/Components/DarkModeToggle";
import ApplicationLogo from "@/Components/ApplicationLogo";

import Carousel from "@/Components/Carousel";
import Card from "@/Components/Card";

// mock data for carousel
import data from "@/Data/mock.json";
import { register } from "swiper/element/bundle";

// register Swiper custom elements
register();

export default function Welcome({ auth }) {
    /* starts swiper */

    /* for responsivenav */
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    /* darkmode switch temporary*/
    const [toggle, setToggle] = useState("");

    useEffect(() => {
        /* idk how to pass child to parent props */

        const savedToggle = localStorage.getItem("toggle");
        if (savedToggle) {
            setToggle(savedToggle);
        }
    }, []);

    const handleDarkModeToggle = () => {
        /* true = dark, false = light */

        const newToggle = toggle === "" ? "dark" : "";

        /* change const toggle to the new assigned mode */

        setToggle(newToggle);

        /* .setItem requires 2 parameters  */

        localStorage.setItem("toggle", newToggle);

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
                <div className="flex justify-between px-2 py-4 md:p-8">
                    <DarkModeToggle
                        toggle={toggle}
                        setToggle={setToggle}
                        handleDarkModeToggle={handleDarkModeToggle}
                    />

                    <div className="">
                        {auth.user ? (
                            <Link
                                href={route("dashboard")}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Log in
                                </Link>

                                <Link
                                    href={route("register")}
                                    className="ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
                {/* Main Content */}
                <div className="mx-8 md:justify-between text-black dark:text-white">
                    {/* Intro */}
                    <div className="">
                        {/* Logo div */}
                        <div className="flex items-center justify-center">
                            <ApplicationLogo className="h-24 w-24" />
                        </div>
                        <div className="flex flex-col mb-24">
                            <p className="mx-2">
                                Very long paragraph that explains what the
                                website is about n all about that jazz.Very long
                                paragraph that explains what the website is
                                about n all about that jazz.
                            </p>
                            <Link
                                href="/map"
                                as="button"
                                type="button"
                                className="text-blue-600"
                            >
                                Map
                            </Link>
                        </div>
                        {/* Carousel */}
                        <Carousel data={data} className="mb-24" />
                    </div>
                    {/* Featured Product Area */}
                    <div className="">
                        <div className="flex items-center justify-center">
                            <ApplicationLogo className="h-24 w-24 mb-4" />
                        </div>
                        <p className="text-2xl">Featured Products</p>
                        <p className="border p-4">
                            Very long paragraph that explains what the website
                            is about n all about that jazz.Very long paragraph
                            that explains what the website is about n all about
                            that jazz.Very long paragraph that explains what the
                            website is about n all about that jazz.Very long
                            paragraph that explains what the website is about n
                            all about that jazz.Very long paragraph that
                            explains what the website is about n all about that
                            jazz.Very long paragraph that explains what the
                            website is about n all about that jazz.
                        </p>
                    </div>
                    {/* Featured Product end */}
                </div>
                {/* Main Content end */}
            </div>
        </div>
    );
}

/* what dis do */
/* bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white */
/* sm:fixed sm:top-0 sm:right-0 p-6 text-right */
/*                         <div className="grid auto-cols-auto justify-items-center border grid-cols gap-12 space-x-2 md:p-6">
                            <Card data={data} />
                        </div> */
