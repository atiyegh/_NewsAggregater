import React, {useEffect, useState} from 'react';
import {Col, Row, Form, Select, Input, Button, DatePicker, Typography, Card} from "antd";
import {categories, sources} from "../../data";
import {LoadingOutlined, SearchOutlined} from "@ant-design/icons";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes} from "../../Api";
import {Link, useNavigate} from "react-router-dom";
const {Meta}=Card
function HomePage() {
    const [form]=Form.useForm();
    const [loading, setLoading] = useState(false);
    const [apiNewsData, setApiNewsData] = useState([]);
    const [theGuardianData, setTheGuardianData] = useState([]);
    const [nYTimesData, setNYTimesData] = useState([]);
    const [convertedData, setConvertedData] = useState([]);
    const [filteredData, setFilteredData] = useState(convertedData);
    const navigate = useNavigate();

    useEffect(() => {
        getNews()
    }, []);

    useEffect(() => {
        console.log({apiNewsData})
        console.log({theGuardianData})
        console.log({nYTimesData})

    }, [apiNewsData,theGuardianData,nYTimesData]);

    useEffect(() => {
        console.log({convertedData})
    }, [convertedData]);


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
        console.log('calling theGuardianConvertData')
        const theGuardianconvertedData=theGuardianData.length>0 ? theGuardianData?.map((newsItems)=>{
            return {
                author:null,
                description:null,
                source:"theguardian",
                url:newsItems?.webUrl,
                title:newsItems?.webTitle,
                category:newsItems?.sectionName,
                imgSrc:`${newsItems?.webUrl}#img-1`,
                publishDate:newsItems?.webPublicationDate?.split("T")[0]
            }
        }):[]
        console.log("convertedData the guardia",theGuardianconvertedData ,theGuardianconvertedData.length>0 )

        setConvertedData(prevState => {
            return [...prevState,...theGuardianconvertedData ]
        })
    }

    function nYTimesCovertData(){
        console.log('calling nYTimesCovertData')
        const nYTimesConvertedData=nYTimesData?.length>0 ? nYTimesData?.map((newsItems)=>{
            return {
                author:newsItems?.byline?.original,
                description:newsItems?.headline?.main,
                source:newsItems?.source,
                url:newsItems?.web_url,
                title:newsItems?.snippet,
                category:newsItems?.section_name,
                imgSrc:`https://www.nytimes.com/${(newsItems?.multimedia && newsItems?.multimedia?.length>0)? newsItems?.multimedia[0]?.url: ""}`,
                publishDate:newsItems?.pub_date?.split("T")[0]
            }
        }):[]
        console.log("convertedData NYTimes", convertedData)
        setConvertedData(prevState => {
            return [...prevState,...nYTimesConvertedData ]
        })
    }
    function apiNewsConvertData(){
        console.log("calling apiNewsConvertData")
        const apiNwsConvertedData=apiNewsData?.length>0 ? apiNewsData?.map((newsItems)=>{
            return {
                author:newsItems?.author,
                description:newsItems?.description,
                source:newsItems?.source?.name,
                url:newsItems?.url,
                title:newsItems?.title,
                category:null,
                imgSrc:newsItems?.urlToImage,
                publishDate:newsItems?.publishedAt?.split("T")[0]
            }
        }):[]

        console.log("convertedData apiNews", convertedData)
        setConvertedData(prevState => {
            return [...prevState,...apiNwsConvertedData ]
        })
    }

    function getFilterValues(){
        const category=form.getFieldValue("category") || undefined;
        const keyword=form.getFieldValue("keyword") || undefined;
        const source=form.getFieldValue("source") || undefined;
        const PublishedDate=form.getFieldValue("publishDate") || undefined;

        return {category,keyword,source,PublishedDate}
    }

    function filterDataBasedOnUserSearch(){
        const {category,keyword,source,PublishedDate}=getFilterValues();
        let filteredData=convertedData.length>0 ? [...convertedData] :[]
        if(category){


        }
        if(keyword){

        }
        if(source){

        }
        if(PublishedDate){

        }
    }
    function handleChangeFilters(_, values){
        console.log({values})
        if(values.keyword){
            const filteredData=convertedData.length>0 && [...convertedData]

        }
        if(values.source){

        }
        if(values.category){

        }
        if(values.publishDate){

        }
    }
    async function getNews(){
        console.log("calling getNews")

        setLoading(true)
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
        <Col span={24} style={{height:convertedData.length===0 ? "100vh" : "auto"}}>
            <Row>
               <Form
                form={form}
                // onFinish={handleFormSubmit}
                style={{width:'100%'}}
                onValuesChange={handleChangeFilters}
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
            <Row justify={"center"} wrap={true} gutter={[20,20]} style={{marginRight:'35px', marginLeft:"35px", marginTop:"30px", marginBottom:'50px'}}>
                {
                    convertedData?.length>0 ? convertedData?.map((newsItem)=>{
                        return <Col span={6}>
                            <Link to={`${newsItem?.url}`} target="_blank">
                                <Card
                                    hoverable
                                    // onClick={()=>navigate.navigate(`${newsItem?.url}`)}
                                    style={{ height: 100 }}
                                    // cover={<img alt={newsItem?.title.split(" ")[0]} src={newsItem?.imgSrc} />}
                                >
                                    <Meta title={newsItem?.title} description={newsItem?.publishDate}/>
                                    <Typography style={{color:"#8C8C8C"}}>{`Source: ${newsItem?.source ?? "NA"}`}</Typography>
                                </Card>
                            </Link>
                        </Col>
                    }): <div style={{fontSize:'36px'}}><LoadingOutlined /></div>
                }
            </Row>
        </Col>
    );
}

export default HomePage;