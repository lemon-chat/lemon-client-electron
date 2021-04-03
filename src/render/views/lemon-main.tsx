
import "./lemon-main.less";

import React from "react";

import { Layout, List, Avatar, Input } from 'antd';
import { BrowserRouter, Route } from 'react-router-dom';

import ChatMenubar from "../components/chat-menubar";
import LemonChat from "./lemon-chat";
import LemonLogin from "./lemon-login";

const { Header, Footer, Sider, Content } = Layout;

class LemonMain extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            input_height: 120
        };
    }
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider width="60px" style={{background: "#28292b"}} className="chat-menu">
                    <ChatMenubar avatar="https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg"></ChatMenubar>
                </Sider>
                <BrowserRouter>
                    <Route path="/" component={LemonLogin}/>
                    <Route path="/main" component={LemonChat}/>
                    <Route path="/login" component={LemonLogin}/>
                </BrowserRouter>
            </Layout>
        )
    }
}

export default LemonMain;