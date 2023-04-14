import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles["Body"]}>
      <div className={styles["Heade"]}>
        <div className={styles["box1"]}>
          <div className={styles["images"]}>
            <img src="logo.svg" alt="" />
          </div>
          <div className={styles["content"]}>
            <h1>
              Discover the <span id={styles["best"]}>Best</span> Food and Drinks
            </h1>
            <p>
              Naturally made Healthcare Products for the better care & support
              of your body.
            </p>

            <button type="submit">Explore Now!</button>
          </div>
        </div>
        <div className={styles["box2"]}>
          <img src="Group1.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
