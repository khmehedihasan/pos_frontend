import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, Invoice, Due} from '../../components/Button';
import Layout from '../../components/Layout';
import Table, { Tr, Td, Img } from '../../components/Table';
import url from '../../url'
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import { REMOVE_PRODUCT } from '../../store/actions/product';


function AllPurchase(){

    const [alert, setAlert] = useState([]);
    const purchase = useSelector((state)=>state.purchase);
    const dispatch = useDispatch();

    // function delet(id){

    //     fetch(`${url}/purchase/${id}`,{method:'delete'}).then((data)=>data.json()).then((data)=>{
    //         if(data.status === true){
    //             dispatch(REMOVE_PRODUCT(id));

    //             setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message={data.message} />]);
    //         }else{
    //             setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message={data.message} />]);
    //         }
    //     });
    // }

    return(
        <Layout>
            <AlertContainer>
                {alert}
            </AlertContainer>
            <Table to="/purchase/add" name="Purchase Product" rowNames={["#","Product","Supplier", "Payable", "Payed", "Due", "Quantity","Date","Actios"]}>
                {
                    purchase.map(({_id, supplier, product, payable, payed, due, quantity, date}, index)=>{
                        const d = new Date(date);
                        const dat = d.toDateString();
                        return(
                            <Tr key={index}>
                                <Td>{index+1}</Td>
                                <Td>{product.name} <View to={"/product/"+product._id} /></Td>
                                <Td>{supplier.name} <View to={"/supplier/"+supplier._id} /></Td>
                                <Td>{payable}<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{payed}<span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{due} <span className="text-xl text-red-600"> ৳</span></Td>
                                <Td>{quantity} </Td>
                                <Td>{dat} </Td>
                                
                                <Td>
                                    <Invoice to={"/purchase/invoice/"+_id} />
                                    {
                                        (due > 0)? <Due />:<span className="w-6 h-3 inline-block"></span>
                                    }
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