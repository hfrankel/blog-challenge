import React from 'react';

const Comments = (props) => {
  const { comments } = props;
  const showComments = comments.map((comment) => {
    return (
      <ul key={Math.random()}>
        <li>{comment.name}</li>
        <li>{comment.email}</li>
        <li>{comment.body}</li>
      </ul>
    );
  });

  return <div>{showComments}</div>;
};

export default Comments;
