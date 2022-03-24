import { useState, useEffect, useRef } from "react";
import { IoArrowBack, IoSearch, IoClose } from "react-icons/io5";

import "./searchInput.css";
import useNavigation from "../../hook/useNavigation";
import Icon from "../Icon";

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
    const handleNavigation = () => navigate(-1);

    return (
        <div className="search-inner-container">
            <Icon MyIcon={IoArrowBack} onClick={handleNavigation} />
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
