import { IoEllipsisVertical } from "react-icons/io5";
import { memo } from "react";

import "./userListItem.css";
import UserToolModal from "./UserToolModal";
import useNavigation from "../../hook/useNavigation";
import useDimension from "../../hook/useDimension";
import Image from "../Image";
import useToken from "../../hook/useToken";
import formatDate from "../formatDate";
import { deleteConv } from "../../api/conversation";
import useMyContext from "../../hook/useMyContext";
import useSideContext from "../../hook/useSideContext";
import { socket } from "../../service/socket";

const UserListItem = ({ userList, index }) => {
    const { activeIndex, setActiveIndex } = useSideContext();
    const navigate = useNavigation();
    const widthDimension = useDimension();
    const { dark } = useMyContext();
    const me = useToken();

    let sender = me === userList.sender ? true : false;
    let sentAt = new Date(userList?.sentAt).getTime();

    const handleNavigate = () => {
        navigate(`/chat/${userList.user.username}`, {
            state: {
                userId: userList.user._id,
                conversation_id: userList.conversation_id,
                avatar: userList.user.avatar,
                blocks: userList.user.blocks,
            },
        });
    };

    const handleRemove = async () => {
        setActiveIndex(null);
        await deleteConv(userList?.conversation_id);
        navigate("/", { replace: true });
    };

    let w = widthDimension < 900 && widthDimension > 500 ? 60 : 30;
    let isRead = userList?.read;

    return (
        <div className="user-list-item">
            <div className="user-list-item-container" onClick={handleNavigate}>
                <Image width={50} height={50} avatar={userList?.user?.avatar} />
                <div className="user-list-item-detail-container">
                    <div className="user-list-item-username-container">
                        <span
                            className="user-list-item-username"
                            style={{ color: dark ? "#fff" : "#000" }}
                        >
                            {userList?.user?.username}
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
                        {/* {isSender && (
                            <span
                                className="user-list-sender"
                                style={{ color: dark ? "lightgray" : "gray" }}
                            >
                                You :{" "}
                            </span>
                        )} */}
                        <span className="user-list-item-message">
                            {userList.message?.length > w
                                ? userList.message?.slice(0, w) + "..."
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
