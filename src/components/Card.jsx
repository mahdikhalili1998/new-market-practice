import styles from "../css/card.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { BsDisplay, BsInfoCircle } from "react-icons/bs";
import { quantityHandler, shortName } from "../helper/help";
import { IoMdPricetag } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useCard } from "../context/CardContext";
import { FaTrashCan } from "react-icons/fa6";
function Card({ data }) {
  const { id, stock, price, title, brand, thumbnail } = data;
  const { state, dispatch } = useCard();
  const shopingHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = quantityHandler(state, id);
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
        <span className={styles.buttonsContainer}>
          {quantity === 0 ? (
            <MdAddShoppingCart
              className={styles.buttons}
              onClick={() => shopingHandler("ADD_ITEM")}
            />
          ) : (
            <button
              className={styles.buttons}
              onClick={() => shopingHandler("INCREASE")}
            >
              +
            </button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 1 && (
            <FaTrashCan
              className={styles.trash}
              onClick={() => shopingHandler("REMOVE")}
            />
          )}
          {quantity > 1 && (
            <button
              style={{ marginTop: "-.4rem" }}
              className={styles.buttons}
              onClick={() => shopingHandler("DECREASE")}
            >
              -
            </button>
          )}
        </span>
        <span className={styles.info}>
          <Link className={styles.link} to={`/detailpage/${data.id}`}>
            <BsInfoCircle />
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Card;
