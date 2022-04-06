import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Return, Invoice, Due} from '../../../components/Button';
import Layout from '../../../components/Layout';
import Table, { Tr, Td } from '../../../components/Table';
import url from '../../../url';


function AllPurchase(){

    const [retrn, setReturn] = useState([]);

    useEffect(()=>{
        fetch(`${url}/return/supplier/`).then((data)=>data.json()).then((data)=>setReturn(data.data))
        return ()=> setReturn([])
    },[]);

    console.log(retrn)

    return(
        <Layout>
            <Table to="/purchase/add" name="Purchase Product" rowNames={["#","Product","Supplier","Purchase", "Before Stock", "Return", "After Stock", "In Stock", "Purchase Price", "Got Money","Date","Invoice"]}>
                {
                    retrn.map(({_id, supplier, product, purchase, payable, payed, due, quantity, previousStock, date}, index)=>{
                        const d = new Date(date);
                        const dat = d.toDateString();
                        return(
                            <Tr key={index}>
                                <Td>{index+1}</Td>
                                <Td>{product.name} <View to={"/product/"+product._id} /></Td>
                                <Td>{supplier.name} <View to={"/supplier/"+supplier._id} /></Td>
                                <Td> <Invoice to={"/purchase/invoice/"+purchase._id} /></Td>
                                <Td>{previousStock} </Td>
                                <Td>{quantity} </Td>
                                <Td>{previousStock - quantity} </Td>
                                <Td>{product.inStock} </Td>
                                <Td>{product.purchasePrice}<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{product.purchasePrice} X {quantity} ={product.purchasePrice * quantity }<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{dat} </Td>
                                
                                <Td>
                                    <Invoice to={"/purchase/invoice/"+_id} />
                                </Td>
                            </Tr>
                        );
                    })
                }
                
            </Table>

        </Layout>
    )
}

export default AllPurchase;