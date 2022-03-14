import React from 'react';

function Nav({setShow}){


    return(
        <nav className=" z-0 float-left w-full md:w-3/4 lg:w-4/5 xl:w-10/12 flex items-center justify-between px-3  bg-white h-20 border-b-2">
            <div>
                <span onClick={()=> setShow("-ml-0")} className=" block md:hidden"><i className="fa-solid fa-bars text-2xl"></i></span>
            </div>
            <div className=" w-max flex items-center justify-end gap-3">
                <div className=' relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 p-3 '>
                    <i className="fa-regular fa-envelope sm:text-2xl"></i>
                    <div className="absolute top-0 right-0 w-2 h-2  sm:w-3 sm:h-3 rounded-full bg-red-600 after:absolute after:top-0 after:left-0 after:w-2 after:h-2 sm:after:w-3 sm:after:h-3 after:rounded-full after:bg-red-600 after:animate-ping"></div>
                </div>
                <div className=' relative w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-200 p-3'>
                    <i className="fa-regular fa-bell sm:text-2xl"></i>
                    <div className="absolute top-0 right-0 w-2 h-2  sm:w-3 sm:h-3 rounded-full bg-red-600 after:absolute after:top-0 after:left-0  after:w-2 after:h-2 sm:after:w-3 sm:after:h-3 after:rounded-full after:bg-red-600 after:animate-ping"></div>
                </div>

                <div className=" w-max h-20 flex items-center">
                    <div className=" w-10 h-10 sm:w-14 sm:h-14 bg-gray-500 rounded-full bg-[url('../images/user.jpg')] bg-center bg-cover bg-no-repeat"></div>
                    <div className="flex flex-col items-start pl-2">
                        <h3 className=" text-xs sm:text-sm text-gray-500 font-bold">MD. Mehedi Hasan</h3>
                        <h4 className="text-xs text-gray-400">Admin</h4>
                    </div>

                </div>
            </div>

        </nav>
    )
}

export default Nav;