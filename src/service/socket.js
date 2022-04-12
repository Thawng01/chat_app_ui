import { io } from "socket.io-client";

export const socket = io("https://node-chat-app-api.herokuapp.com");
