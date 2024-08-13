import React from "react";
import style from "./navigate.module.css";
import { NavigationList } from "../../imitation";

const Navigate = () => {
  return (
    <nav className={style.container_navigate}>
      {NavigationList.map((item, index) => (
        <div className={style.navigation_border}>
          <span className={style.navigate_value} key={index}>
            {item.name}
          </span>
        </div>
      ))}
    </nav>
  );
};

export default Navigate;
