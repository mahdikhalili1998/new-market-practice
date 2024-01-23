import React from "react";
import { useCard } from "../context/CardContext";
import { ThreeDots } from "react-loader-spinner";
import styles from "../css/buylist.module.css";
function BuyList() {
  const { state, dispatch } = useCard();
  console.log(state);
  return (
    <div className={styles.container}>
      <div>
        <p>Counter Item : {state.counterItem}</p>
        <p>Total Prices : {state.total}</p>
        {!state.checkOut ? (
          <p>
            CheckOut :{" "}
            <ThreeDots
              visible={true}
              height="80"
              width="80"
              color="var(--mainColor)"
              radius="9"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </p>
        ) : null}
      </div>
      <div>
        {state.selectedItem.map((item) => (
          <div className={styles.proList} key={item.id}>
            <img src={item.thumbnail} alt={item.brand} />
            <div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyList;
