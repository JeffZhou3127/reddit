import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData, selectPosts } from "../features/posts/postsSlice";
import styles from "./Homepage.module.css"
import Post from "../features/posts/Post";

const Homepage = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {posts.map(({ PostImage, PostDescription, Author, id }) =>
        <Post key={id} postImage={PostImage} postDescription={PostDescription} author={Author} />
      )}
    </div>
  );
};

export default Homepage;
