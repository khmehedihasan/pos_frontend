import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {BannerG, BannerR, BannerF, BannerT, BannerC, BannerS} from "../../components/Banner";
import { Delete, Edit, Return, View } from '../../components/Button';
import Table, { Tr, Td, Img } from '../../components/Table';
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import Layout from '../../components/Layout'
import url from "../../url";
import AddProduct from "../product/AddProduct";

function ViewSupplier(){

    const [supplier, setSupplier] = useState({name:'',img:'',email:'',phone:'',address:'', payable: 0, payed: 0, due: 0,purchases:[]});
    const {id} = useParams();

    useEffect(()=>{

        fetch(`${url}/supplier/${id}`).then((data)=>data.json()).then((data)=>{
            setSupplier(data.data)
            console.log(data)
        });

    },[id]);
    console.log(supplier)

    return(
        <Layout>
            <div className=" bg-white drop-shadow-md w-11/12 mx-auto mt-4 rounded-sm  h-max p-4">
                <div className=" h-max mb-4 flex flex-wrap gap-3 justify-center">
                    <Link className=" px-4 py-1 bg-blue-500 rounded-3xl text-white font-bold border-2 border-blue-500 hover:bg-white hover:text-blue-500" to={"/supplier/edit/"+supplier._id}><i className="fa-solid fa-pen-to-square"></i> Edit</Link>
                    <Link className=" px-4 py-1 bg-orange-600 rounded-3xl text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" to="/"><i className="fa-solid fa-cart-plus"></i> Purchase</Link>
                    <Link className=" px-4 py-1 bg-green-500 rounded-3xl text-white font-bold border-2 border-green-500 hover:bg-white hover:text-green-500" to="/"><i className="fa-solid fa-cart-shopping"></i> Sale</Link>
                    <Link className=" px-4 py-1 bg-red-500 rounded-3xl text-white font-bold border-2 border-red-500 hover:bg-white hover:text-red-500" to="/"><i className="fa-solid fa-share"></i> Return</Link>
                </div>
                <div className=" rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 m-1 flex flex-col md:flex-row">
                    <img src={supplier.img} alt=" " className=" w-full md:w-1/3 rounded-tr-md rounded-tl-md md:rounded-bl-md md:rounded-tr-none" />
                    <div className="p-2 text-cyan-700">
                        <h1><span className=" font-bold">Name: </span>{supplier.name}</h1>
                        <h1><span className=" font-bold">Email: </span>{supplier.email}</h1>
                        <h1><span className=" font-bold">Phone: </span>{supplier.phone}</h1>
                        <p className=" text-justify"><span className=" font-bold">Address: </span>{supplier.address}</p>
                    </div>
                </div>
                <div className=" flex flex-col gap-4 mt-4 md:flex-row md:flex-wrap flex-grow">
                    <BannerF  name="Payable:" >{supplier.payable} ৳</BannerF>
                    <BannerT  name="Payed:" >{supplier.payed} ৳</BannerT>
                    {/* <BannerC  name="Purchase quantity:" >{}</BannerC>
                    <BannerS  name="Sale quantity:" >{}</BannerS> */}
                    {
                        (supplier.due  > 0)?<BannerR  name="Due:" >{supplier.due} ৳</BannerR>:<BannerG  name="Due:" color="green">{supplier.due} ৳</BannerG>
                    }
                    
                </div>
            </div>
            <div className=" bg-white drop-shadow-md w-11/12 mx-auto mt-4 rounded-sm  h-max p-4">
                {/* <AlertContainer>
                    {alert}
                </AlertContainer> */}
                <Table to="/product/add" name="Add Product" rowNames={["#","Name","Description", "Sub category", "Purchase price", "Sale price", "Photo","Actions"]}>
                    {
                        // supplier.purchases.map(({_id, name, description, subCategory, purchasePrice, salePrice, img}, index)=>{
                        //     return(
                        //         <Tr key={index}>
                        //             <Td>{index+1}</Td>
                        //             <Td>{name}</Td>
                        //             <Td>{description}</Td>
                        //             <Td>{subCategory.name}</Td>
                        //             <Td>{purchasePrice} <span className="text-xl text-red-600"> ৳</span></Td>
                        //             <Td>{salePrice} <span className="text-xl text-red-600"> ৳</span></Td>
                        //             <Img>{img}</Img>
                        //             <Td>
                        //                 <View to={"/product/"+_id} />
                        //                 <Edit to={"/product/edit/"+_id} />
                        //                 <Return to="/" />
                        //                 {/* <Delete id={_id} click={delet} /> */}
                        //             </Td>
                        //         </Tr>
                        //     );
                        // })
                    }
                    
                </Table>
            </div>
        </Layout>
    );
}

export default ViewSupplier;