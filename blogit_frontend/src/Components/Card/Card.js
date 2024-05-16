import { useEffect } from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Card() {
  // const blogID = props.props.blogID;
  // const blogLink = "blogCategories/" + blogID;
  // useEffect(()=>{
  //   function fetchBlogDetail(blogLink)
  //   {
  //     const BlogDetail = axios.get(blogLink);
  //     return BlogDetail;
  //   }
  //   const blogDetail = fetchBlogDetail(blogLink);
  // },[]
    
  // );
  return (
    // <Link to={blogLink}>
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <img
            src="https://source.unsplash.com/600x400/?computer"
            alt="card__image"
            className={styles.card__image}
            
          />
        </div>
        <div className={styles.card__body}>
          <span className={styles.tag_blue}>Technology</span>
          <h4>What's new in 2022 Tech</h4>
          <p style={{fontSize:".8em"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea
            atque quidem!
          </p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <img
              src="https://i.pravatar.cc/40?img=1"
              alt="user__image"
              className={styles.user__image}
            />
            <div className={styles.user__info}>
              <h5>Jane Doe</h5>
              <h6 style={{color:"gray"}}>2 hours ago</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </Link>
  );
}
export default Card;
