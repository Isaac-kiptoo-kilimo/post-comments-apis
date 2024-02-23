import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { createPortal } from "react-dom";
import '../App.css'
import { useDeletePostMutation } from "../features/post/postApis";
import UpdatePost from "../features/post/UpdatePost";
import CommentLists from "../features/comment/CommentList";


const updatePostEl = document.getElementById("edit-post");

const Post = ({ post }) => {
  const [deletePost] = useDeletePostMutation();
  const [editingPostId, setEditingPostId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const PickDeleteID = () => {
    console.log(post.id);
    deletePost(post.id);
  };

  const handleEdit = () => {
    console.log(post.id);
    setEditingPostId(post.id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingPostId(null);
  };

  return (
    <article className="card" key={post._id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Author: {post.author_id}</p>
      <div className="edit-delete">
        <FiEdit onClick={handleEdit} disabled={editingPostId !== null} />
        <MdDelete onClick={PickDeleteID} />
      </div>

      <div >
        {showModal &&
          createPortal(
            <UpdatePost post={post} closeModal={closeModal} />,
            updatePostEl
          )}
      </div>
      <CommentLists />
    </article>
  );
};

export default Post;
