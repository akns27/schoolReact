import React from "react";
import "./style.css";
import Comment from "./Comment.jsx";

const commentsData = [
  {
    author: "소마고",
    content: "안녕하세요 소마고 2학년 리액트 수강학생입니다.",
    likes: 10,
    dislikes: 20,
  },

  {
    author: "김민성",
    content: "안녕하세요. 김민성입니다.",
    likes: 13,
    dislikes: 17,
  },

  {
    author: "박다온",
    content: "리액트로 프로젝트 만들고 있습니다.",
    likes: 11,
    dislikes: 9,
  },
  
  {
    author: "백도준",
    content: "리액트 재미있어요.",
    likes: 15,
    dislikes: 8,
  },
];

function CommentList() {
  return (
    <div className="comment-list">
      {commentsData.map((comment) => (
        <Comment author={comment.author} comment={comment.content} likes={comment.likes} dislikes={comment.dislikes} />
      ))}
    </div>
  );
}

export default CommentList;
