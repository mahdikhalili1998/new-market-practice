import styles from "../css/card.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { BsDisplay, BsInfoCircle } from "react-icons/bs";
import { shortName } from "../helper/help";
import { IoMdPricetag } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCard } from "../context/CardContext";
function Card({ data }) {
  const { id, stock, price, title, brand, thumbnail } = data;
  const { state, dispatch } = useCard();
  const shopingHandler = (type) => {
    dispatch({ type, payload: data });
  };
  return (
    <div key={id} className={styles.cardForm}>
      <img src={thumbnail} alt={brand} />
      <p className={styles.title}>{shortName(title)}</p>
      <p className={styles.sp}>
        <span>
          <RiStockLine />
        </span>
        Stock : {stock}
      </p>
      <p className={styles.sp}>
        <span>
          <IoMdPricetag />
        </span>{" "}
        Prices : {price} $
      </p>
      <div className={styles.icon}>
        <span onClick={() => shopingHandler("ADD_ITEM")}>
          <MdAddShoppingCart />
        </span>
        <span>
          <Link className={styles.link} to={`/detail-page/${id}`}>
            <BsInfoCircle />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Card;
