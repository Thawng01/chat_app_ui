import { useRef, useState } from "react";
import { IoImage, IoArrowForwardCircle } from "react-icons/io5";

import "./messageInput.css";
import { createMessage, sendImage } from "../../api/message";
import useMe from "../../hook/useMe";
import useMyContext from "../../hook/useMyContext";
import FloatError from "../FloatError";
import BlockMessage from "./BlockMessage";

const MessageInput = ({ state }) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState(null);

    const { userId: receiver, blocks } = state;

    const fileRef = useRef();
    const btnRef = useRef();
    const { dark } = useMyContext();

    const { me } = useMe();
    const sender = me?._id;
    const blockMe = blocks?.includes(sender);
    const blockUser = me?.blocks?.includes(receiver);

    const handleImage = () => {
        fileRef.current.click();
    };

    const handleImageChange = async (e) => {
        const message = e.target.files[0];
        const input = { sender, receiver, message };
        try {
            await sendImage(input);
        } catch (error) {
            setError(error.response.data);
        }
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmitClick = () => {
        btnRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message) return;

        const input = { message, sender, receiver };

        try {
            await createMessage(input);
            setMessage("");
        } catch (error) {
            setError(error.response.data);
        }
    };

    const handleErrorDismiss = () => setError(null);

    if (blockUser || blockMe) {
        return (
            <BlockMessage
                blockMe={blockMe}
                blockUser={blockUser}
                sender={sender}
                receiver={receiver}
            />
        );
    }

    return (
        <>
            <FloatError error={error} onDismiss={handleErrorDismiss} />
            <form
                className="message-input-container"
                style={{ backgroundColor: dark ? "#333" : "#f1f1f1" }}
                onSubmit={(e) => handleSubmit(e)}
            >
                <IoImage className="message-img-icon" onClick={handleImage} />
                <input
                    ref={fileRef}
                    type="file"
                    name="image"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
                <input
                    type="text"
                    value={message}
                    onChange={handleMessageChange}
                    className="message-input"
                    style={{
                        backgroundColor: dark ? "#000" : "#fff",
                        color: dark ? "#fff" : "#000",
                    }}
                    placeholder="Type your text"
                />
                <button
                    ref={btnRef}
                    type="submit"
                    style={{ display: "none" }}
                />
                <div className="message-send-icon-container">
                    <IoArrowForwardCircle
                        className="message-send-icon"
                        onClick={handleSubmitClick}
                    />
                </div>
            </form>
        </>
    );
};

export default MessageInput;
