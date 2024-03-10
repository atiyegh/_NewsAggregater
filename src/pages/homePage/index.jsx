import React, {useEffect, useState} from 'react';
import {Col, Row, Form, Select, Input, Button, DatePicker, Typography} from "antd";
import {categories, sources} from "../../data";
import {SearchOutlined} from "@ant-design/icons";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes} from "../../Api";

function HomePage() {
    const [form]=Form.useForm();
    const [loading, setLoading] = useState(false);
    const [apiNewsData, setApiNewsData] = useState([]);
    const [theGuardianData, setTheGuardianData] = useState([]);
    const [nYTimesData, setNYTimesData] = useState([]);
    const [convertedData, setConvertedData] = useState([]);

    useEffect(() => {
        console.log({apiNewsData})
        console.log({theGuardianData})
        console.log({nYTimesData})

    }, [apiNewsData,theGuardianData,nYTimesData]);

    useEffect(() => {
        apiNewsConvertData()
    }, [apiNewsData]);

    useEffect(() => {
        theGuardianConvertData()
    }, [theGuardianData]);

    useEffect(() => {
        nYTimesCovertData()
    }, [nYTimesData]);

    function theGuardianConvertData(){
        const convertedData=theGuardianData?.map((newsItems)=>{
            return {
                author:null,
                description:null,
                source:"theguardian",
                url:newsItems?.webUrl,
                title:newsItems?.webTitle,
                category:newsItems?.sectionName,
                imgSrc:`${newsItems?.webUrl}#img-1`,
                publishDate:newsItems?.webPublicationDate
            }
        })

        setConvertedData(prevState => {
            return prevState.length>0 ? convertedData.length>0 ? [...prevState,...convertedData ] : [...prevState]:[]
        })
    }

    function nYTimesCovertData(){

    }
    function apiNewsConvertData(){
        const convertedData=apiNewsData?.map((newsItems)=>{
            return {
                author:newsItems?.author,
                description:newsItems?.description,
                source:newsItems?.source?.name,
                url:newsItems?.webUrl,
                title:newsItems?.webTitle,
                category:newsItems?.sectionName,
                imgSrc:`${newsItems?.webUrl}#img-1`,
                publishDate:newsItems?.webPublicationDate
            }
        })

        setConvertedData(prevState => {
            return prevState.length>0 ? convertedData.length>0 ? [...prevState,...convertedData ] : [...prevState]:[]
        })
    }



    const handleFormSubmit=(values)=>{
        console.log("values", values)
        getNews(values)
    }

    useEffect(() => {
        getNews()
    }, []);

    function makeQueriesForGuardian(filterValues){
        const {category,keyword,source, PublishedDate}=filterValues;
        // console.log({source})
        const finalQueryArray=[];
        let finalQuery='';
        finalQueryArray.push(category?`sectionName=${category}`:'')
        finalQueryArray.push(keyword?`webTitle=${keyword}`:'');
        finalQueryArray.push(PublishedDate?`PublishedDate=${PublishedDate?.toISOString()}`:'')

        const filteredfinalQArr=finalQueryArray.filter((query)=> query?.length>0)

        for (const filteredfinalQArrKey in filteredfinalQArr) {
            // console.log({filteredfinalQArrKey})
            finalQuery=finalQuery.concat(filteredfinalQArr[filteredfinalQArrKey],"&")
        }

        // console.log({finalQuery} )

        return finalQuery
    }

    function makeQueriesForApiNews(filterValues){
        const {category,keyword,source,PublishedDate}=filterValues
        const finalQueryArray=[];
        let finalQuery='';

        finalQueryArray.push(source?`sources=${source}`:'')
        finalQueryArray.push(PublishedDate?`from=${PublishedDate?.toISOString().split("T")[0]}`:'')
        //ApiNews does not support category filter so I consider category like a keyword
        const keywordQ=category ? keyword ? `q=${keyword},${category}` : `q=${category}`:''
        finalQueryArray.push(keywordQ)
    }

    function getFilterValues(){
        const category=form.getFieldValue("category") || undefined;
        const keyword=form.getFieldValue("keyword") || undefined;
        const source=form.getFieldValue("source") || undefined;
        const PublishedDate=form.getFieldValue("publishDate") || undefined;

        // console.log({PublishedDate})
        return {category,keyword,source,PublishedDate}
    }
    async function getNews(filters){
        setLoading(true)
        const filterValues=filters && getFilterValues()
        const queriesForGuardian=filterValues && filterValues.source==="theguardian" && makeQueriesForGuardian(filterValues)
        const queriesForNewsApi=filterValues && (filterValues.category==="Apple" || filterValues.category==="Tesla") && makeQueriesForApiNews(filterValues)

        // const queriesForGuardian=filters ? `` :"";
        // const queriesForNewsApi=filters ? `` : "";
        const queriesForNYTimes=filters? `` :"";

        // console.log({queriesForGuardian})
        try{
            const getNewsGuardianResponse=await getNewsFromGuardian()
            console.log({getNewsGuardianResponse},getNewsGuardianResponse?.response?.status )
            if(getNewsGuardianResponse?.response?.status==="ok"){
                setTheGuardianData(getNewsGuardianResponse?.response?.results)
                const getNewsApiResponse=await getNewsFromNewsApi();
                console.log({getNewsApiResponse},getNewsApiResponse?.status)
                if(getNewsApiResponse?.status==="ok"){
                    setApiNewsData(getNewsApiResponse?.articles)
                    const getNewsNYTimesResponse=await getNewsFromNYTimes()
                    if(getNewsNYTimesResponse.status==="OK"){
                    console.log({getNewsNYTimesResponse},getNewsNYTimesResponse.status)
                        setNYTimesData(getNewsNYTimesResponse?.response?.docs)
                    }
                }
            }
        }catch(error){
            console.log({error})
        }finally {
            setLoading(false)
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
                                   showSearch={true}

                               />
                           </Form.Item>
                       </Col>
                       <Col span={4}>
                           <Form.Item name={"category"} label={"Categories"} >
                               <Select
                                   options={categories}
                                   aria-multiline={true}
                                   showSearch={true}
                               />
                           </Form.Item>
                       </Col>
                       <Col span={7}>
                           <Form.Item name={"publishDate"} label={"Publish Date"} >
                               <DatePicker
                                   format="YYYY-MM-DD"
                                   showTime
                                   needConfirm={false}
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