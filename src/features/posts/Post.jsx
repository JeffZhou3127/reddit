import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  // Test code. Improve later
  return (
    <section className={styles.section}>
      <img
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
        alt="Just went on vacation! The views are breathtaking."
        className={styles.img}
      />
      <article className={styles.article}>
        <p className={styles.author}>Posted by John</p>
        <p>Just went on vacation! The views are breathtaking.</p>
      </article>
    </section>
  );
};

export default Post;
