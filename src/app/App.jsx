import React from "react";
import style from "./app.module.css";
// component && logic for router
import Header from "../widget/header";
import Footer from "../widget/footer";
import { Route, Routes } from "react-router-dom";
// pages component
import Home from "../pages/home";
import Cart from "../pages/cart";
import Admin from "../pages/admin";
import Login from "../pages/login";
import Auth from "../pages/auth";

const App = () => {
  const url = window.location.href;

  return (
    <div className={style.container}>
      {url.includes("/admin") ||
        url.includes("/login") ||
        url.includes("/auth") || <Header />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/admin"} element={<Admin />} />
        {/* 
          auth/login
          auth/auth
      */}
        <Route path={"/login"} element={<Login />} />
        <Route path={"/auth"} element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
