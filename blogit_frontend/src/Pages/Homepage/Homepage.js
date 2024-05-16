import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Sidebar from "../../Components/SIdebar/Sidebar";
import Card from "../../Components/Card/Card";

function Homepage() {
  const [blogs, setBlogs] = useState([]);
  const [status, setStatus] = useState("notfetched");
  const [errorMsg, setErrMsg] = useState("");

  async function fetchBlogs() {
    try {
      const response = await fetch("http://localhost:8080/Blogs");
      const data = await response.json();
      const BlogData = [...data];
      setBlogs(BlogData);
      setStatus("fetched");
    } catch {
      const err = new Error("Unable to fetch data.");
      setStatus("notfetched");
      setErrMsg(err.message);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className={styles.root_div}>
      <Sidebar></Sidebar>
      <div className={styles.blogs}>
        <div className={styles.bloggrid}>
          {" "}
          {/* {products.map((blog) => (
            <Card props = {blog}></Card>
          ))} */}
          <Card></Card>
        </div>

      </div>
    </div>
  );
}
export default Homepage;
