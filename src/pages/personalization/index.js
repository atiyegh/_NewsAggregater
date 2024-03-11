import React from 'react';
import {Col } from "antd";
import CustomForm from "../../components/UI/CustomForm";
import useLogicPersonalization from "./useLogicPersonalization";

function Personalization() {

    //This is a custom hook to handle the logic of personalization page
    const {formProps}=useLogicPersonalization();

    return (
        <Col span={24} style={{height:'100vh', marginTop:'50px'}}>
             <CustomForm {...formProps}/>
        </Col>
    );
}

export default Personalization;