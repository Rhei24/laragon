import React from 'react'

/* <SideBarButton> </SideBarButton> */
/*  just the button skeleton for now */


export default function SideBarButton( {children}) {
  return (
    <>
    <button 
    className="flex items-center space-x-2 hover:bg-slate-500 focus:bg-slate-500 rounded-md px-2 py-1 w-full">
    {children}
    </button>
    </>
  )
}


