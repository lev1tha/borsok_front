import React, { useState } from "react";
import style from "./auth.module.css";
import Logo from "../../assets/svg/borsok-logo.svg";
import api from "../../shared/lib/api";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function AuthPage() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [visibility, setVisibility] = useState(false);
  const [visibilityButton, setVisibilityButton] = useState(false);

  const handleChangeVisibility = (event) => {
    const input = event.target.value;
    if (input) {
      setVisibilityButton(true);
    } else {
      setVisibilityButton(false);
    }
  };

  const handleOnSendAuth = (e) => {
    e.preventDefault();

    api
      .post("login", { name, password })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
      })
      .catch((error) => {
        console.error("Ошибка при авторизации", error);
      });
  };

  const handleShowPassword = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <div className={style.container}>
      <div className={style.modal}>
        <div>
          <img src={Logo} alt="logotype" />
        </div>
        <form
          action=""
          className={style.form_input}
          onSubmit={handleOnSendAuth}
        >
          <input
            type="text"
            placeholder="Введите ваше имя"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div className={style.box_form}>
            <FontAwesomeIcon
              icon={visibility ? faEye : faEyeSlash}
              onClick={handleShowPassword}
            />
            <input
              type={visibility ? "text" : "password"}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                handleChangeVisibility(event);
              }}
              placeholder="Пароль"
            />
          </div>
          {visibilityButton && (
            <button
              type="submit"
              className={visibility ? style.button : style.button_active}
            >
              Войти
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
