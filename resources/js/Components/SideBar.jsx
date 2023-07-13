import React from 'react'
import {
    HomeIcon, UserGroupIcon, FolderIcon, CalendarIcon, DocumentDuplicateIcon, ChartPieIcon, Cog6ToothIcon
} from '@heroicons/react/24/outline'
import ApplicationLogo from './ApplicationLogo'
import SideBarButton from './SideBarButton'

/* text-slate-200(?) hover:text-white */
/* sticky */
/* edit so that Content fits in the ResponsiveNavLink */


export default function SideBar({}) {
  return (
    <>
        {/* Content */}
        <div className="text-black dark:text-white p-4 bg-transparent sm:bg-current sm:bg-blue-700 sm:dark:bg-black rounded-l-lg space-y-4">
                {/* Logo Area */}
                <div className="hidden sm:flex mb-8 pt-4">
                    
                    <ApplicationLogo className="stroke-red-800 fill-red-500 w-12 h-12"/>
                </div>
                 {/* Logo end*/}
            
        
        {/* Content */}
        <div className="flex flex-col gap-y-6 mb-6">
            {/* Tabs Area */}
            <div className="flex flex-col gap-y-2">
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
            </div>
            {/* Tabs end */}

            {/* Teams Area */}
            
            
            <div className="flex flex-col gap-y-2">
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
        </div>

            {/* Settings */}

            <button className="flex items-center space-x-2 hover:bg-slate-500 w-full focus:bg-slate-500 px-2 py-1 mt-full">
                <Cog6ToothIcon className="w-6 h-6"/>
                <span className="">Settings</span>
            </button>
        </div>
    </>
  )
}
