import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { useUpdatePostMutation } from "./postApis";
import '../../App.css'


const UpdatePost = ({ post, closeModal }) => {

  const [updatePost] = useUpdatePostMutation();

  const [title, setTitle] = useState(post ? post.title : '');
  const [body, setBody] = useState(post ? post.body : '');


  const handleUpdate = (e) => {
    e.preventDefault();
    updatePost({ title: title, body: body ,id:post.id});
    // console.log("love it", { post_title: title, post_content: content }, "id");
    closeModal();
  };

  const handleClose=()=>{
    closeModal();

  }
  return (
    <section className="modal-card">
      <div className="close">
      <MdOutlineCancel className="close-icon"  onClick={handleClose}/>
      </div>
      <h2>Update Your Post</h2>
      
      <form className="form" onSubmit={handleUpdate}>
        <label className="form-input" htmlFor="updatePostTitle">
          Title:
          <input type="text"  value={title}
            onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="form-input" htmlFor="updatePostContent">
          Content:
          <textarea value={body}
            onChange={(e) => setBody(e.target.value)}/>
        </label>
        <button type="submit">Update Post</button>
      </form>
    </section>
  );
};

export default UpdatePost;
