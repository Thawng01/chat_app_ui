import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "./chat.css";
import Message from "../components/chat/Message";
import MessageInput from "../components/chat/MessageInput";
import ChatHeader from "../components/chat/ChatHeader";
import ChatModal from "../components/modal/ChatModal";
import Users from "../components/user/Users";

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const { state } = useLocation();
    const { name } = useParams();

    const handleIsOpen = () => setIsOpen(!isOpen);
    const handleCloseModal = () => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className="chat">
            <Users />
            <div className="chat-container">
                <ChatModal
                    isOpen={isOpen}
                    userId={state.userId}
                    onCloseModal={handleCloseModal}
                />
                <ChatHeader
                    username={name}
                    avatar={state.avatar}
                    onIsOpen={handleIsOpen}
                />
                <Message userId={state.userId} />
                <MessageInput state={state} />
            </div>
        </div>
    );
};

export default Chat;
