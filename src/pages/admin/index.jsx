import React from "react";
import Layout from "../../shared/components/Layout";
import style from "./admin.module.css"

export default function Admin() {
  return (
    <div className={style.container}>
      <Layout />
      <div>admin</div>
    </div>
  );
}
