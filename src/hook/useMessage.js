import { useState, useEffect, useCallback } from "react";

import { getAllMessages } from "../api/message";
import apiClient from "../api/apiClient";
import useToken from "./useToken";
import { socket } from "../service/socket";
import { source } from "../api/apiClient";

const useMessage = (userId) => {
    const [messages, setMessages] = useState();
    const [socketMessage, setSocketMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const me = useToken();

    useEffect(() => {
        socket.on("getMessage", (data) => {
            const { message, sender, receiver, _id, sentAt } = data;
            setSocketMessage({
                message,
                sender: { _id: sender },
                receiver: { _id: receiver },
                sentAt,
                _id,
            });
        });

        return () => socket.off("getMessage");
    }, [setSocketMessage]);

    useEffect(() => {
        if (socketMessage) {
            setMessages((prev) => [...prev, socketMessage]);
        }
    }, [socketMessage, setMessages]);

    const getMessages = useCallback(async () => {
        try {
            setLoading(true);
            let { data } = await getAllMessages(userId, me);
            setMessages(data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }, [userId, me]);

    const updateReadStatus = useCallback(async () => {
        await apiClient.put("message/" + me, { userId }); // userId is sender id
    }, [me, userId]);

    useEffect(() => {
        if (me !== undefined) {
            updateReadStatus();
            getMessages();
        }

        return () => source.cancel();
    }, [me, getMessages, updateReadStatus]);

    return { messages, getMessages, loading, error };
};

export default useMessage;
