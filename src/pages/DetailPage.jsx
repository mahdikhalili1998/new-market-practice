import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { detailProduct } from "../context/DataContext";
import Swiper from "../components/Swiper";
import { IoLogoFlickr } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdPricetag } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import Styles from "../css/detail.module.css";
import Bt from "../components/Bt";
import Loader from "../components/Loader";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoArrowBackCircleSharp } from "react-icons/io5";

function DetailPage() {
  const [click, setClick] = useState(true);
  const { id } = useParams();
  const result = detailProduct(+id);
  if (!result) return <Loader />;

  return (
    <div className={Styles.container}>
      <Swiper result={result} />
      <div className={Styles.icons}>
        <h2>{result.title}</h2>
        <div className={Styles.iconInfo}>
          <div className={Styles.twoIcons}>
            <p>
              <IoLogoFlickr className={Styles.mainIcon} /> <span> </span> Brand
              : {result.brand}
            </p>
            <p>
              <BiSolidCategory className={Styles.mainIcon} /> <span> </span>{" "}
              Category : {result.category}
            </p>
          </div>
          <div className={Styles.twoIcons}>
            <p>
              <IoMdPricetag className={Styles.mainIcon} /> <span> </span> Price
              : {result.price}
            </p>
            <p>
              <FaStar className={Styles.mainIcon} /> <span> </span> Rating :{" "}
              {result.rating}
            </p>
          </div>
        </div>

        <div className={Styles.middle}>
          <Bt data={result} />
          <Link className={Styles.back} to="/homepage">
            Back to HomePage <IoArrowBackCircleSharp className={Styles.backIcon} />{" "}
          </Link>
        </div>

        <div className={Styles.des}>
          <div
            onClick={() => {
              setClick((click) => !click);
            }}
            className={Styles.moreDes}
          >
            <h3>Description ( ... ) </h3>
            {click ? (
              <span>
                <IoIosArrowDropdownCircle c />
              </span>
            ) : (
              <span>
                <IoIosArrowDropupCircle />
              </span>
            )}
          </div>
          {!click ? <p>{result.description}</p> : null}
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
