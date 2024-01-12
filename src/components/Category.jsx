import React from "react";
import styles from "../css/category.module.css";
import { BiCategory } from "react-icons/bi";
function Category({ products }) {
  return (
    <div className={styles.container}>
      <h3>
        Categories{" "}
        <span>
          <BiCategory style={{ marginTop: "5px" }} />
        </span>
      </h3>
      <ul>
        <li>All</li>
        <li>Smartphones</li>
        <li>Laptops</li>
        <li>Fragrances</li>
        <li>Skincare</li>
        <li>Groceries</li>
        <li>home-decoration</li>
      </ul>
    </div>
  );
}

export default Category;
