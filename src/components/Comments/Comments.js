import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './comments.css';

const Comments = (props) => {
  const { comments } = props;
  const renderComments = comments.map((comment) => {
    return (
      <ul key={uuidv4()}>
        <li className="comment">
          <span style={{ fontWeight: 'bold' }}>Name:</span> {comment.name}
        </li>
        <li className="comment">
          <span style={{ fontWeight: 'bold' }}>Email:</span> {comment.email}
        </li>
        <li className="comment">
          <span style={{ fontWeight: 'bold' }}>Comment:</span> {comment.body}
        </li>
      </ul>
    );
  });

  return (
    <div className="comment-container">
      <h3 className="comment-title">Comments</h3>
      <div className="comment-block">{renderComments}</div>
    </div>
  );
};

export default Comments;
