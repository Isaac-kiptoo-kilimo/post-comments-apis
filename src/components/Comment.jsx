import React, { useState } from "react";

import '../App.css'


const Comment = ({ comment }) => {
 

  return (
    <article className="card" key={comment._id}>
      <h3>{comment.name}</h3>
      <p>{comment.body}</p>
      {/* <p>Author: {comment.author_id}</p> */}
           
    </article>
  );
};

export default Comment;
