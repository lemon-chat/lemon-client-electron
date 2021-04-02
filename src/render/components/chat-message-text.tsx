

import React from "react";

import { Avatar } from 'antd';

import "./chat-message-text.less";

interface ChatMessageProps {
    avatar?: string,
    text?: string,
    side?: string
}

const DefaultChatMessageProps: ChatMessageProps = {
    avatar: 'https://i.loli.net/2021/04/01/S5MYlL2bQjc1Zha.jpg',
    text: '用户',
    side: 'left'
}

const ChatTextMessage: React.Component<ChatMessageProps> = (props: ChatMessageProps) => {
    if (props.side == 'left') {
        return (
            <div className="message-item">
                <div className="left-message-avatar">
                    <Avatar src={props.avatar} size={32} shape="square" />
                </div>
                <div className="left-message-bubble text-selectable">
                    <div className="left-tri">
                        <span></span>
                    </div>
                    <div className="left-message-text">
                        {props.text}
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="message-item">
                <div className="right-message-avatar">
                    <Avatar src={props.avatar} size={32} shape="square" />
                </div>
                <div className="right-message-bubble text-selectable">
                    <div className="right-tri">
                        <span></span>
                    </div>
                    <div className="right-message-text">
                        {props.text}
                    </div>
                </div>
            </div>
        );
    }
}




ChatTextMessage.defaultProps = DefaultChatMessageProps;

export default ChatTextMessage;