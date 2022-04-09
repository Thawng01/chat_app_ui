import "./userList.css";
import useUserPanel from "../../hook/useUserPanel";
import UserListItem from "./UserListItem";
import NoList from "./NoList";
import Loading from "../Loading";
import Error from "../Error";

const UserList = () => {
    const { loading, users, error } = useUserPanel();

    let content;

    if (loading) {
        content = <Loading />;
    } else if (users?.length === 0 || users === null) {
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
        content = <Error error={error} />;
    }

    return <div className="user-list">{content}</div>;
};

export default UserList;
