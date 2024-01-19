import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InfoContext, detailProduct } from "../context/DataContext";
import Swiper from "../components/Swiper";
import { IoLogoFlickr } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Styles from "../css/detail.module.css";
import styles from "../css/card.module.css";
import { InfoCardContext } from "../context/CardContext";
import { FaTrashCan } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { quantityHandler } from "../helper/help";
import Bt from "../components/Bt";
import Loader from "../components/Loader";

function DetailPage() {
  const { id } = useParams();
  const result = detailProduct(+id);
  if (!result) return <Loader />;

  console.log(result);

  return (
    <div className={Styles.container}>
      <Swiper result={result} />
      <div className={Styles.icons}>
        <h2>{result.title}</h2>
        <div className={Styles.iconInfo}>
          <div className={Styles.twoIcons}>
            <p>
              <IoLogoFlickr className={Styles.mainIcon} /> Brand :{" "}
              {result.brand}
            </p>
            <p>
              <BiSolidCategory className={Styles.mainIcon} /> Category :{" "}
              {result.category}
            </p>
          </div>
          <div className={Styles.twoIcons}>
            <p>
              <IoMdPricetag className={Styles.mainIcon} /> Price :{" "}
              {result.price}
            </p>
            <p>
              <FaStar className={Styles.mainIcon} /> Rating : {result.rating}
            </p>
          </div>
        </div>

        <Bt data={result} />

        <p>{result.description}</p>
      </div>
    </div>
  );
}

export default DetailPage;
