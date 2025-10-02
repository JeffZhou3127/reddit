import React from "react";
import styles from "./Homepage.module.css"
import Post from "../features/posts/Post";

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Homepage;
