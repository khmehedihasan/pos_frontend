import React, { useEffect, useRef, useState } from 'react';
import OutsideClick from '../hooks/OutsideClick';
import Nav from './Nav';
import SideBarToggler from './SideBarToggler';

const data = [
    {
        title:'Category',
        icon: <i className="fa-brands fa-buffer pr-2"></i>,
        links:['All Category','Add Category']
    },
    {
        title:'Sub Category',
        icon: <i className="fa-solid fa-align-left pr-2"></i>,
        links:['All Sub Category','Add Sub Category']
    },
    {
        title:'Product',
        icon: <i className="fa-solid fa-apple-whole pr-2"></i>,
        links:['All Product','Add Product']
    },
]

function SideBar(){
    const [active, setActive] = useState(-1);
    const [show, setShow] = useState('-ml-80');
    const outClick = useRef(null);
    const outSideClick = OutsideClick(outClick);

    useEffect(()=>{
        if(outSideClick){
            setShow('-ml-80')
        }
    },[outSideClick]);

    
    


    return(
        <>
            
            <div ref={(show === '-ml-80')? null:outClick} className={show + " block ease-in-out duration-700 float-left absolute top-0 left-0 z-10 md:static md:-ml-0 w-1/2 sm:w-2/5 md:w-1/4 lg:w-1/5 xl:w-2/12 h-screen bg-dark-blue-2"}>
                <div className=" text-xl text-white font-bold p-6 bg-dark-blue-1"><i className="fa-brands fa-canadian-maple-leaf text-2xl"></i> KH POS</div>
                    {
                        data.map((data,index)=>{
                            return(
                                <SideBarToggler key={index} index={index} activeIndex={active} setShow={setShow} setActive={setActive} data={data} />
                            )
                        })
                    }
            </div>
            <Nav setShow={setShow} />
        </>
    )
}

export default SideBar;