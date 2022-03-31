import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {BannerG, BannerR, BannerF, BannerT, BannerC, BannerS} from "../../components/Banner";
import Layout from '../../components/Layout'
import { Img } from "../../components/Table";
import url from "../../url";

function ViewPurchase(){

    const [purchase, setPurchase] = useState({_id:'', supplierName:'', product:[], payable:0, payed:0, due:0, quantity:0, date:''});
    const {id} = useParams();

    useEffect(()=>{

        fetch(`${url}/purchase/${id}`).then((data)=>data.json()).then((data)=>{
            setPurchase(data.data)
        });

    },[id]);
    console.log(purchase)

    return(
        <Layout>
            <div className=" bg-white drop-shadow-md w-11/12 mx-auto mt-4 rounded-sm  h-max p-4">
                <div className=" h-max mb-4 flex flex-wrap gap-3 justify-center">
                    <Link className=" px-4 py-1 bg-orange-600 rounded-3xl text-white font-bold border-2 border-orange-500 hover:bg-white hover:text-orange-500" to="/"><i className="fa-solid fa-cart-plus"></i> Purchase</Link>
                    <Link className=" px-4 py-1 bg-green-500 rounded-3xl text-white font-bold border-2 border-green-500 hover:bg-white hover:text-green-500" to="/"><i className="fa-solid fa-cart-shopping"></i> Sale</Link>
                    <Link className=" px-4 py-1 bg-red-500 rounded-3xl text-white font-bold border-2 border-red-500 hover:bg-white hover:text-red-500" to="/"><i className="fa-solid fa-share"></i> Return</Link>
                </div>
                <div className=" rounded-md bg-gradient-to-r from-cyan-200 to-cyan-400 m-1 flex flex-col md:justify-evenly md:flex-row">
                    <div className="p-2 text-cyan-700">
                        <h1><span className=" font-bold">Product name: </span>{purchase.product.name}</h1>
                        <h1><span className=" font-bold">Purchase price: </span>{purchase.product.purchasePrice} ৳</h1>
                        <h1><span className=" font-bold">Sale Price: </span>{purchase.product.salePrice} ৳</h1>
                        <h1><span className=" font-bold">Purchase quantity: </span>{purchase.product.purchaseQuantity} </h1>
                        <h1><span className=" font-bold">Sale quantity: </span>{purchase.product.saleQuantity}</h1>

                    </div>
                    <div className="p-2 text-cyan-700">
                        <h1><span className=" font-bold">Supplier name: </span>{purchase.product.name}</h1>
                        <h1><span className=" font-bold">Sub category: </span>{purchase.supplierName}</h1>
                    </div>
                </div>
                {/* <div className=" flex flex-col gap-4 mt-4 md:flex-row md:flex-wrap flex-grow">
                    <BannerC  name="Purchase quantity:" >{purchase.quantity}</BannerC>
                    <BannerF  name="Payable:" >{purchase.payable} ৳</BannerF>
                    <BannerT  name="Payed:" >{purchase.payed} ৳</BannerT>
                    <BannerC  name="Purchase quantity:" >{purchase.purchaseQuantity}</BannerC>
                    <BannerS  name="Sale quantity:" >{purchase.saleQuantity}</BannerS>
                    {
                        (purchase.due  > 0)?<BannerR  name="Due:" >{purchase.due} ৳</BannerR>:<BannerG  name="Due:" color="green">{purchase.due} ৳</BannerG>
                    }
                    
                </div> */}
            </div>
        </Layout>
    );
}

export default ViewPurchase;