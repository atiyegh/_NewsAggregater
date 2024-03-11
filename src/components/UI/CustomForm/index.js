import React from 'react';
import {Button, Col, DatePicker, Form, Input, Row, Select} from "antd";
import {formItemTypes} from "../../../types";
const { RangePicker } = DatePicker;
//This component is to render ant design form, you can send formData as an array and there could be other repeated patterns of a form in this component
//for example checking data validation before submition or default css styles.
function CustomForm(props) {
    const {
        form,
        formData,
        formClassName,
        formStyle,
        rowStyles,
        submitBtnProps,
        ...rest
    }=props

    const renderFormInput=(formItem)=>{
        switch (formItem.type){
            case formItemTypes.input: return <Input {...formItem?.propsSource}/>
            case formItemTypes.select: return <Select {...formItem?.propsSource}/>
            case formItemTypes.date: return <DatePicker {...formItem.propsSource}/>
            case formItemTypes.dateRange:return <RangePicker {...formItem.propsSource} />
            default : return <Input {...formItem?.propsSource}/>
        }
    }

    return (
        <Form
            form={form}
            style={formStyle}
            className={formClassName}
            {...rest}
        >
            <Row justify={"center"} wrap={true} gutter={[20,0]} {...rowStyles}>
                {
                    formData?.map((item)=>{
                        return (<Col {...item.colProps} key={item.key}>
                            <Form.Item {...item.itemProps}>
                                {
                                    renderFormInput(item)
                                }
                            </Form.Item>
                        </Col>)
                    })
                }
            </Row>
            {submitBtnProps && <Row justify={'start'}>
                <Button htmlType={"submit"} {...submitBtnProps}>{submitBtnProps?.label ?? "submit"}</Button>
            </Row>}
        </Form>
    );
}

export default CustomForm;