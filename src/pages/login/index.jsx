import React, { useState } from "react";
import Logo from "../../assets/svg/borsok-logo.svg";
import style from "./login.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import api from "../../shared/lib/api";

// TODO Надо будет удалить поле password а так дальше реализовать отправку запроса на сервер

export default function Index() {
  const [phoneNumber, setPhoneNumber] = useState("+996 ");
  const [buttonActive, setButtonActive] = useState(false);
  const [visibility, setVisibility] = useState(false);

  const handlePhoneNumberChange = (e) => {
    const input = e.target.value;

    if (!input.startsWith("+996")) {
      setPhoneNumber("+996 ");
    } else {
      const formattedInput = "+996 " + input.slice(5).replace(/\D/g, "");
      setPhoneNumber(formattedInput);
    }

    if (input) setButtonActive(true);
    else setButtonActive(false);
  };

  const handleShowPassword = () => {
    setVisibility((prev) => !prev);
  };

  // const handleSendRegistration = () => {
  //   api.post("register/").then((res) => {
  //     res.data;
  //   });
  // };

  return (
    <div className={style.container}>
      <div className={style.login_container}>
        <img src={Logo} alt="logotype" />
        <form action="" className={style.container_form}>
          <div className={style.box_form}>
            <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className={style.box_form}>
            <FontAwesomeIcon icon={faPhone} />
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="+996 Ваш номер телефона"
              className={style.phoneInput}
            />
          </div>
          <div className={style.box_form}>
            <FontAwesomeIcon icon={faEye} onClick={handleShowPassword} />
            <input
              type={visibility ? "text" : "password"}
              placeholder="Пароль"
            />
          </div>
        </form>
        <button
          // onClick={handleSendRegistration()}
          className={`${style.authButton} ${
            buttonActive ? style.authButtonVisible : ""
          }`}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
}
