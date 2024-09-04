import React from "react";
import style from "./orderedCard.module.css";

export default function Index(name, address, number) {
  return (
    <div className={style.orderedCard_container}>
      <div className={style.name_client}>Eldos</div>
      <div className={style.address_client}>Мкрн-Толойкон 23а 67кв</div>
      <div className={style.number_client}>+996556693157</div>
      <div className={style.status_client}>Готовка</div>
    </div>
  );
}
