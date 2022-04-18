import { io } from "socket.io-client";

const socket = io("https://node-chat-app-api.herokuapp.com");

export default socket;
