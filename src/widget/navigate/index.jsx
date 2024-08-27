import React, { useState } from "react";
import style from "./navigate.module.css";
import { NavigationList } from "../../imitation";

const Navigate = () => {
  const [choiseCategory, setChoiseCategory] = useState(5);

  const handleActive = (id) => {
    setChoiseCategory(id);
  };

  return (
    <nav className={style.container_navigate}>
      {NavigationList.map((item, index) => (
        <div
          className={
            choiseCategory === item.id
              ? style.navigation_border_active
              : style.navigation_border
          }
        >
          <span
            onClick={() => handleActive(item.id)}
            className={style.navigate_value}
            key={index}
          >
            {item.name}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Navigate;
