import React from "react";

// ICONS
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBar.scss";

const SearchBar = ({ filterText, setFilterText }) => {
    const handleSearchInputText = (e) => {
        setFilterText(e.target.value);
    };

    return (
        <div className="main-content-search">
            <div className="search-btn d-flex justify-content-between align-items-center">
                <input
                    title="Search"
                    className="search-input"
                    type="text"
                    placeholder="Search contacts"
                    value={filterText}
                    onChange={handleSearchInputText}
                />
                <span className="serch-icon d-flex justify-content-center align-items-center">
                    <SearchIcon className="search-icon" />
                </span>
            </div>
        </div>
    );
};

export default SearchBar;
