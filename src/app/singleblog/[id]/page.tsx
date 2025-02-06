// app/singleblog/[id]/page.tsx
'use client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
// import { PencilIcon, CalendarIcon } from 'lucide-react';
import Image from 'next/image';
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PencilIcon, CalendarIcon, Facebook, Twitter, Instagram, ChevronLeft, ChevronRight, Video } from 'lucide-react'
import { Star } from 'lucide-react'
import RightBlog from '@/app/components/blog/rightBlog/rightBlog';
import { IoMail } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { FaRegComment } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import Brands from '@/app/components/Home/brands';
import Link from 'next/link';
import Breadcrumb from '@/app/components/BreadCrumb';

interface SingleBlogProps {
  params: { id: string };
}

interface BlogData {
  id: number;
  title: string;
  video: string;
  content: string;
  author: string;
  date: string;
  featuredImage: string;
  miniImage: string;
}

const products = [
  {
    id: 1,
    title: "Modern Sofa",
    discountPrice: "$29.99",
    originalPrice: "$39.99",
    rating: 4,
    image: "/blogp1.png"
  },{
    id: 2,
    title: "Modern Dinner Set",
    discountPrice: "$29.99",
    originalPrice: "$39.99",
    rating: 4,
    image: "/blogp2.png"
  },{
    id: 3,
    title: "Modern Shirt",
    discountPrice: "$29.99",
    originalPrice: "$39.99",
    rating: 4,
    image: "/blogp3.png"
  },{
    id: 4,
    title: "Modern Chair",
    discountPrice: "$29.99",
    originalPrice: "$39.99",
    rating: 4,
    image: "/blogp4.png"
  },
  // Add more products as needed
]

export default function SingleBlog({ params }: SingleBlogProps) {
  const { id } = params; // Get the dynamic id from the URL params
  const [blogData, setBlogData] = useState<BlogData | null>(null);

  useEffect(() => {
    if (id) {
      // Fetch the blog data based on the id (for demo purposes, this can be a static array or an API call)
      fetchBlogData(id);
    }
  }, [id]);

  const fetchBlogData = (id: string) => {
    // Replace with your actual data fetching logic, for now, we're using static data
    const fetchedData =[ {
      id: 1,
      video: "/videos/video01.mp4",
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      content: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      featuredImage: "/bp1.png",
      miniImage: "/blogp5.png",
    },{
      id: 2,
      video: "/videos/video02.mp4",
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      content: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      featuredImage: "/bp2.png",
      miniImage: "/blogp5.png",
    },{
      id: 3,
      video: "/videos/video01.mp4",
      title: "Sit nam congue feugiat nisl, mauris amet nisi. ",
      content: "this is a test blog post for testing lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at.",
      author: "Surf Auxion",
      date: "Aug 09 2020",
      featuredImage: "/bp3.png",
      miniImage: "/blogp5.png",
    },{
      id: 4,
      video: "/videos/video01.mp4",
      title:  'Top Essential trends in 2020',
      content: "Top Essential trends in 2020 are a great way to stay ahead of the curve and make sure you are always on the cutting edge of what's happening in your industry. Here are some of the most important trends to watch out for in 2020:",
      author: 'Saber Ali',
      date: '20 Aug 2020',
      featuredImage: '/b1.png',
      miniImage: "/blogp5.png",
    },{
      id: 5,
      video: "/videos/video01.mp4",
      title:  'Top Essential trends in 2021',
      content: "Top Essential trends in 2021 are a great way to stay ahead of the curve and make sure you are always on the cutting edge of what's happening in your industry. Here are some of the most important trends to watch out for in 2021:",
      author: 'Sara Ali',
      date: '15 Sept 2020',
      featuredImage: '/b2.png',
      miniImage: "/blogp5.png",
    },{
      id: 6,
      video: "/videos/video01.mp4",
      title:  'Top Essential trends in 2022',
      content: "Top Essential trends in 2022 are a great way to stay ahead of the curve and make sure you are always on the cutting edge of what's happening in your industry. Here are some of the most important trends to watch out for in 2022:",
      author: 'Ali Hassan',
      date: '5 Oct 2020',
      featuredImage: '/b3.png',
      miniImage: "/blogp5.png",
    },
  ]
   
  // Find the blog post by id
  const blogPost = fetchedData.find((post) => post.id === parseInt(id));

  // Set the state with the found blog post or null if not found
  setBlogData(blogPost || null);
};

  // Render a loading state if the data hasn't been loaded yet
  if (!blogData) {
    return <div>Loading...</div>;
  }

  return (
 <>
{/* Breadcrumb */}
<Breadcrumb
        mainHeading="Single Blog"
        miniHeadings={['Home', 'pages', 'Single Blog']}
      />
    <div className="container max-w-[1920px] mx-auto p- sm:p-0 sm:pl-11 md:pl-20  sm:py-8 ">

      <div className="lg:flex gap-8 w-full">
        {/* Left Section - Main Content */}
        <div className='w-full lg:w-[60%] p-7'>
          <div className="space-y-8">
            {/* Featured Image */}
            <div className="relative aspect-video w-full">
              <Image 
                src={blogData.featuredImage}
                alt="Blog featured image"
                className="rounded-lg object-cover"
                fill
              />
            </div>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-center gap-2">
                <div className="text-red-500">
                  <PencilIcon size={24} />
                </div>
                <span className="bg-red-200 px-6 py-1 rounded-sm text-black font-medium">
                  {blogData.author}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-yellow-500">
                  <CalendarIcon size={24} />
                </div>
                <span className="bg-yellow-200 px-6 py-1 rounded-sm text-black font-medium">
                  {blogData.date}
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="space-y-6">
              <h1 className="text-3xl font-semibold text-[#151875] dark:text-white">
                {blogData.title}
              </h1>
              <p className="text-[#8A8FB9] text-[15px]">
                {blogData.content}
              </p>
              <p className="text-[#8A8FB9] text-[15px]  ">
                {blogData.content}
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, ea. Numquam cumque placeat expedita eligendi quod? Expedita nobis odit similique laboriosam, ipsa praesentium iure in eius exercitationem reprehenderit saepe numquam.
              </p>
              <div className="flex items-start gap-4 bg-[#F7F8FB] dark:bg-white/10 p-6 rounded-lg">
                <div className="w-1 bg-red-500 h-full min-h-[100px] rounded-full" />
                <p className="text-[#8A8FB9] text-[16px] ">
                  &quot;{blogData.content} dhsdhsidu dsusi asdiusaid asdioa &quot;
                </p>
              </div>
            </div>

            {/* Video and Image Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="aspect-video relative">
              <video
    className="w-full"
    src={blogData.video}
    autoPlay
    muted
    loop
    playsInline
  >
    Your browser does not support the video tag.
  </video>
                {/* Video play button */}
              </div>
              <div className="aspect-video relative">
                <Image 
                  src={blogData.miniImage}
                  alt="Side image"
                  className="rounded-lg object-cover"
                  fill
                  />
                  </div>
              </div>
              <p className="text-[#8A8FB9] text-[15px] ">
                {blogData.content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores dicta accusantium aliquid repellendus quia quas minima 
              </p>

            {/* Product Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {products.map((product) => (
                <Card key={product.id} className="">
                  <div className="relative aspect-square mb-3 p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-sm mb-2 text-black p-2">{product.title}</h3>
                  <div className="md:flex gap-2 font-semibold items-center -ml-2 p-2 pl-3">
                    <span className="text-indigo-500  text-xs">{product.discountPrice}</span>
                    <span className="line-through text-pink-500 text-xs">
                      {product.originalPrice}
                    </span>
                    <div className="flex gap-1 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <Star
                      key={i}
                      size={9}
                      className={i < product.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                    </div>
                </Card>
              ))}
            </div>

            {/* Additional Content */}
            <div className="space-y-6">
              <p className="text-[#8A8FB9] text-[15px]">
             
             {blogData.content}Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores dicta accusantium aliquid repellendus quia quas minima 
              </p>
              <p className="text-[#8A8FB9] text-[15px]">
                {blogData.content}Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dolores dicta accusantium aliquid repellendus quia quas minima 
              </p>
            </div>

            {/* Social Media */}
            <div className="flex justify-center ">
            <div className='bg-indigo-500 text-white rounded-full p-2'>
              <GrFacebookOption className='text-lg'/>
          </div>
          <div className='bg-pink-500 text-white rounded-full p-2 mx-4'>
              <AiOutlineInstagram className='text-lg'/>
          </div>
          <div className='bg-blue-500 text-white rounded-full p-2'>
                <AiOutlineTwitter className='text-lg'/>
          </div>
            </div>

           
{/* Navigation */}<div className="w-full bg-[#F7F8FB] dark:bg-white/10 text-gray-500 p-4 rounded-lg flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
  {/* Previous Button */}
  <Button 
    variant="outline" 
    className="flex items-center bg-[#F7F8FB] dark:bg-white/10 gap-2 w-full sm:w-auto justify-start border-none rounded-md py-2 px-4"
  >
    <span className="text-lg">←</span>
    <span className="text-sm font-semibold">Previous Post</span>
  </Button>
  
  {/* Next Button */}
  <Button 
    variant="outline" 
    className="flex items-center bg-[#F7F8FB] dark:bg-white/10 gap-2 w-full sm:w-auto justify-end border-none rounded-md py-2 px-4"
  >
    <span className="text-sm font-semibold">Next Post</span>
    <span className="text-lg">→</span> 
  </Button>
</div>

            <div className="pl-10 p-7 py-24">
            <div className="space-y-8">
      {/* Recent Posts Cards */}
      <div className="space-y-4">
  {/* Card 1 */}
  <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-[#F7F8FB] dark:bg-white/10 shadow-xl shadow-gray-500 dark:shadow-white/10">
    <div className="relative w-full sm:w-28 h-28 mx-auto sm:mx-0">
      <Image
        src="/blogsm1.png"
        alt="Recent post"
        fill
        className="object-cover"
      />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start mt-3 sm:mt-5">
        <h3 className="font-semibold text-[#151875] dark:text-white mb-1">Sapien ac</h3>
        <p className="text-sm text-gray-500 dark:text-white/70 mb-2 sm:mb-0">Jan 09 2023</p>
      </div>
      <p className="text-sm text-gray-600 dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg bg-[#F7F8FB] dark:bg-white/10 shadow-md shadow-gray-500 dark:shadow-white/10">
    <div className="relative w-full sm:w-28 h-28 mx-auto sm:mx-0">
      <Image
        src="/blogsm2.png"
        alt="Recent post"
        fill
        className="object-cover"
      />
    </div>
    <div className="flex-1 text-center sm:text-left">
      <div className="flex flex-col sm:flex-row sm:justify-between items-center sm:items-start mt-3 sm:mt-5">
        <h3 className="font-semibold text-[#151875] dark:text-white mb-1">Augue cenas</h3>
        <p className="text-sm text-gray-500 dark:text-white/70 mb-2 sm:mb-0">Aug 18 2020</p>
      </div>
      <p className="text-sm text-gray-600 dark:text-white/70">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  </div>
</div>


    {/* Comment Form */}
<form className="space-y-6 py-20 px-4 sm:px-0">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {/* Name Input with Icon */}
    <div className="flex items-center p-3 w-auto border-[1px] border-[#151875]  rounded-md focus-within:ring-2 focus-within:ring-[#151875]">
      <span className="text-[#151875]  mr-2">
        <IoPersonOutline size={20} /> {/* Name Icon */}
      </span>
      <input
        type="text"
        placeholder="Your Name*"
        className="flex-1 focus:outline-none focus:ring-0 text-xs sm:text-base dark:bg-[#09090b]"
        required
      />
    </div>

    {/* Email Input with Icon */}
    <div className="flex items-center p-3 border-[1px] w-auto border-[#151875]  rounded-md focus-within:ring-2 focus-within:ring-[#151875]">
      <span className="text-[#151875]  mr-2">
        <IoMail size={16} /> {/* Email Icon */}
      </span>
      <input
        type="email"
        placeholder="Write Your Email*"
        className="flex-1 focus:outline-none focus:ring-0 text-xs dark:bg-[#09090b] sm:text-base dark:text-white/70"
        required
      />
    </div>
  </div>

  {/* Comment Textarea with Icon */}
  <div className="flex items-start p-3 w-auto border-[1px] border-[#151875] rounded-md focus-within:ring-2 focus-within:ring-[#151875]">
    <span className="text-[#151875] mr-2">
      <FaRegComment size={16} className="mt-1" /> {/* Comment Icon */}
    </span>
    <textarea
      placeholder="Write your comment*"
      rows={6}
      className="flex-1 focus:outline-none resize-none text-xs sm:text-base dark:bg-[#09090b]"
      required
    />
  </div>

  {/* Checkbox */}
  <div className="flex items-start gap-2">
    <input type="checkbox" id="saveInfo" className="mt-1" />
    <label htmlFor="saveInfo" className="text-sm text-gray-400">
      Save my name, email, and website in this browser for the next time I comment.
    </label>
  </div>

  {/* Continue Shopping Button */}
  <Button className="w-full bg-[#FB2E86] hover:bg-pink-600 ">
    Continue Shopping
  </Button>
</form>

    </div>


            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:mt-11 lg:w-[40%] xl:pl-20">
          {/* Placeholder for RightBlog component */}
         <RightBlog />
        </div>
      </div>
    </div>
      <Brands/>
 </>
  );
}
