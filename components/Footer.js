import React from "react";
import styles from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className={styles["Foot"]}>
      <div className={styles["images"]}>
        <img src="logo.svg" alt="/" />
      </div>
      <div className={styles["contact"]}>
        <h2>Contact us</h2>
        <p>
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
          XYZ-343434
        </p>
        <p>example2020@gmail.com</p>
        <p>(904) 443-0343</p>
      </div>

      <div className={styles["More"]}>
        <h2>More</h2>
        <p>About  us</p>
        <p>Product</p>
        <p>Career</p>
        <p>Conatct us</p>
      </div>
      <div className={styles["socail"]}>
        <div className={styles["symbol"]}>
        <h2>Socail Links</h2>

            <a href="http://">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="http://">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
        </div>
        <div className={styles["copy"]}>&copy; 2022 Food truck examples</div>
      </div>
    </div>
  );
};

export default Footer;
