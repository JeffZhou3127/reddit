import React from "react";
import styles from "./Post.module.css";

const Post = ({ postImage, author, postDescription }) => {
  // Uses props to generate a post
  return (
    <section className={styles.section}>
      <img src={postImage} alt={postDescription} className={styles.img} />
      <article className={styles.article}>
        <p className={styles.author}>Posted by {author}</p>
        <p>{postDescription}</p>
      </article>
    </section>
  );
};

export default Post;
