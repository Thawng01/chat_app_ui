import { useState, useEffect, useCallback } from "react";

import { getAllMessages, updateRead } from "../api/message";
import useToken from "./useToken";
import { socket } from "../service/socket";
import { source } from "../api/apiClient";

const useMessage = (receiver) => {
    const [messages, setMessages] = useState();
    const [socketMessage, setSocketMessage] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sender = useToken();

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
    }, []);

    useEffect(() => {
        if (socketMessage) {
            setMessages((prev) => [...prev, socketMessage]);
        }
    }, [socketMessage, setMessages]);

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
