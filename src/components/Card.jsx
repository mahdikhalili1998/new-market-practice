import styles from "../css/card.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { BsDisplay, BsInfoCircle } from "react-icons/bs";
import { shortName } from "../helper/help";
import { IoMdPricetag } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
function Card({ display }) {
  return (
    <div className={styles.container}>
      {display.map((item) => (
        <div key={item.id} className={styles.cardForm}>
          <img src={item.thumbnail} alt={item.brand} />
          <p className={styles.title}>{shortName(item.title)}</p>
          <p className={styles.sp}>
            <span>
              <RiStockLine />
            </span>
            Stock : {item.stock}
          </p>
          <p className={styles.sp}>
            <span>
              <IoMdPricetag />
            </span>{" "}
            Prices : {item.price} $
          </p>
          <div className={styles.icon}>
            <span>
              <MdAddShoppingCart />
            </span>
            <span>
              <BsInfoCircle />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
