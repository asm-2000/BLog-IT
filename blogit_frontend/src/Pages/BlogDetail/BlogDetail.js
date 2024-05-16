import styles from "./BlogDetail.module.css";
import { useParams } from "react-router-dom";

function BlogDetail()
{
    const {blogID} = useParams();
    const link = "blogs/"+ blogID;
    return <div className={styles.root_div}>
        <div>
            
        </div>
    </div>
}
export default BlogDetail;