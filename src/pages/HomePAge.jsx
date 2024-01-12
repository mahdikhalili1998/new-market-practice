import { useEffect, useState } from "react";
import { useInfo } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";
import Loader from "../components/Loader";
import Card from "../components/card";
import Category from "../components/Category";
import styles from "../css/homepage.module.css";
import Search from "../components/Search";
function HomePAge() {
  const result = useInfo();
  const [display, setDisplay] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    setDisplay(result);
  }, [result]);

  useEffect(() => {
    const newProducts = display.map((item) => ({
      ...item,
      images: item.images.map((src) => ({ url: src, id: uuidv4() })),
    }));
    setProducts(newProducts);
  }, [display]);

  return (
    <div>
      {!display.length && <Loader />}
      <Search />
      <div className={styles.container}>
        <Card products={products} />
        <Category products={products} />
      </div>
    </div>
  );
}

export default HomePAge;
