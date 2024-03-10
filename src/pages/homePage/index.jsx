import React, {useEffect, useState} from 'react';
import {Col, Row, Form, Select, Input, Button, DatePicker, Typography, Card} from "antd";
import {categories, convertedDta, sources} from "../../data";
import {CloseCircleOutlined, LoadingOutlined, SearchOutlined} from "@ant-design/icons";
import {getNewsFromGuardian, getNewsFromNewsApi, getNewsFromNYTimes, getSourcesForApiNews} from "../../Api";
import {Link, useNavigate} from "react-router-dom";
import {arraysIntersection} from "../../utils";
const {Meta}=Card
const { RangePicker } = DatePicker;
function HomePage() {
    const [form]=Form.useForm();
    const [convertedData, setConvertedData] = useState(convertedDta);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        // getNews()
        getSources()
    }, []);


        // console.log('mmmsourceOptions',JSON.parse(localStorage.getItem("sourceOptions")))
    useEffect(() => {
        console.log({convertedData})
    }, [convertedData]);

    async function getSources(){
        try{
            const apiNewsSourcesResponse=await getSourcesForApiNews();
            console.log({
                apiNewsSourcesResponse
            })
            if(apiNewsSourcesResponse?.status==="ok"){
                const sourceOptions=apiNewsSourcesResponse?.sources?.map((src)=>{
                    return {
                        label:src?.name,
                        value:src?.name,
                    }
                })
                sourceOptions.push({
                    label:'theguardian',
                    value:'theguardian'
                })
                sourceOptions.push({
                    label:'The New York Times',
                    value:'The New York Times'
                })
                localStorage.setItem("sourceOptions", JSON.stringify(sourceOptions))
                console.log('mmmsourceOptions',JSON.parse(localStorage.getItem("sourceOptions")))
            }
        }catch (error){
            console.log({error})
        }
    }
    function theGuardianConvertData(theGuardianData){
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

        setConvertedData([...theGuardianconvertedData])
    }

    function nYTimesCovertData(nYTimesData){
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
        setConvertedData(prevState => {
            return [...prevState,...nYTimesConvertedData ]
        })
    }

    function apiNewsConvertData(apiNewsData){
        console.log("calling apiNewsConvertData")
        const apiNwsConvertedData=apiNewsData?.length>0 ? apiNewsData?.map((newsItems)=>{
            return {
                author:newsItems?.author,
                description:newsItems?.description,
                source:newsItems?.source?.name,
                url:newsItems?.url,
                title:newsItems?.title,
                category:"Tesla",
                imgSrc:newsItems?.urlToImage,
                publishDate:newsItems?.publishedAt?.split("T")[0]
            }
        }):[]

        console.log("convertedData apiNews", convertedData)
        setConvertedData(prevState => {
            return [...prevState,...apiNwsConvertedData ]
        })
    }

    function handleChangeFilters(_,values){
        console.log({values})
        let filterArray=[];

        if(values?.category){
            values?.category?.length>0 && filterArray.push(convertedData?.filter((newsItem)=>{
                return values?.category?.includes(newsItem.category)
            }))
        }
        if(values?.keyword){
            filterArray.push(convertedData?.filter((newsItem)=>{
                return newsItem?.title?.toLowerCase()?.includes(values?.keyword?.toLowerCase()) || newsItem?.description?.toLowerCase()?.includes(values?.keyword?.toLowerCase())
            }))
        }
        if(values?.source){
            console.log("source",values?.source)
            values?.source?.length>0 &&  filterArray.push(convertedData?.filter((newsItem)=>{
                return values?.source?.includes(newsItem.source)}))
        }
        if(Array.isArray(values?.publishDate)){
            const fromPublishedDate=(values?.publishDate?.length>0 && values?.publishDate[0]?.toISOString().split("T")[0]) || undefined;
            const toPublishedDate=(values?.publishDate?.length>0 && values?.publishDate[1]?.toISOString().split("T")[0]) || undefined;
            console.log({fromPublishedDate})
            console.log({toPublishedDate})
            filterArray.push(convertedData.filter((newsItem)=>{
                console.log("publishDate",newsItem,newsItem.publishDate>= fromPublishedDate && newsItem.publishDate<toPublishedDate)
                return newsItem.publishDate>= fromPublishedDate && newsItem.publishDate<=toPublishedDate
            }))
        }
        console.log({filterArray})
        const filteredDataByUser=filterArray?.length>0 && arraysIntersection(...filterArray)
        console.log({filteredDataByUser})
        setFilteredData(filteredDataByUser ? filteredDataByUser :null )
    }


    async function getNews(){
        console.log("calling getNews")

        try{
            const getNewsGuardianResponse=await getNewsFromGuardian()
            console.log({getNewsGuardianResponse},getNewsGuardianResponse?.response?.status )
            if(getNewsGuardianResponse?.response?.status==="ok"){
                theGuardianConvertData(getNewsGuardianResponse?.response?.results)
                const getNewsApiResponse=await getNewsFromNewsApi();
                console.log({getNewsApiResponse},getNewsApiResponse?.status)
                if(getNewsApiResponse?.status==="ok"){
                    apiNewsConvertData(getNewsApiResponse?.articles)
                    const getNewsNYTimesResponse=await getNewsFromNYTimes()
                    if(getNewsNYTimesResponse.status==="OK"){
                    console.log({getNewsNYTimesResponse},getNewsNYTimesResponse.status)
                        nYTimesCovertData(getNewsNYTimesResponse?.response?.docs)
                    }
                }
            }
        }catch(error){
            console.log({error})
        }
    }

    return (
        <Col span={24} style={{height:convertedData.length===0 ? "100vh" : "auto"}}>
            <Row>
               <Form
                form={form}
                style={{width:'100%'}}
                onValuesChange={handleChangeFilters}
               >
                   <Row justify={"center"} style={{marginTop:'35px'}}>
                       <Col xs={20} sm={18} md={16} lg={14} xl={10}>
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
                       <Col xs={20} sm={10} md={6} lg={5} xl={4}>
                           <Form.Item name={"source"} label={"Sources"} >
                               <Select
                                   options={localStorage.getItem("sourceOptions") ? JSON.parse(localStorage.getItem("sourceOptions")) : []}
                                   showSearch={true}
                                   allowClear={true}
                                   mode={"multiple"}
                               />
                           </Form.Item>
                       </Col>
                       <Col xs={20} sm={10} md={6} lg={5} xl={4}>
                           <Form.Item name={"category"} label={"Categories"} >
                               <Select
                                   options={categories}
                                   showSearch={true}
                                   allowClear={true}
                                   mode={"multiple"}
                               />
                           </Form.Item>
                       </Col>
                       <Col xs={20} sm={10} md={10} lg={8} xl={7}>
                           <Form.Item name={"publishDate"} label={"Publish Date"} >
                               <RangePicker
                                   format="YYYY-MM-DD"
                                   needConfirm={false}
                               />
                           </Form.Item>
                       </Col>
                   </Row>
               </Form>
            </Row>
            <Row justify={"center"} wrap={true} gutter={[20,20]} style={{marginRight:'35px', marginLeft:"35px", marginTop:"30px", marginBottom:'50px'}}>
                {
                    convertedData?.length>0 ? (filteredData ?? convertedData)?.map((newsItem)=>{
                        return <Col xs={24} sm={12} md={8} lg={8} xl={6} key={newsItem?.url}>
                            <Link to={`${newsItem?.url}`} target="_blank">
                                <Card
                                    hoverable
                                    style={{ height: 100 }}
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