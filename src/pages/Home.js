import "./home.css";
import Header from "../components/Header";
import User from "./User";
import Chat from "./Chat";

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <User />
                <Chat />
            </div>
        </>
    );
};

export default Home;
