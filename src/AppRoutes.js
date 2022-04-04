import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import User from "./pages/User";
import Auth from "./pages/Auth";
import RequireAuth from "./RequireAuth";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route
                    index
                    element={
                        <RequireAuth>
                            <User />
                        </RequireAuth>
                    }
                />
                <Route path="/auth" element={<Auth />} />
                <Route
                    path="/chat/:name"
                    element={
                        <RequireAuth>
                            <Chat />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/search"
                    element={
                        <RequireAuth>
                            <Search />
                        </RequireAuth>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        <RequireAuth>
                            <Profile />
                        </RequireAuth>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
