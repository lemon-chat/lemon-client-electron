
import "./chat-button.less"
import React from "react";

interface ChatButtonProps {
    children?: React.ReactNode;
    height: string;
    onClick: () => void;
    width: string;
    className: string;
}

const DefaultChatButtonProps: ChatButtonProps = {
    height: "30px",
    width: "65px",
    className: ""
}

class ChatButton extends React.Component<ChatButtonProps> {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                className={"chat-button special-cursor " + this.props.className}
                style={{
                    height: this.props.height,
                    width: this.props.width
                }}
            >
                {this.props.children}
            </button>
        )
    }
}

ChatButton.defaultProps = DefaultChatButtonProps;

export default ChatButton;