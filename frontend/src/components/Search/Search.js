import React, { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import "./Search.css";
import { useSelector } from "react-redux";

const Search = ({ searchData, setSearchData }) => {
  const [searchInput, setSearchInput] = useState("");
  const posts = useSelector((state) => state.posts);

  const onSearch = (e) => {
    e.preventDefault();
    setSearchData(posts.filter((post) => post.title.includes(searchInput)));
  };

  return (
    <div className="post_search">
      <form action="#">
        <input
          type="text"
          
          placeholder="Enter the item to Search..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />

        <button className="post_search_button" type="submit" onClick={onSearch}>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
