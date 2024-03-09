import React from 'react';
import MainHeader from "./Header";
import MainFooter from "./Footer";
import {Layout} from "antd";
import styles from './layout-styles.module.scss'
import {Outlet} from "react-router-dom";
const { Header, Footer, Sider, Content } = Layout;
function MainLayout() {
    return (
        <Layout>
            <Header className={styles["header-container"]}>
                <MainHeader/>
            </Header>
            <Content>
                <Outlet/>
            </Content>
            <Footer className={styles["footer-container"]}>
                <MainFooter/>
            </Footer>
        </Layout>
    );
}

export default MainLayout;