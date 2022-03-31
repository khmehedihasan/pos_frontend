import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "../../url";

function Print(){

    const [purchase, setPurchase] = useState({_id:'', supplier:'', product:[], payable:0, payed:0, due:0, quantity:0, date:''});
    const {id} = useParams();

    useEffect(()=>{

        fetch(`${url}/purchase/${id}`).then((data)=>data.json()).then((data)=>{
            setPurchase(data.data);
            window.print();
        });

    },[id]);

    console.log(purchase)
    // <button onClick={()=>window.print()} className='no-printme'><i className="fa-solid fa-print"></i></button>
    return(
        <div className=" w-11/12 mx-auto mt-4 rounded-sm  h-max p-4">
            <button onClick={()=>window.print()} className='no-printme'><i className="fa-solid fa-print"></i></button>
            <div className="text-center">
                <div className=" text-xl font-bold p-2 "><i className="fa-brands fa-canadian-maple-leaf text-2xl"></i> KH POS</div>
                <div className=" text-sm"><p>Narsinghapur, Ashulia Highway, Savar, Dhaka.</p></div>
                <div className=" text-sm"><i className="fa-solid fa-phone"></i> 0123456789</div>
                <div className=" text-sm"><i className="fa-regular fa-envelope"></i> domo@gmail.com</div>
                <div className=" text-sm"><i className="fa-solid fa-earth-americas"></i> khshop.com</div>
            </div>
            <div className=" rounded-md m-1 flex flex-col md:justify-evenly md:flex-row ">
                <table className=" w-full table-auto border-collapse border-slate-500 mt-10">
                    <thead>
                        <tr className=" text-left border-slate-500 border-b">
                            <th>Product Name</th>
                            <th>Purchase price</th>
                            <th> Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-slate-500 border-b">
                            <td>{purchase.product.name}</td>
                            <td>{purchase.product.purchasePrice}  ৳</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.payable}  ৳</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <th className="  text-left">Payable :</th>
                            <td className="  ">{purchase.payable}  ৳</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <th className=" border-slate-500 border-b text-left">Payed :</th>
                            <td className=" border-slate-500 border-b  ">{purchase.payed}  ৳</td>
                        </tr>
                        <tr >
                            <td></td>
                            <td></td>
                            <th className="  text-left">Due :</th>
                            <td className=" ">{purchase.due}  ৳</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <div className=" w-72 border-slate-500 border-b text-center mt-40"><b>BILL TO</b></div>
                <div><b> Name : </b>{purchase.supplier.name}</div>
                <div><b> Address : </b>{purchase.supplier.address}</div>
                <div><b> Phone : </b>{purchase.supplier.phone}</div>
                <div><b> Email : </b>{purchase.supplier.email}</div>
            </div>
        </div>
    );
}

export default Print;