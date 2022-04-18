import "./searchResultItem.css";
import useNavigation from "../../hook/useNavigation";
import Image from "../Image";
import socket from "../../service/socket";

const SearchResultItem = ({ items }) => {
    const navigate = useNavigation();

    const handleNavigation = (item) => {
        socket.emit("createRoom", { userId: item._id });
        navigate(`/chat/${item.username}`, {
            state: {
                userId: item._id,
                username: item.username,
                avatar: item.avatar,
                blocks: item.blocks,
            },
        });
    };

    let content;
    if (items?.length === 0) {
        content = <span>No result</span>;
    } else {
        content = items?.map((item) => {
            return (
                <div
                    key={item._id}
                    className="search-result-item"
                    onClick={() => handleNavigation(item)}
                >
                    <Image width={55} height={55} />
                    <span className="search-result-item-username">
                        {item.username}
                    </span>
                </div>
            );
        });
    }

    return <div className="search-result-item-container">{content}</div>;
};

export default SearchResultItem;
