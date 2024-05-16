import styles from "./CUblog.module.css";
import { useState } from "react";
import axios from "axios";
import blogIcon from "../../Assets/blogIcon.png";

function CUblog() {
  const [blogTitle, setTitle] = useState("");
  const [blogDescription, setDescription] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [paragraph1, setParagraph1] = useState("");
  const [paragraph2, setParagraph2] = useState("");
  const [paragraph3, setParagraph3] = useState("");
  const [result, setResult] = useState("");

  function submitHandler() {
    const blogData = {
      blogAuthor:"Ashim Baral",
      blogTitle,
      blogDescription,
      image1,
      image2,
      image3,
      paragraph1,
      paragraph2,
      paragraph3,
      dateOfCreation: new Date(),
    };
    async function submitBlog(blogdata) {
      const response = await axios
        .post("http://localHost:8080/blogRoutes/createBlog", blogdata)
        .catch(() => {
          setResult("Failed to submit document !");
        });
      const res = await response.json();
      setResult(res.body.result);
    }
    submitBlog(blogData);
  }

  return (
    <div className={styles.root_div}>
      {result && <div className={styles.message}>{result}</div>}
      <div className={styles.div_1}>
        <h2 className={styles.logintext}>Create A New Blog</h2>
        <img src={blogIcon} alt="Blog Icon" />

        <form className={styles.form_box} onSubmit={submitHandler}>
          <label htmlFor="title" className={styles.input_label}>
            Blog Title
          </label>
          <input
            type="name"
            id="title"
            className={styles.input_box}
            value={blogTitle}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            placeholder="Enter Blog Title (300 characters only)"
            required
          />

          <label htmlFor="description" className={styles.input_label}>
            Blog Description
          </label>
          <textarea
            id="description"
            className={styles.text_box}
            value={blogDescription}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            placeholder="Enter Blog description (1000 characters only)"
            required
          />

          <label htmlFor="image1" className={styles.input_label}>
            Upload Image1 *
          </label>
          <input
            type="file"
            id="image1"
            value={image1}
            onChange={(event) => {
              setImage1(event.target.value);
            }}
            required
            accept="image/*"
          />

          <label htmlFor="paragraph1" className={styles.input_label}>
            First Paragraph
          </label>
          <textarea
            type="text"
            id="paragraph1"
            className={styles.text_box}
            value={paragraph1}
            onChange={(event) => {
              setParagraph1(event.target.value);
            }}
            placeholder="Enter First Paragraph..."
            required
            maxLength="3000"
          />

          <label htmlFor="image2" className={styles.input_label}>
            Upload Image2
          </label>
          <input
            type="file"
            id="image2"
            value={image2}
            onChange={(event) => {
              setImage2(event.target.value);
            }}
            accept="image/*"
          />

          <label htmlFor="paragraph2" className={styles.input_label}>
            Second Paragraph
          </label>
          <textarea
            type="text"
            id="paragraph2"
            className={styles.text_box}
            value={paragraph2}
            onChange={(event) => {
              setParagraph2(event.target.value);
            }}
            placeholder="Enter Second Paragraph..."
          />

          <label htmlFor="image3" className={styles.input_label}>
            Upload Image3
          </label>
          <input
            type="file"
            id="image3"
            value={image3}
            onChange={(event) => {
              setImage3(event.target.value);
            }}
            accept="image/*"
          />

          <label htmlFor="paragraph3" className={styles.input_label}>
            Third Paragraph
          </label>
          <textarea
            type="text"
            id="paragraph3"
            className={styles.text_box}
            value={paragraph3}
            onChange={(event) => {
              setParagraph3(event.target.value);
            }}
            placeholder="Enter Third Paragraph..."
          />
          <div className={styles.div_last}>
            <button type="submit" className={styles.create_button}>
              Create The Blog !!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default CUblog;
