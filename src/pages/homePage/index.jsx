import React, {useEffect, useState} from 'react';
import {Col, Row, Form, Select, Input, Button, DatePicker, Typography} from "antd";
import {categories, sources} from "../../data";
import {SearchOutlined} from "@ant-design/icons";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes} from "../../Api";
const { RangePicker } = DatePicker;
function HomePage() {
    const [form]=Form.useForm();
    // const [loading, setLoading] = useState(false);


    const handleFormSubmit=(values)=>{
        console.log("values", values)
        getNews(values)
    }

    useEffect(() => {
        getNews()
    }, []);

    function makeQueriesForGuardian(filterValues){
        const {category,keyword,source, fromPublishedDate,toPublishedDate}=filterValues;
        console.log({source})
        const categoryQuery=category?`sectionName=${category}`:'';
        const keywordQuery=keyword?`webTitle=${keyword}`:'';
        const fromPublishedDateQuery=fromPublishedDate?`from-date=${fromPublishedDate?.toISOString()}`:''
        const toPublishedDateQuery=toPublishedDate?`to-date=${toPublishedDate?.toISOString()}`:''

        console.log({categoryQuery},{keywordQuery},{fromPublishedDateQuery},{toPublishedDateQuery} )
    }

    function getFilterValues(){
        const category=form.getFieldValue("category") || undefined;
        const keyword=form.getFieldValue("keyword") || undefined;
        const source=form.getFieldValue("source") || undefined;
        const fromPublishedDate=(form.getFieldValue("publishDate") &&
            (form.getFieldValue("publishDate")[0]<=form.getFieldValue("publishDate")[1]?form.getFieldValue("publishDate")[0]:form.getFieldValue("publishDate")[1]
            )) || undefined
        const toPublishedDate=(form.getFieldValue("publishDate") &&
            (form.getFieldValue("publishDate")[0]>form.getFieldValue("publishDate")[1]?form.getFieldValue("publishDate")[0]:form.getFieldValue("publishDate")[1]
            )) || undefined

        return {category,keyword,source,fromPublishedDate,toPublishedDate}
    }
    async function getNews(filters){
        // setLoading(true)
        const filterValues=filters && getFilterValues()
        filterValues && filterValues.source==="theguardian" && makeQueriesForGuardian(filterValues)

        const queriesForGuardian=filters ? `` :"";
        const queriesForNewsApi=filters ? `` : "";
        const queriesForNYTimes=filters? `` :"";

        // try{
        //     const getNewsGuardianResponse=await getNewsFromGuardian(queriesForGuardian ?? "")
        //     console.log({getNewsGuardianResponse})
        //     if(getNewsGuardianResponse?.response?.status==="ok"){
        //         const getNewsApiResponse=await getNewsFromNewsApi(queriesForNewsApi ?? "");
        //         console.log({getNewsApiResponse})
        //         if(getNewsApiResponse?.status==="ok"){
        //             const getNewsNYTimesResponse=await getNewsFromNYTimes(queriesForNYTimes ?? "")
        //             console.log({getNewsNYTimesResponse})
        //         }
        //     }
        // }catch(error){
        //     console.log({error})
        // }finally {
        //     // setLoading(false)
        // }
    }

    return (
        <Col span={24}>
            <Row>
               <Form
                form={form}
                onFinish={handleFormSubmit}
                style={{width:'100%'}}
               >
                   <Row justify={"center"} style={{marginTop:'35px'}}>
                       <Col span={10}>
                           <Row style={{width:'100%'}}>
                               <Typography style={{fontSize:'12px'}}>Search for News</Typography>
                           </Row>
                           <Row>
                               <Col span={24}>
                                   <Form.Item name={"keyword"}  >
                                       <Input placeholder={'Enter a keyword...'} addonBefore={<SearchOutlined />}/>
                                   </Form.Item>
                               </Col>
                           </Row>
                       </Col>
                   </Row>
                   <Row wrap={true} gutter={[25]} justify={"center"}>
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
                               // loading={loading}
                               htmlType={"submit"}
                               // icon={<SearchOutlined />}
                               color={"#E74E22"}
                               style={{ width:'100px'}}
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