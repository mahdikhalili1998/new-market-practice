import React from "react";
import { useCard } from "../context/CardContext";
import { ThreeDots } from "react-loader-spinner";
import SStyles from "../css/buylist.module.css";
import { MdDelete } from "react-icons/md";
import { quantityHandler, shortName } from "../helper/help";
import styles from "../css/card.module.css";
import { MdNumbers } from "react-icons/md";
import { GiPriceTag } from "react-icons/gi";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { MdPriceChange } from "react-icons/md";
import Empty from "../components/Empty";

function BuyList() {
  const { state, dispatch } = useCard();
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };
  console.log(state);

  return (
    <>
      {!!state.selectedItem ? (
        <Empty />
      ) : (
        <div className={SStyles.container}>
          <div className={SStyles.allInfo}>
            <p>
              <MdNumbers className={SStyles.priceIcon} /> Counter Item :{" "}
              {state.counterItem}
            </p>
            <p>
              <GiPriceTag className={SStyles.priceIcon} /> Total Prices :{" "}
              {state.total}
            </p>
            {!state.checkOut ? (
              <div className={SStyles.checkOut}>
                <p>
                  <MdOutlineShoppingCartCheckout
                    className={SStyles.priceIcon}
                  />
                  CheckOut :
                </p>
                <p>
                  pending
                  <ThreeDots
                    visible={true}
                    height="10"
                    width="20"
                    color="var(--mainColor)"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                  />
                </p>
              </div>
            ) : null}
          </div>
          <div>
            {state.selectedItem.map((item) => (
              <div className={SStyles.proList} key={item.id}>
                <img src={item.thumbnail} alt={item.brand} />
                <div className={SStyles.proInfo}>
                  <h2>{shortName(item.title)}</h2>
                  <p>{item.description}</p>
                  <div className={SStyles.price}>
                    <p className={SStyles.middle}>
                      <IoMdPricetag className={SStyles.priceIconInner} /> Price
                      : {item.price}
                    </p>
                    <p className={SStyles.middle}>
                      <MdPriceChange className={SStyles.priceIconInner} /> Total
                      Price Of This Product : {item.totalThis}
                    </p>
                  </div>
                  <div className={SStyles.bt}>
                    {quantityHandler(state, item.id) > 0 && (
                      <button
                        className={SStyles.increase}
                        onClick={() => clickHandler("INCREASE", item)}
                      >
                        +
                      </button>
                    )}
                    {!!quantityHandler(state, item.id) && (
                      <span style={{ fontSize: "2rem" }}>
                        {quantityHandler(state, item.id)}
                      </span>
                    )}
                    {quantityHandler(state, item.id) === 1 && (
                      <button
                        style={{ marginTop: "5px" }}
                        onClick={() => clickHandler("REMOVE", item)}
                      >
                        <MdDelete />
                      </button>
                    )}
                    {quantityHandler(state, item.id) > 1 && (
                      <button
                        className={SStyles.increase}
                        onClick={() => clickHandler("DECREASE", item)}
                      >
                        -{" "}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default BuyList;
