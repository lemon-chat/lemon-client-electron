
import React from "react";


import ChatMessageText from "./chat-message-text";
import ChatMessageTime from "./chat-message-time";
import ChatMessageDivider from "./chat-message-divider";
class ChatMessage extends React.Component{
    render() {
        if (this.props.type == 'text') {
            return (
                <ChatMessageText avatar={this.props.avatar} text={this.props.text} side={this.props.side}></ChatMessageText>
            )
        } else if (this.props.type == 'text') {
            return (
                <ChatMessageTime text={this.props.text}></ChatMessageTime>
            )
        } else if (this.props.type == 'divider') {
            return (
                <ChatMessageDivider text={this.props.text}></ChatMessageDivider>
            )
        } else {
            return (
                <ChatMessageTime text={this.props.text}></ChatMessageTime>
            )
        }
    }
}

export default ChatMessage;