
import "./chat-input.less"

import React from "react";
import { FolderOpenOutlined, ScissorOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { TextArea } = Input;

import ChatButton from "./chat-button";

class ChatInput extends React.Component{
    render() {
        return (
            <div className="chat-inputarea special-cursor" style={{height: '100%'}}>
                <div className="chat-inputarea-tools">
                    <span className="chat-inputarea-icon-wrapper">
                        <FolderOpenOutlined className="chat-inputarea-icon" style={{fontSize: '20px'}}/>
                    </span>
                    <span className="chat-inputarea-icon-wrapper">
                        <ScissorOutlined className="chat-inputarea-icon" style={{fontSize: '20px'}}/>
                    </span>
                </div>
                <TextArea className="chat-inputarea-textarea" style={
                    {
                        height: 'calc(100% - 80px)',
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