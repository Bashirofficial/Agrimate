import React from 'react';
import Button from '../components/Button';

function BlogCard({ title, excerpt, imageUrl }) {
  return (
    <div className="relative bg-white shadow-lg rounded-lg p-6 mb-6 overflow-hidden" 
         style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
      <div className="relative z-10 p-4">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white">{excerpt}</p>
        <div className='mt-4'>
          <Button label='Read More' /> 
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
