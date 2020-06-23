import React from 'react';
import blogImg from './blog.jpg';
import './blogImage.css';

const BlogImage = () => {
  return (
    <div className="blog-image">
      <img src={blogImg} height="200px" width="300px" alt="laptop at desk" />
    </div>
  );
};

export default BlogImage;
