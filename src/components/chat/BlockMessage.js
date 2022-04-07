import "./blockMessage.css";
import { toggleBlock } from "../../api/user";

const BlockMessage = ({ blockMe, blockUser, sender, receiver }) => {
    const handleUnblock = async () => await toggleBlock(receiver, sender);

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
};

export default BlockMessage;
