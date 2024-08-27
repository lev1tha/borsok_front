import React from "react";
import style from "./layout.module.css";
import Logo from "../../../assets/svg/borsok-logo.svg";

export default function index() {
  return (
    <>
      <div className={style.container}>
        <div className={style.logotype}>
          <img src={Logo} alt="" />
        </div>
        <nav className={style.navigationBlock}>
          <p>Заказы</p>
          <p>Открытие вакансий</p>
          <p>Новостоной Блог</p>
        </nav>
      </div>
    </>
  );
}
