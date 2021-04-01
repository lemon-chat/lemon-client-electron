
import "./lemon-main.less";

import React from "react";

import { Layout, List, Avatar, Input } from 'antd';

import ChatArea from "../components/chat-area";
import ChatInput from "../components/chat-input";

const { Header, Footer, Sider, Content } = Layout;

const { TextArea } = Input;

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
                    我是菜单栏
                </Sider>
                <Sider width="250px" style={{background: "#e6e5e5"}} className="chat-sider">
                    我是好友列表
                </Sider>
                <Layout className="chat-right-panel">
                    <Header class="chat-header">
                        <div className="chat-header-text">
                            柠檬咕咕幼儿园
                        </div>
                    </Header>
                    <Content class="chat-content-panel" style={{ height: 'calc(100vh - 60px - ' + this.state.input_height + 'px' + ')' }}>
                        <ChatArea></ChatArea>
                    </Content>
                    <Footer class="chat-input-panel" style={{ height: this.state.input_height + 'px' }}>
                        <ChatInput />
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LemonMain;