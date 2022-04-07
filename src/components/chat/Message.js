import { useEffect, useRef } from "react";
import useMessage from "../../hook/useMessage";
import useMyContext from "../../hook/useMyContext";

import "./message.css";
import MessageItem from "./MessageItem";
import useSocket from "../../hook/useSocket";
import Loading from "../Loading";
import NoMessage from "./NoMessage";
import Error from "./Error";

const Message = ({ userId }) => {
    const divRef = useRef();
    const { messages, loading, error } = useMessage(userId);

    const { dark } = useMyContext();
    useSocket(userId);

    useEffect(() => {
        divRef.current.scrollTo({
            top: divRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages, loading]);

    let content;
    if (loading) {
        content = <Loading />;
    } else if (messages?.length === 0) {
        content = <NoMessage />;
    } else if (messages?.length > 0) {
        content = messages?.map((message) => {
            return <MessageItem key={message._id} message={message} />;
        });
    } else {
        content = <Error error={error} />;
    }

    return (
        <div
            className="message"
            ref={divRef}
            style={{ backgroundColor: dark ? "#000" : "#fff" }}
        >
            {content}
        </div>
    );
};

export default Message;
