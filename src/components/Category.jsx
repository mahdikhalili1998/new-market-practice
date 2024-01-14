import { useState } from "react";
import styles from "../css/category.module.css";
import { BiCategory } from "react-icons/bi";
import { TbTriangleFilled } from "react-icons/tb";
function Category({ products }) {
  const [click, setClick] = useState(false);
  const clickHandler = () => {
    setClick((click) => !click);
  };

  return (
    <div className={styles.container}>
      <BiCategory onClick={clickHandler} className={styles.CategoryIcon} />
      {click && (
        <>
          <TbTriangleFilled className={styles.segosh} />
          <ul className={styles.categoryList}>
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
