import React, { useContext, useState } from "react";
import styles from "../css/card.module.css";
import { InfoCardContext } from "../context/CardContext";
import { FaTrashCan } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { quantityHandler } from "../helper/help";
function Bt({ data }) {
  const array = [];
  array.push(data);
  const { state, dispatch } = useContext(InfoCardContext);
  const shopingHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = quantityHandler(state, data.id);
  return (
    <div className={styles.icon}>
      <span className={styles.buttonsContainer}>
        {quantity === 0 ? (
          <MdAddShoppingCart
            style={{ fontSize: "2.6rem" }}
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
            onClick={() => shopingHandler("REMOVEee")}
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
    </div>
  );
}

export default Bt;
