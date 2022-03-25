import React from "react";

import "./message.css";
import MessageItem from "./MessageItem";

const users = [
    { id: 0, name: "Salai Lian", message: "Hello" },
    {
        id: 1,
        name: "Salai Thawng",
        message: "Hello nan dam maw",
        current: true,
    },
    { id: 2, name: "Salai Biak", message: "Hello nan dam maw" },
    {
        id: 3,
        name: "Salai Lian",
        message:
            "Hello nan dam maw? Kan nih kan dam lio a si ko e jfd fj fjdfkjdkfjdkjfioeuri urieurioudifudf jd fjdkffdfdf  fdfdfggfgfg dfgfgf gfg gd",
    },
    {
        id: 4,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
        current: true,
    },
    {
        id: 5,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
        current: true,
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
    {
        id: 9,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
        current: true,
    },
    {
        id: 10,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },
    {
        id: 11,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
        current: true,
    },
    {
        id: 12,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
    },
    {
        id: 13,
        name: "Salai Lian",
        message: "Hello nan dam maw? Kan nih kan dam lio a si ko e",
        current: true,
    },
];

const Message = () => {
    return (
        <div className="message">
            {users.map((user) => {
                return <MessageItem key={user.id} message={user} />;
            })}
        </div>
    );
};

export default Message;
