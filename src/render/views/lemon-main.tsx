
import "./lemon-main.less";

import React from "react";

import { Layout, List, Avatar, Input } from 'antd';

import ChatMenubar from "../components/chat-menubar";
import LemonChat from "./lemon-chat";
import LemonLogin from "./lemon-login";

const { Header, Footer, Sider, Content } = Layout;

class LemonMain extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            input_height: 120,
            view: "login"
        };
        this.toMain = this.toMain.bind(this);
    }
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider width="60px" style={{background: "#28292b"}} className="chat-menu">
                    <ChatMenubar avatar="https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg"></ChatMenubar>
                </Sider>
                { this.changeView() }
            </Layout>
        )
    }

    changeView() {
        if (this.state.view == 'login') {
            return ( <LemonLogin onLoginSuccess={this.toMain}/> )
        } else {
            return ( <LemonChat input_height={this.state.input_height}/> )
        }
    }

    toMain() {
        this.setState({
            input_height: this.state.input_height,
            view: 'main'
        });
    }
}

export default LemonMain;