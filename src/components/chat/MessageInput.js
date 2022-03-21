import React from "react";

import { IoImage, IoSend } from "react-icons/io5";

import "./messageInput.css";

const MessageInput = () => {
    return (
        <div className="message-input-container">
            <IoImage className="message-img-icon" />
            <input className="message-input" />
            <IoSend className="message-send-icon" />
        </div>
    );
};

export default MessageInput;
