
import "./chat-menubar.less";

import React from "react";

import { Avatar } from 'antd';

import { MessageOutlined, MenuOutlined } from '@ant-design/icons';

class ChatMenubar extends React.Component{
    render() {
        return (
            <div className="chat-menubar-container special-cursor">
                <div className="chat-menubar-item">
                    <Avatar src={this.props.avatar} size={32} shape="square" />
                </div>

                <div className="chat-menubar-item">
                    <MessageOutlined style={{fontSize: '22px'}} />
                </div>

                <div className="chat-menubar-item-bottom">
                    <MenuOutlined style={{fontSize: '22px'}} />
                </div>
            </div>
        )
    }
}

export default ChatMenubar;