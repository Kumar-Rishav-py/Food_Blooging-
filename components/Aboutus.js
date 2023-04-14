import React from "react";
import style from "../styles/Aboutus.module.css";

const Aboutus = () => {
  return (
    <div className={style["Body"]}>
      <div className={style["box"]}>
        <div className={style["images"]}>
          <img src="photo.png" alt="" />
        </div>
        <div className={style["content"]}>
          <h1>About us</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. t has survived not
            only five centuries.
          </p>
          <button type="submit">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
