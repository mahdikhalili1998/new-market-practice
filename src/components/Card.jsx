import styles from "../css/card.module.css";

function Card({ products }) {
  return (
    <div className={styles.container}>
      {products.map((item) => (
        <div key={item.id}>
          <img key={item.id} src={item.images[0].url} alt={item.brand} />
        </div>
      ))}
    </div>
  );
}

export default Card;
