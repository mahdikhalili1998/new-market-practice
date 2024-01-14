import React, { useContext } from "react";
import { IoSearch } from "react-icons/io5";
import styles from "../css/search.module.css";
import { InfoContext } from "../context/DataContext";
function Search({searchHandler}) {
  const info = useContext(InfoContext);
  const { search, setSearch } = info;

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        placeholder="search"
      />
      <span>
        <IoSearch onClick={searchHandler} />
      </span>
    </div>
  );
}

export default Search;
