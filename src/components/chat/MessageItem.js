import "./messageItem.css";
import useNaviagtion from "../../hook/useNavigation";
import Image from "../Image";

const MessageItem = ({ message }) => {
    const navigate = useNaviagtion();
    const handleNavigation = () => navigate("/profile");

    return (
        <div
            className="message-item"
            style={{
                justifyContent: message.current ? "flex-end" : "flex-start",
            }}
        >
            {!message.current && <Image onClick={handleNavigation} />}
            <div className="message-item-content-container">
                <p
                    className="message-item-content"
                    style={{
                        color: message.current ? "#fff" : "#000",
                        backgroundColor: message.current
                            ? "#ff0080"
                            : "#f1f1f1",
                        borderTopLeftRadius: message.current ? 20 : 0,
                        borderTopRightRadius: message.current ? 0 : 20,
                    }}
                >
                    {message.message}
                </p>
                <span className="message-item-created">3 hours ago</span>
            </div>
        </div>
    );
};

export default MessageItem;
