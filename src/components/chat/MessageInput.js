import React, { useRef, useState } from "react";
import { IoImage, IoSend } from "react-icons/io5";

import "./messageInput.css";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const fileRef = useRef();
    const btnRef = useRef();

    const handleImage = () => {
        fileRef.current.click();
    };

    const handleImageChange = (e) => {
        console.log(e.target.files[0].name);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmitClick = () => {
        btnRef.current.click();
    };

    const handleSubmit = () => {
        alert("submitted!");
    };

    return (
        <form className="message-input-container" onSubmit={handleSubmit}>
            <IoImage className="message-img-icon" onClick={handleImage} />
            <input
                ref={fileRef}
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
            />
            <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                className="message-input"
            />
            <button ref={btnRef} type="submit" style={{ display: "none" }} />
            <IoSend className="message-send-icon" onClick={handleSubmitClick} />
        </form>
    );
};

export default MessageInput;
