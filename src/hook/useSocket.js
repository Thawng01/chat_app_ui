import { useEffect } from "react";
import { socket } from "../service/socket";

const useSocket = (receiver) => {
    useEffect(() => {
        socket.emit("addUser", receiver);
    }, [receiver]);
};

export default useSocket;
