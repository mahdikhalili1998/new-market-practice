import styles from "../css/card.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { BsInfoCircle } from "react-icons/bs";
import { shortName } from "../helper/help";
function Card({ products }) {
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <div className={styles.cardForm} key={item.id}>
          <img key={item.id} src={item.images[0].url} alt={item.brand} />
          <p>{shortName(item.title)}</p>
          <div className={ styles.icon}>
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
