import React, {useEffect, useState} from 'react';
import {CloseOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, MenuOutlined} from "@ant-design/icons";
import {Col, Divider, Row, Space} from "antd";
import {Link} from "react-router-dom";
import styles from "./mainheader.module.scss"

function MainHeader() {
    const  today=new Date();
    const [showMenu, setShowMenu] = useState(false);
    console.log({today})

    useEffect(() => {
        console.log({showMenu})
    }, [showMenu]);
    return (
        <Row  className={styles["main-header-container"]} gutter={[20]}>
            <Col xs={0} sm={24} md={15} lg={15} xl={15} >
                    <Space split={<Divider type={'vertical'}/>} >
                        <Link to={'/'} >MAGAZINES</Link>
                        <Link to={'/'} >ENTERTAINMENT</Link>
                        <Link to={'/'}>NEWS</Link>
                        <Link to={'/personalization'}>PERSONALIZATION</Link>
                    </Space>
            </Col>
            <Col xs={0} sm={0} md={7} lg={7} xl={7} className={styles["today-container"]}>
                {
                    today.toLocaleString()
                }
            </Col>
            <Col xs={0} sm={0} md={2} lg={2} xl={2}  className={styles["socialMedia-container"]}>
                <Row >
                    <Space>
                        <div className={styles["icon-container"]}> <FacebookOutlined /></div>
                        <div className={styles["icon-container"]}><LinkedinOutlined /></div>
                        <div className={styles["icon-container"]}><InstagramOutlined /></div>
                    </Space>
                </Row>
            </Col>
            <Col xs={24} sm={0} md={0} lg={0} xl={0} >
                {
                    !showMenu && <Row style={{marginTop:"25px"}} justify={"end"} >
                        <MenuOutlined onClick={()=>setShowMenu(prevState => !prevState)}/>
                    </Row>
                }
                <Row>
                    {
                        showMenu && <div className={styles["menu-container-show"]}>
                                        <div className={styles["menu-block-show"]} dir={"ltr"}>
                                            <div className={styles["close-icon"]} onClick={()=>setShowMenu(false)}><CloseOutlined /></div>
                                            <ul>
                                                <li onClick={()=>setShowMenu(false)}><Link to={'/'} >MAGAZINES</Link></li>
                                                <li onClick={()=>setShowMenu(false)}><Link to={'/'} >ENTERTAINMENT</Link></li>
                                                <li onClick={()=>setShowMenu(false)}><Link to={'/'} >NEWS</Link></li>
                                                <li onClick={()=>setShowMenu(false)} ><Link to={'/personalization'} >PERSONALIZATION</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                    }
                </Row>
            </Col>
        </Row>
    );
}

export default MainHeader;