import React from "react";
import styles from "../css/layout.module.css";
import { SlBasket } from "react-icons/sl";
import { RiAccountCircleFill } from "react-icons/ri";
import Category from "../components/Category";
import { useCard } from "../context/CardContext";
function Layout({ children }) {
  const { state } = useCard();
  return (
    <>
      <header className={styles.headderContainer}>
        <h1>ONLINE MARKET </h1>
        <div className={styles.icon}>
          <span className={styles.cn}>
            <SlBasket />
            {!!state.counterItem && (
              <p className={styles.number}>{state.counterItem}</p>
            )}
          </span>
          <span className={styles.navServices}>
            <RiAccountCircleFill />
            <Category />
          </span>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>this is footer</footer>
    </>
  );
}

export default Layout;
