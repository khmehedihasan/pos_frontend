import React from 'react';

function Input1({onChange, type, name, value, placeholder, lavel, id, fileRef}){

    return(
        <>
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1">{lavel}</label>
            <input className=" w-full outline-none focus:bg-cyan-100 pl-2 py-1 rounded-sm text-gray-600 required:border-red-500" id={id} onChange={onChange} type={type} name={name} value={value} placeholder={placeholder} />
        </>
    )
}

function Textarea({onChange, type, name, value, placeholder, lavel, id}){

    return(
        <>
            <label htmlFor={id} className="block cursor-pointer mt-2 mb-1 ">{lavel}</label>
            <textarea className=" w-full outline-none focus:bg-cyan-100 pl-2 rounded-sm text-gray-600 required:border-red-500" onChange={onChange} id={id} name={name} value={value} placeholder={placeholder} cols="20" rows="10"></textarea>
        </>
    )
}

 export { Input1, Textarea } ;
