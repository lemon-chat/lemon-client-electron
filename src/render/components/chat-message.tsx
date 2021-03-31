

import React from "react";

import { Avatar } from 'antd';

import "./chat-message.less";

class ChatMessage extends React.Component{
    render() {
        return (
            <div>
                <div class="message-avatar">
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </div>
                <div class="left-tri">
                    <span></span>
                </div>
                <div class="message-item">
                    你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
                </div>
            </div>
        )
    }
}

export default ChatMessage;