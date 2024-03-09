import React, {useEffect, useState} from 'react';
import {Col, Row, Form, Select, Input, Button, DatePicker} from "antd";
import {categories, sources} from "../../data";
import {SearchOutlined} from "@ant-design/icons";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes} from "../../Api";
const { RangePicker } = DatePicker;
function HomePage() {
    const [form]=Form.useForm();
    const [loading, setLoading] = useState(false);


    const handleFormSubmit=(values)=>{
        console.log("values", values)
    }

    useEffect(() => {
        getNews()
    }, []);

    async function getNews(){
        setLoading(true)
        try{
            const getNewsGuardianResponse=await getNewsFromGuardian()
            console.log({getNewsGuardianResponse})
            if(getNewsGuardianResponse?.response?.status==="ok"){
                const getNewsApiResponse=await getNewsFromNewsApi();
                console.log({getNewsApiResponse})
                if(getNewsApiResponse?.status==="ok"){
                    const getNewsNYTimesResponse=await getNewsFromNYTimes()
                    console.log({getNewsNYTimesResponse})
                }
            }
        }catch(error){
            console.log({error})
        }finally {

        }
    }

    return (
        <Col span={24}>
            <Row>
               <Form
                form={form}
                onFinish={handleFormSubmit}
                style={{width:'100%'}}
               >
                   <Row wrap={true} gutter={[25]}>
                       <Col span={4}>
                           <Form.Item name={"source"} label={"Sources"} >
                               <Select
                                   options={sources}
                                   aria-multiline={true}

                               />
                           </Form.Item>
                       </Col>
                       <Col span={4}>
                           <Form.Item name={"category"} label={"Categories"} >
                               <Select
                                   options={categories}
                                   aria-multiline={true}
                               />
                           </Form.Item>
                       </Col>
                       <Col span={7}>
                           <Form.Item name={"publishDate"} label={"Publish Date"} >
                               <RangePicker
                                   format="YYYY-MM-DD"
                               />
                           </Form.Item>
                       </Col>
                       <Col span={5}>
                           <Button
                               type={"primary"}
                               size={"middle"}
                               loading={loading}
                               htmlType={"submit"}
                               icon={<SearchOutlined />}
                               color={"#E74E22"}
                               style={{background:"E74E22" , color:'white', width:'185px'}}
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