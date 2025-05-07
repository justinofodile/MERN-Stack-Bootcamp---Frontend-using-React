import axios from "axios";
import React, { useEffect, useReducer } from "react";

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
const UseList = (url, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get(url);
        dispatch({ type: "SUCCESS", data: response.data });
      } catch (error) {
        dispatch({ type: "ERROR", message: error.message });
      }
    }
    getPosts();
  }, [url]);
  return state;
};

export default UseList;
