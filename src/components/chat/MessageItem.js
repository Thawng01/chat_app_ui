import { memo } from "react";

import "./messageItem.css";
import useNaviagtion from "../../hook/useNavigation";
import Image from "../Image";
import useToken from "../../hook/useToken";
import formatDate from "../formatDate";
import useMyContext from "../../hook/useMyContext";

const MessageItem = ({ message }) => {
    const navigate = useNaviagtion();
    const me = useToken(); // current logged-in user id
    const { dark } = useMyContext();

    const handleNavigation = () => navigate("/profile");
    const sentAt = new Date(message?.sentAt).getTime();

    let isSender = me === message.sender;

    return (
        <div
            className="message-item"
            style={{
                justifyContent: isSender ? "flex-end" : "flex-start",
            }}
        >
            {!isSender && <Image onClick={handleNavigation} />}
            <div className="message-item-content-container">
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
