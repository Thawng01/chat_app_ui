import { useState } from "react";

import "./chat.css";
import Message from "../components/chat/Message";
import MessageInput from "../components/chat/MessageInput";
import BackArrow from "../components/BackArrow";
import ChatModal from "../components/modal/ChatModal";
import Users from "../components/user/Users";

const Chat = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleIsOpen = () => setIsOpen(!isOpen);
    const handleCloseModal = (e) => {
        if (isOpen) {
            setIsOpen(false);
        }
    };

    return (
        <div className="chat">
            <Users />
            <div className="chat-container">
                <BackArrow onIsOpen={handleIsOpen} />
                <ChatModal isOpen={isOpen} onCloseModal={handleCloseModal} />
                <Message />
                <MessageInput />
            </div>
        </div>
    );
};

export default Chat;
