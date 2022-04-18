import { useState, useEffect, useCallback } from "react";

import { getAllMessages, updateRead } from "../api/message";
import useToken from "./useToken";
import { source } from "../api/apiClient";
import socket from "../service/socket";

const useMessage = (receiver) => {
    const [messages, setMessages] = useState();
    const [socketMessage, setSocketMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sender = useToken();

    useEffect(() => {
        socket.on("getMessage", (data) => {
            const { message, sender, receiver } = data;
            setSocketMessage({
                message,
                sender: { _id: sender },
                receiver: { _id: receiver },
            });
        });

        return () => socket.off("getMessage");
    }, []);

    useEffect(() => {
        if (
            (socketMessage && sender === socketMessage?.sender._id) ||
            (receiver === socketMessage?.sender._id &&
                sender === socketMessage?.receiver._id)
        ) {
            setMessages((prev) => [...prev, socketMessage]);
        }
    }, [socketMessage, sender, receiver]);

    const getMessages = useCallback(async () => {
        try {
            setLoading(true);
            let { data } = await getAllMessages(receiver, sender);
            setMessages(data);
            setLoading(false);
        } catch (error) {
            setError(error.response.data);
            setLoading(false);
        }
    }, [receiver, sender]);

    const updateReadStatus = useCallback(async () => {
        try {
            await updateRead({ sender, receiver });
        } catch (error) {
            setError(error.response.data);
        }
    }, [sender, receiver]);

    useEffect(() => {
        if (sender !== undefined) {
            updateReadStatus();
            getMessages();
        }

        return () => source.cancel();
    }, [sender, getMessages, updateReadStatus]);

    return { messages, getMessages, loading, error };
};

export default useMessage;
