import "./userList.css";
import useUserPanel from "../../hook/useUserPanel";
import UserListItem from "./UserListItem";
import NoList from "./NoList";

const UserList = () => {
    const { loading, users, error } = useUserPanel();

    let content;

    if (loading) {
        content = <span>Loading...</span>;
    } else if (users?.length === 0) {
        content = <NoList />;
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
