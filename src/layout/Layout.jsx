import React from "react";
import styles from "../css/layout.module.css";
import { SlBasket } from "react-icons/sl";
import { RiAccountCircleFill } from "react-icons/ri";
function Layout({ children }) {
  return (
    <>
      <header className={styles.headderContainer}>
        <h1>ONLINE MARKET </h1>
        <div className={styles.icon}>
          <span>
            <SlBasket />
          </span>
          <span>
            <RiAccountCircleFill />
          </span>
        </div>
      </header>
      {children}
      <footer className={styles.footer}>this is footer</footer>
    </>
  );
}

export default Layout;
