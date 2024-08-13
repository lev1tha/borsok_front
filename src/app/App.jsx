import React from "react";
import style from "./app.module.css";

import Header from "../widget/header";
import Footer from "../widget/footer";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Card from "../pages/card";

const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/card"} element={<Card />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
