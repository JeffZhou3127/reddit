import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetches data from Reddit API
export const fetchPostData = createAsyncThunk(
  "posts/loadPosts",
  async () => {
    const endpoint = "https://68dda5b2d7b591b4b78d044d.mockapi.io/posts";

    try {
      const response = await fetch(endpoint);
      if (response.ok) {
        const jsonResponse = await response.json();
        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
);

// Posts slice
const posts = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loadingData: false,
    loadingFailed: false,
  },
  reducers: {
    addPosts: (state, action) => {
      state.posts.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostData.pending, (state, action) => {
        state.loadingData = true;
        state.loadingFailed = false;
      })
      .addCase(fetchPostData.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loadingData = false;
        state.loadingFailed = false;
      })
      .addCase(fetchPostData.rejected, (state, action) => {
        state.loadingData = false;
        state.loadingFailed = true;
      })
  },
});

export const selectPosts = ({ posts }) => (posts.posts);
export const selectLoadingData = ({ posts }) => (posts.loadingData);
export const selectLoadingFailed = ({ posts }) => (posts.loadingData);
export const { addPosts } = posts.actions;
export default posts.reducer;
