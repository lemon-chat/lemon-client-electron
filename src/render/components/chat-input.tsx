
import "./chat-input.less"

import React from "react";
import { Input } from 'antd';
const { TextArea } = Input;

import ChatButton from "./chat-button";

class ChatInput extends React.Component{
    render() {
        return (
            <div className="chat-inputarea" style={{height: '100%'}}>
                <div>
                <FileOutlined />
                </div>
                <TextArea className="chat-inputarea-textarea" style={
                    {
                        height: 'calc(100% - 40px)',
                        resize: 'none',
                        padding: '0px 20px 0px 20px'
                    }} bordered={false} rows={4} />
                <div className="chat-inputarea-control">
                    <ChatButton className="chat-inputarea-sendbutton">发送(S)</ChatButton>
                </div>
            </div>
        )
    }
}

export default ChatInput;