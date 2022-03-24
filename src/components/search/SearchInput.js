import { useState, useEffect, useRef } from "react";
import { IoArrowBack, IoSearch, IoClose } from "react-icons/io5";

import "./searchInput.css";
import useNavigation from "../../hook/useNavigation";

const SearchInput = ({ onValueChange }) => {
    const [value, setValue] = useState("");

    const ref = useRef();
    const navigate = useNavigation();

    useEffect(() => {
        ref?.current?.focus();
    }, []);

    const handleChange = (e) => {
        setValue(e.target.value);
        onValueChange(e.target.value);
    };
    const handleClear = () => setValue("");

    return (
        <div className="search-inner-container">
            <div
                className="search-back-icon-container"
                onClick={() => navigate(-1)}
            >
                <IoArrowBack className="search-back-icon" />
            </div>
            <div className="search-input-container">
                <input
                    ref={ref}
                    placeholder="Search a friend"
                    value={value}
                    onChange={handleChange}
                />
                {value && (
                    <IoClose
                        className="input-clear-icon"
                        onClick={handleClear}
                    />
                )}
            </div>
            <div className="search-btn-icon-container">
                <IoSearch className="search-btn-icon" />
            </div>
        </div>
    );
};

export default SearchInput;
