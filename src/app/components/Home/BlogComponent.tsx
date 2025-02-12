'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCalendarAlt, FaPenNib } from 'react-icons/fa';

const BlogComponent = () => {
  const blogPosts = [
    {
      id: 4,
      image: '/b1.png',
      author: 'Saber Ali',
      date: '20 Aug 2020',
      title: 'Top Essential trends in 2020',
      paragraph: 'Top Essential trends in 2020 are a great way to stay ahead of the curve and make sure & always on the cutting edge of 2020:',
    },
    {
      id: 5,
      image: '/b2.png',
      author: 'Sara Ali',
      date: '15 Sept 2020',
      title: 'Top Essential trends in 2021',
      paragraph: 'Top Essential trends in 2021 are a great way to stay ahead of the curve and make sure always on the cutting edge of 2021:',
    },
    {
      id: 6,
      image: '/b3.png',
      author: 'Ali Hassan',
      date: '5 Oct 2020',
      title: 'Top Essential trends in 2022',
      paragraph: 'Top Essential trends in 2022 are a great way to stay ahead of the curve and make sure you are always on the cutting edge of'
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-11">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#1A0B5B] dark:text-white">Latest Blog</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-[#4a4a4a] rounded-lg shadow-lg overflow-hidden group">
            {/* Top Section (Image) */}
            <div className="relative">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-56 object-cover"
                width={500}
                height={300}
              />
            </div>
            
            {/* Bottom Section (Author, Date, Title, Paragraph, Read More) */}
            <div className="p-4">
          {/* Author and Date */}
<div className="flex items-center space-x-4 text-sm text-[#151875] dark:text-white/70 mb-4">
  {/* Author */}
  <span className="flex items-center space-x-1">
    <FaPenNib  className="text-red-600" /> {/* Red pen nib icon */}
    <span>{post.author}</span>
  </span>
  
  {/* Date */}
  <span className="flex items-center space-x-1 text-[#151875] dark:text-white/70">
    <FaCalendarAlt className="text-yellow-500" /> {/* Yellow calendar icon */}
    <span>{post.date}</span>
  </span>
</div>

              
              {/* Blog Title */}
              <h3 className="text-xl font-semibold text-[#151875] dark:text-white group-hover:text-[#FB2E86] mb-2">{post.title}</h3>
              
              {/* Paragraph */}
              <p className="text-gray-600 dark:text-white/60 mb-4">{post.paragraph}</p>
              
              {/* Read More Link */}
              <Link
                href={`/singleblog/${post.id}`}
                className="text-[#151875] dark:text-[#c6c5c8] hover:text-[#FB2E86] font-semibold underline group-hover:text-[#FB2E86]"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
