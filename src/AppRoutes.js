import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import User from "./pages/User";
import Auth from "./pages/Auth";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<User />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/chat/:user" element={<Chat />} />
                <Route path="/search" element={<Search />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
