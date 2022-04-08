import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from '../../../components/Layout'
import url from "../../../url";
import { Input1} from '../../../components/Input';
import { Button1 } from '../../../components/Button';
import { Form1 } from '../../../components/Form';
import { Alert1, Alert2, AlertContainer } from '../../../components/Alert';

function CustomerDue(){

    const [sale, setSale] = useState({_id:'', customerName:'', product:[], receivable:0, received:0, due:0, quantity:0, date:''});
    const [value,setValue] = useState(0);
    const [alert, setAlert] = useState([]);
    const {id} = useParams();

    useEffect(()=>{

        fetch(`${url}/sale/${id}`).then((data)=>data.json()).then((data)=>{
            setSale(data.data)
        });

    },[id]);

    function input(e){
        setValue(e.target.value);
    }

    function send(){
        fetch(`${url}/due/customer/${id}`,{method:'POST',body: JSON.stringify({received:value})}).then((data)=>data.json()).then((data)=>{
            if(data.status === true){
                setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message={data.message} />]);
                setTimeout(()=>{
                    window.open(`/customer/due/print/${data.data._id}`, "_blank");
                },8000)
            }else{
                setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message={data.message} />]);
            }
        });
    }

    return(
        <Layout>
            <AlertContainer>
                {alert}
            </AlertContainer>

            <Form1 title="Pay Due" >

                <div className=" flex items-center pb-6">
                    <div className=" flex flex-col text-sm md:text-base xl:text-xl">
                        <div className="flex items-center gap-2">
                            <span><b>Receivable:</b> {sale.receivable} ৳</span>
                            <span><b>Received:</b> {sale.received} ৳</span>
                            <span><b>Due:</b> {sale.due} ৳</span>
                        </div>
                        <div className=" mt-3 flex items-center gap-2">
                            <span><b>Received now:</b> {value} ৳</span>
                            <span><b>Due now:</b> {sale.due - value } ৳</span>
                        </div>

                    </div>
                </div>
            
                <Input1 type="number" onChange={input} name="received" value={value} id="input1"  lavel="Pay due:" />

                <Button1 click={send} name="Save" />
            </Form1> 
        </Layout>
    );
}

export default CustomerDue;