
import "./chat-message-divider.less"

import React from "react";

import { Divider } from 'antd';

class ChatMessageDivider extends React.Component{
    render() {
        return (
            <div className="message-divider-item">
                <Divider>{this.props.text}</Divider>
            </div>
        )
    }
}

export default ChatMessageDivider;