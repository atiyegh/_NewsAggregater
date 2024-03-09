import React from 'react';
import {Col, Divider, Row, Space} from "antd";
import {FacebookOutlined, InstagramOutlined, LinkedinOutlined} from "@ant-design/icons";
import styles from './mainFooter.module.scss';

function MainFooter() {
    return (
        <Row>
            <Col xs={0} sm={0} md={21} lg={21} xl={21}>
                <Space split={<Divider type={'horizontal'}/>}>
                    <ul>
                        <li style={{fontWeight:'bold'}}>Phone: <span >+98 (910)2275976</span></li>
                        <li style={{fontWeight:'bold'}}>Address: <span>No. 7, Peyvandi Street, Shariati Avenue, Tehran, Iran</span></li>
                    </ul>
                </Space>
            </Col>
            <Col xs={24} sm={24} md={3} lg={3} xl={3} className={styles["contact-info-container"]}>
                <Space>
                    <div className={styles["icon-container"]} ><FacebookOutlined /></div>
                    <div className={styles["icon-container"]}><LinkedinOutlined /></div>
                    <div className={styles["icon-container"]}><InstagramOutlined /></div>
                </Space>
            </Col>
        </Row>
    );
}

export default MainFooter;