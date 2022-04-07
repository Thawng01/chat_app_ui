import { useRef, useState } from "react";
import { IoImage, IoArrowForwardCircle } from "react-icons/io5";

import "./messageInput.css";
import { createMessage, sendImage } from "../../api/message";
import { toggleBlock } from "../../api/user";
import useMe from "../../hook/useMe";
import useMyContext from "../../hook/useMyContext";

const MessageInput = ({ state }) => {
    const [message, setMessage] = useState("");

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
        await sendImage(input);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmitClick = () => {
        btnRef.current.click();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const input = { message, sender, receiver };
        await createMessage(input);
        setMessage("");
    };

    const handleUnblock = async () => await toggleBlock(receiver, sender);

    if (blockUser || blockMe) {
        return (
            <div className="blocked-message-container">
                <span className="blocked-message">
                    {blockMe &&
                        "Sorry! You can't send any message because this user blocked you."}
                    {blockUser && "You have blocked this user."}
                </span>
                {blockUser && (
                    <span className="blocked-btn" onClick={handleUnblock}>
                        Unblock
                    </span>
                )}
            </div>
        );
    }

    return (
        <form
            className="message-input-container"
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
            <button ref={btnRef} type="submit" style={{ display: "none" }} />
            <div className="message-send-icon-container">
                <IoArrowForwardCircle
                    className="message-send-icon"
                    onClick={handleSubmitClick}
                />
            </div>
        </form>
    );
};

export default MessageInput;
