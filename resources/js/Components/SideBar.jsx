import React from 'react'
import {
    HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, Cog6ToothIcon
} from '@heroicons/react/24/outline'
import ApplicationLogo from './ApplicationLogo'

/* text-slate-200(?) hover:text-white */
/* sticky */


export default function SideBar() {
  return (
    <div className="container mx-auto w-max bg-blue-700">
        {/* flex container, not sure sa justify and items */}
        <div className="p-4 text-white">
            <div className=" flex flex-col gap-y-2 justify-start items-start">
            {/* Logo Area */}
                <div>
                    {/* haven't check this jsx yet */}
                    <ApplicationLogo className="text-white w-18 h-18"/>
                </div>
            {/* Logo Area */}

            {/* Tabs Area */}
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1 ">
                <HomeIcon className="w-6 h-6"/>
                <span className="">Dashboard</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <UserGroupIcon className="w-6 h-6"/>
                <span className="">Team</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <FolderIcon className="w-6 h-6"/>
                <span className="">Projects</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <CalendarIcon className="w-6 h-6"/>
                <span className="">Calendar</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <DocumentDuplicateIcon className="w-6 h-6"/>
                <span className="">Documents</span>
            </button>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <ChartPieIcon className="w-6 h-6"/>
                <span className="">Reports</span>
            </button>
            {/* Tabs end */}

            {/* Teams Area */}
            <h6>Your teams</h6>
            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">H</div>
                <span className="">HeroIcons</span>
            </button>

            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">T</div>
                <span className="">Tailwind Labs</span>
            </button>

            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1">
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">W</div>
                <span className="">Workcation</span>
            </button>
            </div>

            {/* Settings */}

            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1 mt-20">
                <Cog6ToothIcon className="w-6 h-6"/>
                <span className="">Settings</span>
            </button>
        </div>
    </div>
  )
}
