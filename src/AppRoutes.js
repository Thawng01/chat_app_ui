import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import User from "./pages/User";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="chat/:user" element={<Chat />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
