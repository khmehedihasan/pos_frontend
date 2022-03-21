import React from "react";
import { Link } from "react-router-dom";

function Button1({name, click}){
    return(
        <button type="button" onClick={click} className=" bg-blue-600 hover:bg-blue-700 text-white px-10 py-1 mt-5 rounded-sm">{name}</button>
    )
}

function View({to}){
    return(
        <Link to={to}>
            <button className=" relative p-1 after:absolute after:bottom-0 after:right-0 after:hover:bg-black after:text-white after:text-xs after:hover:content-['View'] after:mb-6 after:px-2 after:py-0.5 after:rounded-sm"><i className="fa-solid fa-eye"></i></button>
        </Link>
    );
}

function Edit({to}){
    return(
        <Link to={to}>
            <button className=" relative p-1 after:absolute after:bottom-0 after:right-0 after:hover:bg-black after:text-white after:text-xs after:hover:content-['Edit'] after:mb-6 after:px-2 after:py-0.5 after:rounded-sm"><i className="fa-solid fa-pen-to-square"></i></button>
        </Link>
    );
}

function Return({to}){
    return(
        <Link to={to}>
            <button className=" relative p-1 after:absolute after:bottom-0 after:right-0 after:hover:bg-black after:text-white after:text-xs after:hover:content-['Return'] after:mb-6 after:px-2 after:py-0.5 after:rounded-sm"><i className="fa-solid fa-rotate-left"></i></button>
        </Link>
    );
}

function Delete({id, click}){
  
    function check(){
        if(window.confirm("Do you want to delete this ?")){
            click(id)
        }
    }
    return(
        <button onClick={check} className=" relative p-1 after:absolute after:bottom-0 after:right-0 after:hover:bg-black after:text-white after:text-xs after:hover:content-['Delete'] after:mb-6 after:px-2 after:py-0.5 after:rounded-sm"><i className="fa-solid fa-trash"></i></button>
    );
}

export { Button1, View, Edit, Return, Delete };