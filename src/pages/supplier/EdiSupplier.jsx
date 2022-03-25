import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { Input1, Input2 } from '../../components/Input';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';
import url from '../../url'
import { Alert1, Alert2, AlertContainer } from '../../components/Alert';
import { UPDATE_SUPPLIER } from '../../store/actions/supplier';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';


function EditSupplier(){

    const [alert, setAlert] = useState([]);
    const [value,setValue] = useState({name:'', email:'', phone:'', address:'', file:{}});
    const {id} = useParams();

    const dispatch = useDispatch();

    function input(e){
        setValue({...value,[e.target.name]:e.target.value});
    }
    function file(e){
        setValue({...value,[e.target.name]:e.target.files[0]});
    }

    useEffect(()=>{
        fetch(`${url}/supplier/${id}`).then((data)=>data.json()).then((data)=>{
            const {name, email, phone, address, img} = data.data;
            setValue({name, email, phone, address, img});
        });

    },[id]);




    function send(){
        if(value.name === ''){
            setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message="Name field is required." />]);
        }else{

            const formData = new FormData();

            formData.append('name',value.name);
            formData.append('email',value.email);
            formData.append('phone',value.phone);
            formData.append('address',value.address);
            formData.append('photo',value.file);

            fetch(`${url}/supplier/${id}`,{
                method:"PUT",
                body: formData
            }).then((data)=>data.json()).then((data)=>{
                if(data.status === true){
                    dispatch(UPDATE_SUPPLIER({id,data:data.data}))
                    setAlert((alert)=>[...alert, <Alert1 key={ Date.now()} title="Successful" message={data.message} />]);
                    setValue({name:'', email:'', phone:'', address:'', file:{}});
                }else{
                    setAlert((alert)=>[...alert, <Alert2 key={ Date.now()} title="Faild !" message={data.message} />]);
                }
            });
        }
        

    }


    return(
        <Layout>
            <AlertContainer>
                {alert}
            </AlertContainer>

            <Form1 title="Edit Supplier" >
            <Input1 type="text" onChange={input} name="name" value={value.name} placeholder="Enter Supplier name..." lavel="Supplier name:" id="input1" />
                <Input1 type="email" onChange={input} name="email" value={value.email} placeholder="Enter Supplier email..." lavel="Supplier email:" id="input2" />
                <Input1 type="number" onChange={input} name="phone" value={value.phone} placeholder="Enter Supplier phone..." lavel="Supplier phone no." id="input3" />
                <Input1 type="address" onChange={input} name="address" value={value.address} placeholder="Enter Supplier address..." lavel="Supplier address:" id="input4" />
                <Input2 onChange={file} name="file" type="file" lavel="Supplier photo:" id="input5" img={value.img} />
                <Button1 click={send} name="Save" />
            </Form1> 
        </Layout>
    )
}

export default EditSupplier;