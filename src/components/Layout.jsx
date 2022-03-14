import React from 'react';
import SideBar from '../components/SideBar';

function Layout({children}){
    return(
        <>
            <SideBar />
            <div className="w-full h-screen bg-slate-100 mx-auto">
               {children}
            </div>
        </>
    )
}

export default Layout;