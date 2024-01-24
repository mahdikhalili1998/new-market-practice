import React from "react";
import { useCard } from "../context/CardContext";
import { ThreeDots } from "react-loader-spinner";
import SStyles from "../css/buylist.module.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaTrashCan } from "react-icons/fa6";
import styles from "../css/card.module.css";
import { quantityHandler, shortName } from "../helper/help";
function BuyList() {
  const { state, dispatch } = useCard();
  console.log(state);

  return (
    <div className={SStyles.container}>
      <div>
        <p>Counter Item : {state.counterItem}</p>
        <p>Total Prices : {state.total}</p>
        {!state.checkOut ? (
          <div>
            CheckOut :
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
          </div>
        ) : null}
      </div>
      <div>
        {state.selectedItem.map((item) => (
          <div className={SStyles.proList} key={item.id}>
            <img src={item.thumbnail} alt={item.brand} />
            <div>
              <p>{item.description}</p>
              <div>
                <p>Price : {item.price}</p>
                <p>Total Price Of This Product : {item.totalThis}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyList;
