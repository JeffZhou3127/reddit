import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostData, selectPosts, selectLoadingData, selectLoadingFailed } from "../features/posts/postsSlice";
import styles from "./Homepage.module.css"
import Post from "../features/posts/Post";

const Homepage = () => {
  // Get data from store
  const posts = useSelector(selectPosts);
  const loadingData = useSelector(selectLoadingData);
  const loadingFailed = useSelector(selectLoadingFailed);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostData());
  }, [dispatch]);

  // When loading:
  if (loadingData) {
    return <h2 className={styles.h2}>Loading Posts...</h2>;
  }

  // If data fails to load:
  if (loadingFailed) {
    return <h2 className={styles.h2}>Posts failed to load</h2>
  }

  // If data successfully loaded:
  return (
    <div className={styles.container}>
      {posts.map(({ PostImage, PostDescription, Author, id }) =>
        <Post key={id} postImage={PostImage} postDescription={PostDescription} author={Author} />
      )}
    </div>
  );
};

export default Homepage;
