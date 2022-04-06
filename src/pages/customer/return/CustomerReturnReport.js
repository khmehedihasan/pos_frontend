import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Return, Invoice, Due} from '../../../components/Button';
import Layout from '../../../components/Layout';
import Table, { Tr, Td } from '../../../components/Table';
import url from '../../../url';


function CustomerReturnReport(){

    const [retrn, setReturn] = useState([]);

    useEffect(()=>{
        fetch(`${url}/return/customer/`).then((data)=>data.json()).then((data)=>setReturn(data.data))
        return ()=> setReturn([])
    },[]);

    console.log(retrn)

    return(
        <Layout>
            <Table to="/sale/add" name="Sale Product" rowNames={["#","Product","Customer","sale", "Before Product", "Return", "After Product", "In Stock", "Purchase Price", "Momey Payed","Date","Invoice"]}>
                {
                    retrn.map(({_id, customer, product, sale, quantity, previousSold, date}, index)=>{
                        const d = new Date(date);
                        const dat = d.toDateString();
                        return(
                            <Tr key={index}>
                                <Td>{index+1}</Td>
                                <Td>{product.name} <View to={"/product/"+product._id} /></Td>
                                <Td>{customer.name} <View to={"/customer/"+customer._id} /></Td>
                                <Td> <Invoice to={"/sale/invoice/"+sale._id} /></Td>
                                <Td>{previousSold} </Td>
                                <Td>{quantity} </Td>
                                <Td>{previousSold - quantity} </Td>
                                <Td>{product.inStock} </Td>
                                <Td>{product.purchasePrice}<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{product.purchasePrice} X {quantity} ={product.purchasePrice * quantity }<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{dat} </Td>
                                
                                <Td>
                                    <Invoice to={"/sale/invoice/"+_id} />
                                    {
                                        // (due > 0)? <Due />:<span className="w-6 h-3 inline-block"></span>
                                    }
                                    {/* <Return to="/" /> */}
                                </Td>
                            </Tr>
                        );
                    })
                }
                
            </Table>

        </Layout>
    )
}

export default CustomerReturnReport;