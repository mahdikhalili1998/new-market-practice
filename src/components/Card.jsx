import styles from "../css/card.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { shortName } from "../helper/help";
import { IoMdPricetag } from "react-icons/io";
import { RiStockLine } from "react-icons/ri";
function Card({ products }) {
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <div className={styles.cardForm} key={item.id}>
          <img key={item.id} src={item.thumbnail} alt={item.brand} />
          <p className={styles.title}>{shortName(item.title)}</p>
          <p className={styles.sp}>
            <span>
              <RiStockLine />
            </span>{" "}
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
