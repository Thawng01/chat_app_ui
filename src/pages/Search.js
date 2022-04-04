import { useState } from "react";

import SearchInput from "../components/search/SearchInput";
import SearchResultItem from "../components/search/SearchResulItem";
import useNavigation from "../hook/useNavigation";

import "./search.css";
import apiClient from "../api/apiClient";

const Search = () => {
    const [data, setData] = useState();
    const navigate = useNavigation();

    const handleValueChange = async (value) => {
        const result = await apiClient.get(`user/search/${value}`);
        setData(result.data);
    };

    const handleClosSearch = (e) => {
        if (e.target.className === "search") {
            navigate(-1);
        }
    };

    return (
        <div className="search" onClick={(e) => handleClosSearch(e)}>
            <div className="search-container">
                <SearchInput onValueChange={handleValueChange} />
                <SearchResultItem items={data} />
            </div>
        </div>
    );
};

export default Search;
