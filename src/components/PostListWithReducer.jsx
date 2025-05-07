import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  posts: [],
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        loading: false,
        posts: action.data,
        error: "",
      };
    case "ERROR":
      return {
        loading: false,
        post: [],
        error: action.message,
      };
    default:
      return state;
  }
};
const PostListWithReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        //   console.log(response);
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", message: error.message });
      }
    }
    getPosts();
  }, []);
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

export default PostListWithReducer;
