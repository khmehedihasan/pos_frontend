import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Delete, Edit, Return, View } from '../../components/Button';
import Layout from '../../components/Layout';
import Table, { Tr, Td, Img } from '../../components/Table';


function AllCategory(){

    const category = useSelector((state)=>state.category);

    return(
        <Layout>

            <Table to="/addCategory" name="Add Category" rowNames={["#","Name","Description","Poto","Actions"]}>
                {
                    category.map(({name, description, img}, index)=>{
                        return(
                            <Tr key={index}>
                                <Td>{index+1}</Td>
                                <Td>{name}</Td>
                                <Td>{description}</Td>
                                <Img>{img}</Img>
                                <Td>
                                    <View to="/" />
                                    <Edit to="/" />
                                    <Delete />
                                </Td>
                            </Tr>
                        );
                    })
                }
                
            </Table>

        </Layout>
    )
}

export default AllCategory;