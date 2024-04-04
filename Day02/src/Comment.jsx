import React, { useState } from "react";
import "./style.css";

function Comment({ author, comment, likes, dislikes }) {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);

  const handleLikeClick = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislikeClick = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="wrapper">
      <img
        className="image"
        src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
      />
      <div className="container">
        <span
          className="nameText"
          style={{ color: "skyblue", fontWeight: "bold" }}
        > {author}</span>
        <span>  
          <div className="reaction">
            <button onClick={handleLikeClick}>👍{likeCount}</button>
            <button onClick={handleDislikeClick}>👎{dislikeCount}</button>
          </div>
        </span>
        <span className="CommentText">{comment}</span>
      </div>
    </div>
  );
}

export default Comment;
