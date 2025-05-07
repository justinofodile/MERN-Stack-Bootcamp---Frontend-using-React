import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const params = useParams();

  //   console.log(params);
  const postId = params.postId;

  return (
    <div>
      <h3>Post {postId} Details</h3>
    </div>
  );
};

export default PostDetail;
