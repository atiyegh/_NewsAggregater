import React from 'react';
import {Col, Form, Row} from "antd";
import CustomFormItem from "./renderFormItem";

//This component is to render ant design form, you can send formData as an array and there could be other repeated patterns of a form in this component
//for example checking data validation before submition or default css styles.
function CustomForm(props) {
    const {
        form,
        formData,
        formClassName,
        formStyle,
        rowStyles,
        ...rest
    }=props

    return (
        <Form
            form={form}
            style={formStyle}
            className={formClassName}
            {...rest}
        >
            <Row justify={"center"} wrap={true} gutter={[20,20]} {...rowStyles}>
                {
                    formData?.map((item)=>{
                        return (<Col {...item.colProps} key={item.key}>
                            <Form.Item {...item.itemProps}>
                                <CustomFormItem formItem={item}/>
                            </Form.Item>
                        </Col>)
                    })
                }
            </Row>
        </Form>
    );
}

export default CustomForm;