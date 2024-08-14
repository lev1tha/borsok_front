import React from "react";
import style from "./mobilenav.module.css";
import { NavigationList } from "../../../imitation";

const MobileNav = () => {
  return (
    <nav className={style.container_mobilenav}>
      {NavigationList.map((item, index) => (
        <span className={style.mobile_value} key={index}>
          {item.name}
        </span>
      ))}
    </nav>
  );
};

export default MobileNav;
