import { useState } from "react";

import SearchInput from "../components/search/SearchInput";
import SearchResultItem from "../components/search/SearchResulItem";
import useNavigation from "../hook/useNavigation";

import "./search.css";

const items = [
    { id: 1, name: "Lian" },
    { id: 2, name: "Cung" },
    { id: 3, name: "Thawng" },
    { id: 4, name: "Thawng" },
    { id: 5, name: "Thawng" },
    { id: 6, name: "Salai Thawng" },
    { id: 7, name: "Thawng" },
    { id: 8, name: "Thawng" },
    { id: 9, name: "Kung" },
    { id: 10, name: "Thawng" },
    { id: 11, name: "Biak" },
    { id: 12, name: "Ceu" },
];

const Search = () => {
    const [data, setData] = useState(items);
    const navigate = useNavigation();

    const handleValueChange = (value) => {
        const result = items.filter((item) => item.name.includes(value));
        setData(result);
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
