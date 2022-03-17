import React from 'react';
import Layout from '../../components/Layout';
import { Input1, Textarea } from '../../components/Input';
import { Button1 } from '../../components/Button';
import { Form1 } from '../../components/Form';


function AddCategory(){
    return(
        <Layout>
            <Form1 title="Add Category" >
                <Input1 type="text" placeholder="Enter Category name..." lavel="Category name:" id="input1" />
                <Textarea  placeholder="Enter Category description..." lavel="Category description:" id="input2" />
                <Input1 type="file" lavel="Category photo:"id="input3" />
                <Button1 name="Save" />
            </Form1> 
        </Layout>
    )
}

export default AddCategory;