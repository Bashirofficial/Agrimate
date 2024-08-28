import React from 'react'
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../constants";


function Resource() {
  return (
    <section >
      
      <div className=" container mx-auto px-4 bg-random1">
        <h2 className="text-4xl font-bold text-green-700 mb-8">Resources & Blog</h2>
        <p className="text-lg text-gray-600 mb-12">Welcome to the Agrimate Resources & Blog section! Here, you'll find a wealth of information on sustainable farming practices, the latest agricultural trends, expert advice, and inspiring success stories. Dive into our articles and empower your farming journey with knowledge and insights.</p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" >
          {blogPosts.map((post, index) => (
            <BlogCard key={index} title={post.title} excerpt={post.excerpt} imageUrl={post.imageUrl} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Resource