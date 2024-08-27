import React from "react";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../assets/svg/borsok-logo.svg";

const Header = () => {
  return (
    <div className={style.header_container}>
      <div className={style.logotype}>
        <img src={Logo} alt="LogoType" />
      </div>
      <div className={style.navigation}>
        <nav>
          <Link to={"/"}>
            <span>Меню</span>
          </Link>
          <Link to={"/акций"}>
            <span>Акций</span>
          </Link>
        </nav>
        <div className={style.card}>
          <Link className={style.card_inner} to={"/card"}>
            <div>
              <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div>
              <span>Карзина</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
