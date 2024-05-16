import React from "react";
import styles from "./Navbar.module.css";
import home_icon from "../../Assets/homeIcon.png";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth";

function Navbar() {
  // const { isloggedIn } = useAuth();
  const isloggedIn = false;
  return (
    <Fragment>
      <div className={styles.navbar_box1} id="Navbar">
        <div className={styles.navbar_box1_1}>
          <figure>
            <Link to="/">
              <img
                src={home_icon}
                className={styles.home_logo}
                alt="Home"
                style={{ width: "45px", height: "45px" }}
              />
            </Link>
          </figure>
        </div>

        <div className={styles.navbar_box1_2}>
          <Link to="/" className={styles.nav_links}>
            Homepage
          </Link>
          <Link to="/createBlog" className={styles.nav_links}>
            Create Blog
          </Link>
          {isloggedIn && (
            <>
              <Link to="/yourBlogs/:userID" className={styles.nav_links}>
                Your Blogs
              </Link>
              <button className={styles.nav_links}>Log Out</button>
            </>
          )}
          {!isloggedIn && (
            <>
              <Link to="/login" className={styles.nav_links}>
                Login
              </Link>
              <Link to="/signup" className={styles.nav_links}>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
      <hr className={styles.nav_line} />
    </Fragment>
  );
}
export default Navbar;
