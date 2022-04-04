import { useState, useEffect } from "react";
import axios from "axios";

import messageApi from "../api/message";
import apiClient from "../api/apiClient";
import useToken from "./useToken";
import { socket } from "../service/socket";

const useMessage = (userId) => {
    const [messages, setMessages] = useState();
    const [socketMessage, setSocketMessage] = useState();
    const me = useToken();

    const source = axios.CancelToken.source();

    useEffect(() => {
        socket.on("getMessage", (data) => {
            const { message, sender, receiver } = data;
            setSocketMessage({
                message,
                sender,
                receiver,
                sentAt: Date.now(),
                _id:
                    Date.now() +
                    Math.round(Math.random() + Date.now()) +
                    Date.now(),
            });
        });

        return () => socket.off("getMessage");
    }, [setSocketMessage]);

    useEffect(() => {
        if (socketMessage) {
            setMessages((prev) => [...prev, socketMessage]);
        }
    }, [socketMessage, setMessages]);

    useEffect(() => {
        if (me !== undefined) {
            getMessages();
            updateReadStatus();
        }

        return () => source.cancel();
    }, [userId, me]);

    const getMessages = async () => {
        let message = await messageApi.getAllMessages(userId, me);
        setMessages(message.data);
    };

    const updateReadStatus = async () => {
        // userId is sender id
        await apiClient.put("message/" + me, { userId });
    };

    return messages;
};

export default useMessage;
