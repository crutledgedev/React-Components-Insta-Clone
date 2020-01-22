// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log(props.comments);

  return (
    <div>
      {props.comments.map(comment => {
        return (<Comment comment={comment}/>)
      })}
      <CommentInput commentInput={props.comments}/>
    </div>
  );
};

export default CommentSection;
