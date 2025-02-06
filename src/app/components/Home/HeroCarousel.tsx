'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CarouselSlide {
  id: number;
  mainImage: string;
  lampImage: string;
  miniHeading: string;
  mainHeading: string;
  description: string;
  discount?: string;
  slug: string;
}

const carouselData: CarouselSlide[] = [
  {
    id: 1,
    mainImage: '/sofarealenhance.png',
    lampImage: '/lampreal.png',
    miniHeading: 'Best Furniture For Your Castle....',
    mainHeading: 'New Furniture Collection Trends in 2024',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.',
    // discount: '50% off'
    slug: '1'
  },
  {
    id: 2,
    mainImage: '/s20bgr.png',
    lampImage: '/newlamp.png',
    miniHeading: 'Exclusive Furniture Offers',
    mainHeading: 'Modern Design Collection 2024',
    description: 'Discover our unique collection that brings comfort and style to your home.',
    discount: '50% off',
    slug: '2'
  },
  {
    id: 3,
    mainImage: '/s10r.png',
    lampImage: '/lampreal.png',
    miniHeading: 'Limited Time Deal',
    mainHeading: 'Exclusive Designer Collection',
    description: 'Transform your living space with our premium furniture selection.',
    discount: '20% off',
    slug: '3'
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <div className="gradient-bg-class bg-[#F2F0FF] dark:bg-[#0F0F0F] h-[1000px] md:h-auto lg:h-auto relative max-w-[1920px] mx-auto overflow-hidden py- ">
    <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center px-4 lg:px-8 contrast-125">
      {/* Left Section */}
      <div className="w-full lg:w-[60%] relative z-10 space-y-3 space-x-16 text-center lg:text-left lg:ml-11">
        {/* Lamp Image */}
        <div className="absolute -top-11 md:-top-20 lg:-top-[200px] -left-32 w-72 h-72 hidden lg:block">
          <Image
            src={carouselData[currentSlide].lampImage}
            alt="Lamp decoration"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>
  
        {/* Text Content */}
        <div className="space-y-3 w-fit pr-16  md:pl-12 lg:pl-0 lg:pr-0 pt-9 lg:-mr-11">
          <p className="text-[#fb2e86] text-base lg:text-lg font-bold">
            {carouselData[currentSlide].miniHeading}
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1A0B5B] dark:text-[#F2F0FF] leading-tight">
            {carouselData[currentSlide].mainHeading}
          </h1>
          <p className="text-[#8A8FB9] max-w-md">
            {carouselData[currentSlide].description}
          </p>
          <Link href={`/topProducts/${carouselData[currentSlide].slug}`}>
            <button className="bg-[#FB2E86] text-white px-8 py-3 mt-3 rounded-md hover:bg-[#e91e63] transition-colors"
            >
              Shop Now
            </button>
          </Link>
            
        </div>
      </div>
  
      {/* Right Section */}
      <div className="w-full lg:w-1/2 relative h-full flex items-center justify-center py-11">
        <div className="relative w-full h-[400px] lg:h-[600px]">
          {/* Image Container with Custom Shadow */}
          <div className="absolute inset-0 custom-shadow z-10 lg:h-[500px] lg:mt-10 rounded-lg">
            <Image
              src={carouselData[currentSlide].mainImage}
              alt="Furniture"
              fill
              className="object-contain rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  
    {/* Carousel Navigation */}
    <div className="absolute bottom-10 left-1/2  -mb-6  pt-7 transform -translate-x-1/2 flex gap-4 lg:p-5 z-[9]">
      {carouselData.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-4 h-4 transform rotate-45 transition-all duration-300 ${
            currentSlide === index
              ? 'bg-[#fb2e86]'
              : 'border-2 border-[#fb2e86]'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>
    </>
  );
};

export default HeroCarousel;
