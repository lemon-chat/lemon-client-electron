
import "./chat-area.less";

import React from "react";
import { Layout, List, Avatar, Input } from 'antd';
import ChatMessage from "./chat-message";

class ChatArea extends React.Component {
    data = [
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '你好，我是夏幻',
            side: 'left'
        },
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '你好，我也是夏幻',
            side: 'right'
        },
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '真巧啊',
            side: 'left'
        },
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '是啊真巧啊',
            side: 'right'
        },
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '来一起写LemonChat吧【',
            side: 'left'
        },
        {
            avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
            text: '好呀好呀',
            side: 'right'
        }
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
                        <List.Item>
                            <ChatMessage avatar={item.avatar} text={item.text} side={item.side}></ChatMessage>
                        </List.Item>
                    )}
                />
            </div>
        )
    }
}

export default ChatArea;