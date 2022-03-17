import React from "react";


function AlertContainer({children}){
    return(
        <div className=" absolute right-0 flex flex-col">{children}</div>
    )
}

function Alert1({title, message}){
    return(
        <div className=" relative w-72 sm:w-80 h-max px-3 py-1 mt-4 mr-2 float-right rounded-md z-20 bg-green-200 before:absolute before:h-full before:w-1 before:top-0 before:left-0 before:bg-green-500 before:rounded-tl-md before:rounded-bl-md ">
            <h1 className=" text-lg font-bold text-green-600">{title}</h1>
            <p className=" text-md text-green-600">{message}</p>
        </div>
    )
}

function Alert2({title, message}){
    return(
        <div className=" relative w-72 sm:w-80 h-max px-3 py-1 mt-4 mr-2 rounded-md z-20 bg-red-200 before:absolute before:h-full before:w-1 before:top-0 before:left-0 before:bg-red-500 before:rounded-tl-md before:rounded-bl-md ">
            <h1 className=" text-lg font-bold text-red-600">{title}</h1>
            <p className=" text-md text-red-600">{message}</p>
        </div>
    )
}

export { Alert1, Alert2, AlertContainer };