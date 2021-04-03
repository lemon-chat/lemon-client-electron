
import "./lemon-chat.less"

import React from "react";

import { Layout, List, Avatar, Input } from 'antd';

import { EllipsisOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

import ChatArea from "../components/chat-area";
import ChatInput from "../components/chat-input";
import ContactList from "../components/contact-list";


class LemonChat extends React.Component {
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <Layout style={{ height: "100vh", width: "100%"}}>
                <Sider width="250px" style={{background: "#e6e5e5"}} className="chat-sider">
                    <ContactList></ContactList>
                </Sider>
                <Layout className="chat-right-panel">
                    <Header class="chat-header">
                        <div className="chat-header-text special-cursor">
                            柠檬咕咕幼儿园
                            <span className="chat-header-icon-wrapper">
                                <EllipsisOutlined className="chat-inputarea-icon" style={{fontSize: '28px'}}/>
                            </span>
                        </div>
                    </Header>
                    <Content class="chat-content-panel" style={{ height: 'calc(100vh - 60px - ' + this.props.input_height + 'px' + ')' }}>
                        <ChatArea></ChatArea>
                    </Content>
                    <Footer class="chat-input-panel" style={{ height: this.props.input_height + 'px' }}>
                        <ChatInput />
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LemonChat;