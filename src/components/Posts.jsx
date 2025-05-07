import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      //   console.log(response);
      setPosts(response.data);
    }
    getPosts();
  }, []);
  return (
    <div>
      <h3>Post Lists</h3>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
