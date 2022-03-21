import React from "react";
import "./messageItem.css";
const MessageItem = ({ message }) => {
    return (
        <div
            className="message-item"
            style={{
                justifyContent: message.current ? "flex-end" : "flex-start",
            }}
        >
            {!message.current && <div className="message-item-img" />}
            <div className="message-item-content-container">
                <p
                    className="message-item-content"
                    style={{
                        color: message.current ? "#fff" : "#000",
                        backgroundColor: message.current
                            ? "#ff0080"
                            : "#f1f1f1",
                        borderTopLeftRadius: message.current ? 20 : 0,
                        borderTopRightRadius: message.current ? 0 : 20,
                    }}
                >
                    {message.message}
                </p>
                <span className="message-item-created">3 hours ago</span>
            </div>
        </div>
    );
};

export default MessageItem;
