import React from 'react';
import {Col, Row,  Typography} from "antd";
import { LoadingOutlined} from "@ant-design/icons";
import CustomForm from "../../components/UI/CustomForm";
import styles from './homePageStyle.module.scss'
import CustomCard from "../../components/UI/CustomForm/CustomCard";
import useLogicHomePage from "./useLogicHomePage";
function HomePage() {

    // It is a custom hook to handle the logic of HomePage
    const {
        filteredData,
        convertedData,
        formPropsHomePage,
    }=useLogicHomePage()

    return (
        <Col span={24} style={{height:convertedData.length===0 ? "100vh" : "auto"}}>
            <Row gutter={[20,20]}>
                <CustomForm{...formPropsHomePage}/>
            </Row>
            <Row justify={"center"} wrap={true} gutter={[20,20]} className={styles["list-container"]}>
                {
                    convertedData?.length>0 ? (filteredData ?? convertedData)?.map((newsItem)=>{
                        return <Col xs={24} sm={12} md={8} lg={8} xl={6} key={newsItem?.url}>
                            <CustomCard
                                type={"meta"}
                                linkProps={{
                                        to: `${newsItem?.url}`,
                                        target: "_blank"
                                }}
                                cardProps={{
                                    hoverable:true,
                                    style:{height: 100}
                                }}
                                metaProps={{
                                    title:newsItem?.title,
                                    description:newsItem?.publishDate
                                }}
                                cardContent={<Typography style={{color:"#8C8C8C"}}>{`Source: ${newsItem?.source ?? "NA"}`}</Typography>}
                            />
                        </Col>
                    }): <div style={{fontSize:'36px'}}><LoadingOutlined /></div>
                }
            </Row>
        </Col>
    );
}

export default HomePage;