import { useContext, useState } from "react";
import styles from "../css/category.module.css";
import { BiCategory } from "react-icons/bi";
import { TbTriangleFilled } from "react-icons/tb";
import { InfoContext } from "../context/DataContext";
import { createQuery } from "../helper/help";
function Category({ products }) {
  const [click, setClick] = useState(false);
  const info = useContext(InfoContext);
  const { query, setQuery, searchParams, setSearchParams } = info;

  const categoryListHandler = (e) => {
    const tagname = e.target.tagname;
    const category = e.target.innerText.toLowerCase();
    setQuery((query) => createQuery(query, { category }));
    if (tagname !== "LI") return;
  };
  const clickHandler = () => {
    setClick((click) => !click);
  };

  return (
    <div className={styles.container}>
      <BiCategory onClick={clickHandler} className={styles.CategoryIcon} />
      {click && (
        <>
          <TbTriangleFilled className={styles.segosh} />
          <ul onClick={categoryListHandler} className={styles.categoryList}>
            <li>All</li>
            <li>Smartphones</li>
            <li>Laptops</li>
            <li>Fragrances</li>
            <li>Skincare</li>
            <li>Groceries</li>
            <li>home-decoration</li>
          </ul>
        </>
      )}
    </div>
  );
}

export default Category;
