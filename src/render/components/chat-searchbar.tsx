
import "./chat-searchbar.less";

import React from "react";
import { SearchOutlined } from '@ant-design/icons';

class ChatSearchbar extends React.Component {
    render() {
        return (
            <div className="chat-searchbar">
                <span className="chat-searchbar-icon-wrapper">
                    <SearchOutlined className="chat-searchbar-icon" style={{fontSize: '12px'}}/>
                </span>
                <span className="chat-searchbar-input-wrapper">
                    <input
                        className="chat-searchbar-input"
                        placeholder={this.props.placeholder}
                    />
                </span>
            </div>
        )
    }
}

export default ChatSearchbar;