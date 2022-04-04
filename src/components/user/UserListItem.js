import { IoEllipsisVertical } from "react-icons/io5";
import { useEffect, useState, memo } from "react";

import "./userListItem.css";
import UserToolModal from "./UserToolModal";
import useNavigation from "../../hook/useNavigation";
import useDimension from "../../hook/useDimension";
import Image from "../Image";
import useToken from "../../hook/useToken";
import formatDate from "../formatDate";
import useUser from "../../hook/useUser";
import convApi from "../../api/conversation";
import useMyContext from "../../hook/useMyContext";
import useSideContext from "../../hook/useSideContext";

const UserListItem = ({ userList, index }) => {
    const [isSender, setIsSender] = useState(false);

    const { activeIndex, setActiveIndex } = useSideContext();
    const navigate = useNavigation();
    const widthDimension = useDimension();
    const { dark } = useMyContext();
    const me = useToken();
    const { getUser: getChatUserList, user } = useUser();

    let sender = me === userList.sender;
    let sentAt = new Date(userList?.sentAt).getTime();

    useEffect(() => {
        if (me === userList?.sender) {
            getChatUserList(userList.receiver);
            setIsSender(true);
        }
        if (me === userList?.receiver) {
            getChatUserList(userList.sender);
        }
    }, [userList, me, getChatUserList]);

    const handleNavigate = () => {
        navigate(`/chat/${user.username}`, {
            state: {
                userId: user._id,
                conversation_id: userList.conversation_id,
                avatar: user.avatar,
                blocks: user.blocks,
            },
        });
    };

    const handleRemove = async () => {
        setActiveIndex(null);
        await convApi.deleteConv(userList?.conversation_id);
        navigate("/", { replace: true });
    };

    let w = widthDimension < 900 && widthDimension > 500 ? 60 : 30;
    let isRead = userList?.read;

    return (
        <div className="user-list-item">
            <div className="user-list-item-container" onClick={handleNavigate}>
                <Image width={50} height={50} avatar={user?.avatar} />
                <div className="user-list-item-detail-container">
                    <div className="user-list-item-username-container">
                        <span
                            className="user-list-item-username"
                            style={{ color: dark ? "#fff" : "#000" }}
                        >
                            {user?.username}
                        </span>

                        <span
                            className="unread-message-badge-txt"
                            style={{
                                color: dark ? "#fff" : "#000",
                                display: isRead || sender ? "none" : "block",
                            }}
                        >
                            Unread
                        </span>

                        <div
                            style={{
                                display: isRead || sender ? "none" : "display",
                            }}
                            className="unread-message-badge"
                        />
                    </div>
                    <div
                        className="user-list-item-message-container"
                        style={{ color: dark ? "lightgray" : "gray" }}
                    >
                        {isSender && (
                            <span
                                className="user-list-sender"
                                style={{ color: dark ? "lightgray" : "gray" }}
                            >
                                You :{" "}
                            </span>
                        )}
                        <span className="user-list-item-message">
                            {userList.message.length > w
                                ? userList.message.slice(0, w) + "..."
                                : userList.message}
                        </span>
                        <span className="user-list-item-date">
                            . {formatDate(sentAt)}
                        </span>
                    </div>
                </div>
            </div>

            <IoEllipsisVertical
                className="user-list-dots-icon"
                style={{ color: dark ? "lightgray" : "gray" }}
                onClick={() =>
                    setActiveIndex(index === activeIndex ? null : index)
                }
            />
            {index === activeIndex && <UserToolModal onRemove={handleRemove} />}
        </div>
    );
};

export default memo(UserListItem);
