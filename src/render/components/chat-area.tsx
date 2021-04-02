
import "./chat-area.less";

import React from "react";
import { Layout, List, Avatar, Input } from 'antd';
import ChatMessage from "./chat-message";

class ChatArea extends React.Component {
    data = [
        {
            type: 'time',
            text: '11:30',
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '你好，我是夏幻',
            side: 'left'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '你好，我也是夏幻',
            side: 'right'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '真巧啊',
            side: 'left'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '是啊真巧啊',
            side: 'right'
        },
        {
            type: 'time',
            text: '23:10'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '来一起写LemonChat吧【',
            side: 'left'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '好呀好呀',
            side: 'right'
        },
        {
            type: 'divider',
            text: '以下是新消息'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '做，都可以做',
            side: 'left'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '反正你们讨论好协议我再来【x',
            side: 'left'
        },
        {
            type: 'text',
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '我觉得还是要正式点，从基础类型的表示开始',
            side: 'right'
        },
    ];
    render() {
        return (
            <div className="scrollable-container special-cursor">
                <List
                    className="chat-list"
                    split={false}
                    itemLayout="horizontal"
                    dataSource={this.data}
                    renderItem={item => (
                        <List.Item style={{padding: '0px'}}>
                            <ChatMessage type={item.type} avatar={item.avatar} text={item.text} side={item.side}></ChatMessage>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ChatArea;