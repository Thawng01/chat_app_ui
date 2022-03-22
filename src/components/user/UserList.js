import React from "react";
import UserListItem from "./UserListItem";
import "./userList.css";
const users = [
    { id: 1, name: "Salai Lian", message: "Hello nan dam maw" },
    { id: 2, name: "Salai Thawng", message: "Hello nan dam maw" },
    { id: 3, name: "Salai Biak", message: "Hello nan dam maw" },
    {
        id: 4,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },
    {
        id: 5,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },
    {
        id: 6,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },

    {
        id: 7,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },

    {
        id: 8,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },
];

const UserList = () => {
    return (
        <div className="user-list">
            {users.map((user) => {
                return <UserListItem key={user.id} user={user} />;
            })}
        </div>
    );
};

export default UserList;
