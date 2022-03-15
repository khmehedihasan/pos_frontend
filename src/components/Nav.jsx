import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Nav({setShow}){

    const [show1, setShow1] = useState('hidden');

    const [clickedOutside, setClickedOutside] = useState(false);
    const myRef = useRef();

    useEffect(()=>{
        if(clickedOutside){
            setShow1('hidden')
            console.log(show1)
        }
      
    },[clickedOutside]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    });

    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
            setClickedOutside(true);
        }
    };

    

    return(
        <nav className=" z-0 float-left w-full md:w-3/4 lg:w-4/5 xl:w-10/12 flex items-center justify-between px-6  bg-white h-20 border-b-2">
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

                <div onMouseEnter={()=> setShow1('block')} onClick={()=> {setShow1('block'); setClickedOutside(false)}} className=" w-max h-20 flex items-center">
                    <div className=" w-10 h-10 sm:w-14 sm:h-14 bg-gray-500 rounded-full bg-[url('../images/user.jpg')] bg-center bg-cover bg-no-repeat"></div>
                    <div className="flex flex-col items-start pl-2">
                        <h3 className=" text-xs sm:text-sm text-gray-500 font-bold">MD. Mehedi Hasan</h3>
                        <h4 className="text-xs text-gray-400">Admin</h4>
                    </div>
                </div>
                <div onMouseLeave={()=> setShow1('hidden')} ref={myRef} className={show1 + " w-52 h-60 bg-white  absolute top-20 mt-1 right-6"}>
                    <div className=" w-full h-24 p-4 bg-dark-blue-1 before:w-4 before:h-4 before:absolute before:-top-2 before:right-5 before:bg-dark-blue-1 before:rotate-45">
                        <h4 className="text-sm text-white">Admin</h4>
                        <h3 className=" text-md sm:text-lg text-white font-bold">MD. Mehedi Hasan</h3>
                        
                        <div className=""></div>
                    </div >
                    <div className="">
                        <NavLink onClick={()=> setShow1('hidden')} className=" w-full py-2 pl-3 cursor-pointer hover:bg-yellow-400 hover:text-white block" to="/" ><i className="fa-solid fa-user"></i> My Profile</NavLink>
                        <NavLink onClick={()=> setShow1('hidden')} className=" w-full py-2 pl-3 cursor-pointer hover:bg-blue-400 hover:text-white block" to="/" ><i className="fa-solid fa-gear"></i> Settings</NavLink>
                        <button className=" w-full py-2 pl-3 hover:bg-red-600 hover:text-white text-left"><i className="fa-solid fa-right-from-bracket"></i> Log Out</button>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Nav;