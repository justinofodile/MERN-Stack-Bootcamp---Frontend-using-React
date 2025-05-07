import React from "react";
import useList from "./hooks/UseList";

const url = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};
const PostListWithCustomHook = () => {
  const state = useList(url, initialState);
  return (
    <div>
      <div>
        {state.loading ? (
          <p>Loading...</p>
        ) : state.error ? (
          <p>{state.error}</p>
        ) : (
          state.posts.map((post) => (
            <div key={post.id}>
              <h4>{post.title}</h4>
              <p>{post.body}</p>
              <hr />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PostListWithCustomHook;
