import React from "react";
import style from "./card.module.css";
import food from "../../../assets/image/download.jpg";

const Card = () => {
  return (
    <div className={style.container_card}>
      <div className={style.photo_food}>
        <img src={food} alt="food-photo" />
      </div>
      <div className={style.title}>
        <h1>Какой-то обоссаный салат</h1>
        <div className={style.recipe}>
          <p>
            Ебейщий какой-то салат который я никогда не заказывал но фото и
            повор сказали что он ахуенный ну хули повору не доверять
          </p>
        </div>
      </div>
      <div className={style.buttons_form}>
        <div>
          <span>Вес: 230гр</span>
        </div>
        <div>
          <button className={style.ordered}>Добавь в каризну</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
