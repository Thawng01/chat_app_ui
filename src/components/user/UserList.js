import "./userList.css";
import useUserPanel from "../../hook/useUserPanel";
import UserListItem from "./UserListItem";

const UserList = () => {
    const { loading, users, error } = useUserPanel();

    let content;

    if (loading) {
        content = <span>Loading...</span>;
    } else if (users?.length === 0) {
        content = (
            <div className="no-chat-list">
                <span>Any user whom you chat will appear here.</span>
            </div>
        );
    } else if (users?.length > 0) {
        content = users?.map((user, index) => {
            return (
                <UserListItem
                    key={user.conversation_id}
                    userList={user}
                    index={index}
                />
            );
        });
    } else {
        content = <span>{error}</span>;
    }

    return <div className="user-list">{content}</div>;
};

export default UserList;
