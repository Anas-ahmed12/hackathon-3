'use client'
import Link from 'next/link'; 
import Image from 'next/image';
import { useState } from 'react';
import Breadcrumb from '../BreadCrumb';

const About = ({ offers }: { offers: any }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
    
      {/* Breadcrumb */}
      <Breadcrumb
        mainHeading="About us"
        miniHeadings={['Home', 'pages', 'About us']}
      />

      {/* Main Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start py-11 max-w-[1200px] mx-auto px-4 lg:px-0">
  {/* Left Section - Image */}
  <div className="flex-1 flex mt-7 lg:mt-0 justify-center lg:justify-end">
    <Image
      src="/about.png"
      alt="About Us"
      className="w-full max-w-[400px] md:max-w-[500px] shadow-xl shadow-[#151875]"
    />
  </div>

  {/* Right Section - Text Content */}
  <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0 lg:ml-8">
    <h3 className="text-2xl md:text-3xl font-bold text-[#151875] dark:text-white capitalize">
      Know about our e-commerce business, history
    </h3>
    <p className="mt-4 text-gray-600 dark:text-white/70">
        {isExpanded
          ? 'Discover the Perfect Blend of Comfort and Elegance with Our Premium Sofa Collection , Step into a world where luxury meets comfort with our unrivaled collection of premium sofas, designed to elevate your living space into a haven of style and relaxation; meticulously crafted with the finest materials, innovative designs, and attention to detail, our furniture seamlessly blends timeless elegance with modern functionality, offering you the perfect centerpiece for your home—a space where memories are made, conversations flow effortlessly, and every moment is surrounded by unparalleled comfort and sophistication, making your home not just a place to live, but a statement of your refined taste and lifestyle.'
          : 'Discover the Perfect Blend of Comfort and Elegance with Our Premium Sofa Collection.'}
      </p>
      <button
        onClick={toggleExpand}
        className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-[#D43E1B]"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
  </div>
</div>


      {/* Offers Section */}
      <h2 className="text-center capitalize text-[#151875] dark:text-white mt-20 text-5xl font-bold mb-8">
      our features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-11 rounded-lg max-w-[1100px] mx-auto">
        {offers.map((offer: any) => (
          <div
            key={offer.id}
            className="flex flex-col items-center justify-center p-6 mx-auto shadow-xl shadow-gray-300 rounded-lg h-[300px] w-[250px] text-center bg-white dark:bg-[#454545] dark:shadow-gray-800"
                  >
            <div className="w-[65px] h-[65px] mb-4">
              <Image
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#151875] dark:text-white">{offer.title}</h3>
            <p className="text-sm text-gray-500 dark:text-white/80 mt-2">{offer.description}</p>
          </div>
        ))}
      </div>

    <div>
      {/* Client Testimonials Section */}
      <div className="text-center mt-10 py-11">
        <h3 className="text-3xl font-extrabold text-[#151875] dark:text-white">Our Clients Say</h3>
        <div className="flex justify-center mt-5">
          <Image
            src="/tes3.png"
            alt="Client 1"
            className={`w-16 h-16 ${selectedImage === 0 ? 'border-2 scale-125 ease-in-out duration-300 dark:border-white/70' : 'cursor-pointer'}`}
            onClick={() => setSelectedImage(0)}
          />
          <Image
            src="/tes1.png"
            alt="Client 2"
            className={`w-16 h-16 mx-4 ${selectedImage === 1 ? 'border-2 scale-125 ease-in-out duration-300 dark:border-white/70' : 'cursor-pointer'}`}
            onClick={() => setSelectedImage(1)}
          />
          <Image
            src="/tes2.png"
            alt="CImaglient 3"
            className={`w-16 h-16 ${selectedImage === 2 ? 'border-2  scale-125 ease-in-out duration-300 dark:border-white/70' : 'cursor-pointer'}`}
            onClick={() => setSelectedImage(2)}
          />
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-[#151875] dark:text-white">
            {selectedImage === 0 ? 'John Doe' : selectedImage === 1 ? 'Selena Gomez' : 'Alice Johnson'}
          </h4>
          <h5 className="text-sm text-gray-500 dark:text-white/70">
            {selectedImage === 0
              ? 'CEO, Company A'
              : selectedImage === 1
              ? 'Manager, Company B'
              : 'Designer, Company C'}
          </h5>
          <p className="mt-2 text-gray-600">
            {selectedImage === 0
              ? 'This product has changed the way we do business!'
              : selectedImage === 1
              ? 'An amazing experience, highly recommend!'
              : 'Fantastic quality and support andso dgsd dusgs lorem dhsdhsjdh dshds!'}
          </p>
        </div>
      </div>

      {/* Navigation Lines */}
      <div className="flex justify-center space-x-4 px-4 py-7  ">
        <div className={`h-1 w-[2vw] ${selectedImage === 0 ? 'bg-[#F24E1E]' : 'bg-gray-300'}`}></div>
        <div className={`h-1 w-[2vw] ${selectedImage === 1 ? 'bg-[#F24E1E]' : 'bg-gray-300'}`}></div>
        <div className={`h-1 w-[2vw] ${selectedImage === 2 ? 'bg-[#F24E1E]' : 'bg-gray-300'}`}></div>
      </div>
    </div>
    </div>
  );
};

export default About;