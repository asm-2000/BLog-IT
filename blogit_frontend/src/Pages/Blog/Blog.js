import { useEffect, useState } from "react";
import styles from "./Blog.module.css";
import { useParams } from "react-router-dom";
import Card from "../../Components/Card/Card";

function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState({ status: false, message: "" });
  const { blogCategory } = useParams();
  useEffect(() => {
    async function fetchBlogs() {
      try {
        const response = await fetch(
          "http://localhost:8080/blog/blogCategories/" + blogCategory
        );
        if (response.ok) {
          const bloglst = await response.json();
          console.log(bloglst);
          setBlogs([...bloglst]);
        } else {
          const err = new Error({
            status: true,
            message: "Failed to fetch Blogs",
          });
          setError(err);
        }
      } catch {
        const err = new Error({
          status: true,
          message: "Failed to fetch Blogs",
        });
        setError(err);
      }
    }
    fetchBlogs();
  }, [blogCategory]);
  return (
    <>
      {error.status && (
        <div className={styles.root_div}>
          <h2>Failed to retrieve Blogs..</h2>
        </div>
      )}
      {!error.status && (
        <div className={styles.root_div}>
          <h2>Explore Blogs..</h2>
          <div className={styles.bloggrid}>
            {blogs.map((blog)=>(<Card props = {blog}></Card>))}
          </div>
        </div>
      )}
    </>
  );
}
export default Blog;