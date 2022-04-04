import "./userList.css";
import useUserPanel from "../../hook/useUserPanel";
import UserListItem from "./UserListItem";

const UserList = () => {
    const users = useUserPanel();

    let content;

    if (users?.length === 0) {
        content = (
            <div className="no-chat-list">
                <span>Any user whom you chat will appear here.</span>
            </div>
        );
    } else {
        content = users?.map((user, index) => {
            return (
                <UserListItem
                    key={user.conversation_id}
                    userList={user}
                    index={index}
                />
            );
        });
    }

    return <div className="user-list">{content}</div>;
};

export default UserList;
