import React from "react";
import styles from "./ErrorElement.module.css";
import Navbar from "../Components/Navbar/Navbar";

function ErrorElement() {
  return (
    <div className={styles.root_div}>
      <Navbar></Navbar>
      <div>
        <h1 style={{ color: "gray", fontWeight: "bold" }}>404: NOT FOUND..</h1>
      </div>
    </div>
  );
}
export default ErrorElement;
