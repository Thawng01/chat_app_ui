import { useEffect, useRef } from "react";
import useMessage from "../../hook/useMessage";
import useMyContext from "../../hook/useMyContext";

import "./message.css";
import MessageItem from "./MessageItem";

const Message = ({ userId }) => {
    const divRef = useRef();
    const messages = useMessage(userId);

    const { dark } = useMyContext();

    useEffect(() => {
        divRef.current.scrollTo({
            top: divRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <div
            className="message"
            style={{ backgroundColor: dark ? "#000" : "#fff" }}
            ref={divRef}
        >
            {messages?.map((message) => {
                return <MessageItem key={message._id} message={message} />;
            })}
        </div>
    );
};

export default Message;
