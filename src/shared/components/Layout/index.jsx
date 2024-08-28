import React, { useState } from "react";
import style from "./layout.module.css";
import Logo from "../../../assets/svg/borsok-logo.svg";

const ArrayOutletValue = [
  {
    id: 1,
    nameUrl: "Заказы",
    nameOutletComponent: "ordered",
    // newUrl: "/user-order",
  },
  {
    id: 2,
    nameUrl: "Открытие вакансий",
    nameOutletComponent: "vacancy",
    // newUrl: "/create-vacancy",
  },
  {
    id: 3,
    nameUrl: "Новостной Блог",
    nameOutletComponent: "news",
    // newUrl: "/create-news",
  },
];

export default function Layout({ page, setPage }) {
  const handleChangeUrl = (id) => {
    setPage((page) => (page = id));
  };

  return (
    <div className={style.container}>
      <div className={style.logotype}>
        <img src={Logo} alt="" />
      </div>
      <nav className={style.navigationBlock}>
        {ArrayOutletValue.map((item, index) => (
          <p key={index} onClick={() => handleChangeUrl(item.id)}>
            {item.nameUrl}
          </p>
        ))}
      </nav>
    </div>
  );
}
