import React from "react";
import { IoSearch } from "react-icons/io5";
import styles from "../css/search.module.css";
function Search() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="search" />
      <span>
        <IoSearch />
      </span>
    </div>
  );
}

export default Search;
