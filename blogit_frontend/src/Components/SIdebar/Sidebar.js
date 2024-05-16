import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.title}>Blog Categories</h3>
      <Link to="" className={styles.classLinks}>
        Technology
      </Link>
      <Link to="" className={styles.classLinks}>
        IT
      </Link>
      <Link to="" className={styles.classLinks}>
        Engineering
      </Link>
      <Link to="" className={styles.classLinks}>
        Design
      </Link>
      <Link to="/productcategory/sportsItem" className={styles.classLinks}>
        Art
      </Link>
      <Link to="/productcategory/accandornament" className={styles.classLinks}>
        Agriculture
      </Link>
      <Link to="/productcategory/homeApp" className={styles.classLinks}>
        Politics
      </Link>
      <Link to="/productcategory/Electronics" className={styles.classLinks}>
        Sports
      </Link>
      <Link to="/productcategory/babygarment" className={styles.classLinks}>
        News
      </Link>
      <Link to="/productcategory/vehicleAcc" className={styles.classLinks}>
        Miscalleneous
      </Link>
    </div>
  );
}
export default Sidebar;
