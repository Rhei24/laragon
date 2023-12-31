import { useState, useEffect } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { Link } from "@inertiajs/react";
import DarkModeToggle from "@/Components/DarkModeToggle";
import SideBar from "@/Components/SideBar";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    /* darkmode switch temporary*/
    const [toggle, setToggle] = useState("");

    useEffect(() => {
        const savedToggle = localStorage.getItem("toggle");
        if (savedToggle) {
            setToggle(savedToggle);
        }
    }, []);

    const handleDarkModeToggle = () => {
        {
            /* true = dark, false = light */
        }
        const newToggle = toggle === "" ? "dark" : "";
        {
            /* change const toggle to the new assigned mode */
        }
        setToggle(newToggle);
        {
            /* .setItem requires 2 parameters  */
        }
        localStorage.setItem("toggle", newToggle);

        /* darkmode end */
    };

    return (
        /* ! current problem, localstorage stores false but still displays true*/

        /* darkmode toggle */
        <div className={toggle}>
            <div className="container mx-auto min-h-screen bg-gray-100 dark:bg-gray-900 ">
                {/* border under the TopBar */}
                <nav className="bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
                    {/* TopBar */}
                    <div className="w-full pl-2 pr-8">
                        {/* TopBar divider */}
                        <div className="flex justify-between h-16">
                            {/* Replace Profile Navbar on smallscreen */}
                            <div className="flex">
                                <div className="shrink-0 flex items-center">
                                    {/*
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                </Link>
                                */}
                                    {/* Button for darkmode (put in a separate component - done)*/}

                                    {/* 
                                    darkmode end */}
                                    {/* temporary headlessui darkmode toggle - just to show how headlessui works */}
                                    <DarkModeToggle
                                        toggle={toggle}
                                        setToggle={setToggle}
                                        handleDarkModeToggle={
                                            handleDarkModeToggle
                                        }
                                    />
                                </div>

                                {/* TopBar link */}
                                <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                    <NavLink
                                        href={route("dashboard")}
                                        active={route().current("dashboard")}
                                    >
                                        dashboard
                                    </NavLink>
                                </div>
                            </div>

                            {/* dropdown found beside user (top-right) */}
                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-3 relative">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                            {/* dropdown end */}

                            {/* shows on smaller screens */}
                            {/* negative margin for? */}
                            <div className="-mr-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState,
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* whole NavBar that appears in small screen shown here */}
                    {/* sm:hidden is constant while ? block: hidden depends on the State being either true or false*/}
                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800 dark:text-gray-200">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                        {/* SideBar here for ResponsiveNavLink */}
                        <div className="mt-3">
                            {/* try to send prop of classname='' here */}
                            <SideBar />
                        </div>
                    </div>
                </nav>

                {/* ?? && */}
                {header && (
                    <header className="bg-white dark:bg-gray-800 shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}

                {/* find where the main at */}
                <main>{children}</main>
            </div>
            {/* darkmode end*/}
        </div>
    );
}
