import React from 'react';
import {Col, Form, Input, Select} from "antd";
import CustomFormItem from "./renderFormItem";

function CustomForm(props) {
    const {
        form,
        formData,
        handleFinish
    }=props

    return (
        <Form
            form={form}
            onFinish={handleFinish}
        >
            {
                formData?.map((item)=>{
                    return (<Col {...item.colProps} key={item.key}>
                        <Form.Item {...item.itemProps}>
                            <CustomFormItem formItem={item}/>
                        </Form.Item>
                    </Col>)
                })
            }
        </Form>
    );
}

export default CustomForm;