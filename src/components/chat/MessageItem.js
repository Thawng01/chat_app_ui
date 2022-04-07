import { memo } from "react";

import "./messageItem.css";
import Image from "../Image";
import useToken from "../../hook/useToken";
import formatDate from "../formatDate";
import useMyContext from "../../hook/useMyContext";

const MessageItem = ({ message }) => {
    const me = useToken(); // current logged-in user id
    const { dark } = useMyContext();

    const sentAt = new Date(message?.sentAt).getTime();

    let isSender = me === message.sender._id ? true : false;
    const isImage = message.message.includes("https://res.cloudinary.com")
        ? true
        : false;

    return (
        <div
            className="message-item"
            style={{
                justifyContent: isSender ? "flex-end" : "flex-start",
            }}
        >
            {!isSender && (
                <Image
                    avatar={
                        isSender
                            ? message?.receiver?.avatar
                            : message?.sender?.avatar
                    }
                />
            )}
            <div className="message-item-content-container">
                {!isImage ? (
                    <p
                        className={`message-item-content ${
                            isSender ? "sender" : ""
                        } `}
                        style={{
                            backgroundColor: dark ? "#333" : "#f1f1f1",
                            color: dark ? "#fff" : "",
                        }}
                    >
                        {message.message}
                    </p>
                ) : (
                    <img className="message-image" src={message.message} />
                )}

                <p
                    className="message-item-created"
                    style={{ color: dark ? "lightgray" : "gray" }}
                >
                    {formatDate(sentAt)}
                </p>
            </div>
        </div>
    );
};

export default memo(MessageItem);
