import React, { useState } from "react";
import styles from "./Post.module.css";

const Post = ({ postImage, author, postDescription }) => {
  // If no author provided, use "unknown"
  const [authorName, setAuthorName] = useState(author);

  if (authorName.length === 0) {
    setAuthorName("unknown");
  }

  // Uses props to generate a post
  return (
    <section className={styles.section}>
      <img src={postImage} alt={postDescription} className={styles.img} />
      <article className={styles.article}>
        <p className={styles.author}>Posted by {authorName}</p>
        <p>{postDescription}</p>
      </article>
    </section>
  );
};

export default Post;
