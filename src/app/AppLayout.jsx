import React from "react";
import styles from "./AppLayout.module.css";
import { Outlet, Link } from "react-router-dom";
import ROUTES from "./routes";

const AppLayout = () => {
  return (
    <>
      <header className={styles.header}>
        <h1><Link to={ROUTES.homepage} className={styles.Link}>Reddit</Link></h1>
      </header>
      <main className={styles.main}><Outlet /></main>
    </>
  );
};

export default AppLayout;
