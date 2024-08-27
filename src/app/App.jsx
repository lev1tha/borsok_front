import React from "react";
import style from "./app.module.css";

import Header from "../widget/header";
import Footer from "../widget/footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Admin from "../pages/admin";

const App = () => {
  const url = window.location.href;

  console.log(url);

  return (
    <div className={style.container}>
      {url.includes("/admin") || <Header />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/admin"} element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
