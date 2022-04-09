import { BiError } from "react-icons/bi";
import useMyContext from "../hook/useMyContext";
import "./error.css";
const Error = ({ error }) => {
    const { dark } = useMyContext();

    return (
        <div className="message-error">
            <div
                className="message-error-icon-container"
                style={{ backgroundColor: dark ? "#333" : "#f1f1f1" }}
            >
                <BiError
                    className="message-error-icon"
                    style={{ color: dark ? "#fff" : "#000" }}
                />
            </div>
            <span style={{ color: dark ? "#fff" : "#000" }}>{error}</span>
        </div>
    );
};

export default Error;
