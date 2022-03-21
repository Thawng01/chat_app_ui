import { useLocation, useParams } from "react-router-dom";

import "./chat.css";
import Message from "../components/chat/Message";
import MessageInput from "../components/chat/MessageInput";
import BackArrow from "../components/BackArrow";
import useDimension from "../hook/useDimension";

const Chat = () => {
    const { user } = useParams();
    const location = useLocation();
    const widthDimension = useDimension();
    let getPath = location.pathname.includes("chat");

    return (
        <div
            className="chat"
            style={{
                display: widthDimension <= 900 && getPath ? "block" : "",
                flex: widthDimension <= 900 && getPath ? 1 : "",
            }}
        >
            <BackArrow />
            <Message />
            <MessageInput />
        </div>
    );
};

export default Chat;
