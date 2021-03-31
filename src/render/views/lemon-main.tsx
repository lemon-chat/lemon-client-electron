
import "./lemon-main.less";

import React from "react";

import { Layout, List, Avatar } from 'antd';

import ChatMessage from "../components/chat-message";

const { Header, Footer, Sider, Content } = Layout;

class LemonMain extends React.Component{
    data = [
        {
            title: 'Ant Design Title 1',
        },
        {
            title: 'Ant Design Title 2',
        },
        {
            title: 'Ant Design Title 3',
        },
        {
            title: 'Ant Design Title 4',
        },
    ];
    render() {
        return (
            <Layout style={{ height: "100vh" }}>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.data}
                            renderItem={item => (
                                <List.Item>
                                    <ChatMessage></ChatMessage>
                                </List.Item>
                            )}
                        />
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        )
    }
}

export default LemonMain;