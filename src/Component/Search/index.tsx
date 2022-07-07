import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./index.css";
import { searchQuery } from "../../Redux/sliceSearch";
import { getUserSearch } from "../../Helper/getData";
import { Item } from "../../Helper/interface";

const Search = () => {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<Item[] | undefined>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserSearch(search).then((response) => {
      setUser(response);
    });
  }, [search]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchQuery(search));
    setUser([]);
  };

  const handleLiOnClick = (text: string) => {
    setSearch(text);
    setUser([]);
  };

  const listUser = user?.slice(0, 5).map((val) => {
    return (
      <li
        onClick={() => handleLiOnClick(val.login)}
        className="autosuggestion-item"
      >
        {val.login}
      </li>
    );
  });

  return (
    <div className="search-container">
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <input
          id="search"
          onChange={(event) => handleOnChange(event)}
          className="search-input"
          placeholder="search here....."
          type="text"
          value={search}
        />
        <button className="btn-submit" type="submit">
          Search
        </button>
      </form>
      <ul className="search-autosuggestion">{search ? listUser : null}</ul>
    </div>
  );
};

export default Search;
