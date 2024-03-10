import React from 'react';
import {Button, Col, Form, Input, Row, Select} from "antd";
import {categories} from "../../data";

function Personalization() {
    const [form]=Form.useForm();

    const handleFinish=()=>{
        //Probably there be an API call to make the users feed based on what has been selected in this form
        console.log("submitted")
    }

    return (
        <Col span={24} style={{height:'100vh', marginTop:'50px'}}>
            <Row justify={"center"}>
                <Form
                    form={form}
                    style={{width:'100%'}}
                    onFinish={handleFinish}
                >
                    <Row wrap={true} gutter={[25]} justify={"center"}>
                        <Col xs={24} sm={10} md={6} lg={5} xl={4}>
                            <Form.Item name={"author"} label={"author"} >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={10} md={6} lg={5} xl={4}>
                            <Form.Item name={"source"} label={"Sources"} >
                                <Select
                                    options={localStorage.getItem("sourceOptions") ? JSON.parse(localStorage.getItem("sourceOptions")) : []}
                                    showSearch={true}
                                    allowClear={true}
                                    mode={"multiple"}
                                />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={10} md={6} lg={5} xl={4}>
                            <Form.Item name={"category"} label={"Categories"} >
                                <Select
                                    options={categories}
                                    showSearch={true}
                                    allowClear={true}
                                    mode={"multiple"}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify={"start"}>
                        <Button type={"default"} htmlType={"submit"} onSubmit={handleFinish}>
                            Submit
                        </Button>
                    </Row>
                </Form>
            </Row>
        </Col>
    );
}

export default Personalization;