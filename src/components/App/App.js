import React from 'react';
import { commentList } from './../../store/commentList';
import Comments from './../Comments/Comments';
import Header from '../Header/Header';
import BlogImage from '../BlogImage/BlogImage';
import BlogText from '../BlogText/BlogText';

const App = () => {
  return (
    <>
      <Header />
      <BlogImage />
      <BlogText />
      <Comments comments={commentList} />
    </>
  );
};

export default App;
