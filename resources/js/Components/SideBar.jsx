import React from 'react'
import {
    HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, Cog6ToothIcon
} from '@heroicons/react/24/outline'
import ApplicationLogo from './ApplicationLogo'
import SideBarButton from './SideBarButton'

/* text-slate-200(?) hover:text-white */
/* sticky */


export default function SideBar() {
  return (
    <div className="">
        {/* flex container, not sure sa justify and items */}
        <div className="text-black dark:text-white px-4 bg-blue-700 rounded-r-lg">
            {/*  */}
                <div className="flex mb-8 pt-4">
                    {/* haven't check this jsx yet */}
                    <ApplicationLogo className="text-white w-12 h-12"/>
                </div>
            <div className="max-w-2xl space-y-2">
            {/* Logo Area */}
            {/* Logo end*/}

            {/* Tabs Area */}
            <SideBarButton>
                <HomeIcon className="w-6 h-6"/>
                <span className="">Dashboard</span>
            </SideBarButton>
            <SideBarButton>
                <UserGroupIcon className="w-6 h-6"/>
                <span className="">Team</span>
            </SideBarButton>
            <SideBarButton>
                <FolderIcon className="w-6 h-6"/>
                <span className="">Projects</span>
            </SideBarButton>
            <SideBarButton>
                <CalendarIcon className="w-6 h-6"/>
                <span className="">Calendar</span>
            </SideBarButton>
            <SideBarButton>
                <DocumentDuplicateIcon className="w-6 h-6"/>
                <span className="">Documents</span>
            </SideBarButton>
            <SideBarButton>
                <ChartPieIcon className="w-6 h-6"/>
                <span className="">Reports</span>
            </SideBarButton>

            <SideBarButton>
                <DocumentDuplicateIcon className="w-6 h-6"/>
                <span>SideBarButtonComponentImports</span>
            </SideBarButton>
            {/* Tabs end */}

            {/* Teams Area */}
            <h6>Your teams</h6>
            <SideBarButton>
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">H</div>
                <span className="">HeroIcons</span>
            </SideBarButton>

            <SideBarButton>
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">T</div>
                <span className="">Tailwind Labs</span>
            </SideBarButton>

            <SideBarButton>
                <div className="px-2 py-1 border border-slate-400 bg-slate-300 bg-transparent rounded text-xs bg-opacity-30">W</div>
                <span className="">Workcation</span>
            </SideBarButton>
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
