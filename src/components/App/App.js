import React from 'react';
import { commentList } from './../../store/commentList';
import Comments from './../Comments/Comments';

const App = () => {
  return (
    <>
      <Comments comments={commentList} />
    </>
  );
};

export default App;
