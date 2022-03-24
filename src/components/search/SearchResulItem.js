import "./searchResultItem.css";
import useNavigation from "../../hook/useNavigation";
import Image from "../Image";

const SearchResultItem = ({ items }) => {
    const navigate = useNavigation();

    let content;
    if (items.length === 0) {
        content = <span>No result</span>;
    } else {
        content = items.map((item) => {
            return (
                <div
                    key={item.id}
                    className="search-result-item"
                    onClick={() => navigate(`/chat/${item.name}`)}
                >
                    <Image width={55} height={55} />
                    <span className="search-result-item-username">
                        {item.name}
                    </span>
                </div>
            );
        });
    }

    return <div className="search-result-item-container">{content}</div>;
};

export default SearchResultItem;
