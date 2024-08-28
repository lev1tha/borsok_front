import React, { useState } from "react";
import Layout from "../../shared/components/Layout";
import style from "./admin.module.css";

import CreateNews from "../../shared/components/News/";
import CreateVacancy from "../../shared/components/Vacancy";
import CheckOrdered from "../../shared/components/Ordered";

export default function Admin() {
  const [page, setPage] = useState(1);

  console.log(page);
  return (
    <div className={style.container}>
      <>
        <Layout page={page} setPage={setPage} />
      </>
      {page == 1 ? (
        <CheckOrdered />
      ) : page == 2 ? (
        <CreateVacancy />
      ) : page == 3 ? (
        <CreateNews />
      ) : (
        <CheckOrdered />
      )}
    </div>
  );
}
