import React, { useContext, useEffect, useState } from "react";
import { InfoContext, useInfo } from "../context/DataContext";
import { v4 as uuidv4 } from "uuid";

function HomePAge() {
  const result = useContext(InfoContext);
  const [display, setDisplay] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    setDisplay(result);
  }, [result]);

  useEffect(() => {
    const newProducts = display.map((item) => ({
      ...item,
      id2: uuidv4(),
    }));
    setProducts(newProducts);
  }, [display]);

  return (
    <>
      {products.map((item) => (
        <div key={item.id2}>
          {item.images.map(
            (pic) => (
              console.log(pic),
              (
                <div key={item.id}>
                  <img src={pic} alt={item.brand} />
                </div>
              )
            )
          )}
        </div>
      ))}
    </>
  );
}

export default HomePAge;
