import DarkModeToggle from '@/Components/DarkModeToggle';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import SideBar from '@/Components/Sidebar';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            /* header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>} */
        >
            <Head title="Dashboard" />
            
            <div className="sm:flex">
                {/* Left content */}  
                {/* hide Sidebar in smaller screens */}
                <div className="hidden sm:block">
                    <SideBar />
                </div>
                {/* Right content */}
                <div className="py-8 w-full">
                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 text-center">Main Content</div>
                    </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
