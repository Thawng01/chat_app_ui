import useMyContext from "../../hook/useMyContext";
import "./nolist.css";
const NoList = () => {
    const { dark } = useMyContext();
    return (
        <div className="no-chat-list">
            <span style={{ color: dark ? "#fff" : "#000" }}>
                Any user whom you chat will appear here.
            </span>
        </div>
    );
};

export default NoList;
