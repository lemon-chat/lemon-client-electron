
import "./contact-list.less";

import React from "react";
import { Layout, List, Avatar, Input, Button } from 'antd';

import { PlusOutlined } from '@ant-design/icons';
const { Search } = Input;

import ChatSearchbar from "./chat-searchbar";

class ContactList extends React.Component {
    data = [
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            name: '柠檬咕咕幼儿园',
            message: '夏幻：好呀好呀好呀好呀好呀好呀好呀好呀好呀好呀',
            time: '11:34'
        },
        {
            avatar: 'https://i.loli.net/2020/02/19/s2GmUF7SwqzC9ER.png',
            name: '寻常冷却咖啡馆',
            message: '愤怒的泡面：有的',
            time: '11:14'
        }
    ];
    render() {
        return (
            <div className="contact-list-container">
                <div className="searchbar special-cursor">
                    <ChatSearchbar placeholder="搜索" style={{ width: "100%", borderRadius: '25px' }} />
                    <Button type="primary" icon={<PlusOutlined />} size="small" className="add-button"/>
                </div>
                <List
                    className="contact-list"
                    split={false}
                    bordered={false}
                    itemLayout="horizontal"
                    dataSource={this.data}
                    renderItem={item => (
                        <List.Item style={{ padding: '0px' }}>
                            <div className="contact-list-item">
                                <Avatar className="left-avatar" src={item.avatar} size={40} shape="square" />
                                <div className="left-name">
                                    {item.name}
                                </div>
                                <div className="right-time">
                                    {item.time}
                                </div>
                                <div className="left-message">
                                    {item.message}
                                </div>
                            </div>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ContactList;