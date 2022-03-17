import React from "react";

function Button1({name, click}){
    return(
        <button type="button" onClick={click} className=" bg-blue-600 hover:bg-blue-700 text-white px-10 py-1 mt-5 rounded-sm">{name}</button>
    )
}

export { Button1 };