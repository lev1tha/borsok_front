import React from "react";
import style from "./app.module.css";

import Header from "../widget/header";
import Footer from "../widget/footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className={style.container}>
      <Header />
      <Routes>
        <Route path={"/"} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
