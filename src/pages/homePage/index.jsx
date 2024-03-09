import React, {useState} from 'react';
import {Col, Row, Form, Select, Input, Button} from "antd";
import {sources} from "../../data";
import {SearchOutlined} from "@ant-design/icons";

function HomePage() {
    const [form]=Form.useForm();
    const [loading, setLoading] = useState(false)

    const handleFormSubmit=(values)=>{
        console.log("values", values)
    }

    return (
        <Col>
            <Row>
               <Form
                form={form}
                onFinish={handleFormSubmit}
               >
                   <Row wrap={true} gutter={[25]}>
                       <Col span={7}>
                           <Form.Item name={"source"} label={"Sources"} >
                               <Select
                                   options={sources}
                                   aria-multiline={true}

                               />
                           </Form.Item>
                       </Col>
                       <Col span={7}>
                           <Form.Item name={"category"} label={"Categories"} >
                               <Select
                                   options={sources}
                                   aria-multiline={true}
                               />
                           </Form.Item>
                       </Col>
                       <Col span={7}>
                           <Form.Item name={"publishDate"} label={"Publish Date"} >
                               <Input/>
                           </Form.Item>
                       </Col>
                       <Col span={3}>
                           <Button
                               type={"primary"}
                               size={"large"}
                               loading={loading}
                               htmlType={"submit"}
                               icon={<SearchOutlined />}
                               color={"#E74E22"}
                               style={{background:"E74E22" , color:'white', width:'85px'}}
                           >
                               Search
                           </Button>
                       </Col>
                   </Row>
               </Form>
            </Row>
        </Col>
    );
}

export default HomePage;