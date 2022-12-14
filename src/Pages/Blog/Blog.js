import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
  
  return (
    <div className='h-[400px] flex items-center justify-center'>
      <h2 className='text-4xl'>Coming soon...</h2>
    </div>
  );
};

export default Blog;