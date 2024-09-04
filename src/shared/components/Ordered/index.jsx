import React, { useState, useEffect } from "react";
import style from "./ordered.module.css";
import OrderedCard from "../OrderCard/index";

export default function Index() {
  const [arrayClient, setArrayClient] = useState([]);

  // TODO реализовать запросы в back а так же реализовать запросы
  // useEffect(()=>{

  // }, [setTimeout(5000)])

  return (
    <div className={style.ordered_container}>
      <div className={style.upper_title}>
        <div className="name">Имя</div>
        <div className="address">Адрес</div>
        <div className="number">Номер</div>
        <div className="status">Статус</div>
      </div>
      <div>{arrayClient && <OrderedCard />}</div>
    </div>
  );
}
