'use client';

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';
import Link from 'next/link';

const DiscountItem = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      // ishanco on eBay.jpeg
     imageSrc: '/sh02.png',
      imageAlt: 'Wood Chair',
      heading: '20% discount of all products',
      subHeading: 'Eams Sofa Compact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl.',
      features: ['it is a sofa , chair & so comfortable', 'it is a well designed sofa ', 'it is so light weight ', 'it is to be used in any room'],
      id: 1,
    },
    {
      imageSrc: '/s16.jpeg',
      imageAlt: 'Plastic Chair',
      heading: '30% discount of all products',
      subHeading: 'Plastic Chair',
      description:
        'Sed consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: ['Feature A is that it is a plastic chair ', 'Feature B is to be used in any room', 'Feature C is that it is very easy to move', 'Feature D is that it is a plastic chair'],
      id: 2,
    },
    {
      imageSrc: '/secondhero.png',
      imageAlt: 'Sofa Collection',
      heading: '40% discount of all products',
      subHeading: 'Sofa Collection',
      description:
        'Nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia.',
      features: ['Feature X is that it is a sofa collection', 'Feature Y is to be used in any room', 'Feature Z is that it is very easy to move', 'Feature W is that it is a sofa collection'],
    id: 3,
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-start justify-between max-w-[1340px] mt-20 py-7 mx-auto px-4">
    {/* Heading Section */}
    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center mb-10 px-4">
      <h2 className="text-3xl  sm:text-4xl md:text-5xl lg:text-6xl py-4 font-bold text-[#151875] dark:text-white mb-4">
        Discount Item
      </h2>
      <div className="space-x-4 sm:space-x-6 flex items-center justify-center z-[999] pb-9">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`text-sm sm:text-base z-[999] md:text-lg lg:text-xl font- relative ${
              activeSlide === index
                ? 'text-[#FB2E86] underline dark:text-red-500'
                : 'text-black/60 dark:text-white/60'
            }`}
          >
            {index === 0 ? 'Wood Chair' : index === 1 ? 'Plastic Chair' : 'Sofa Collection'}
            {activeSlide === index && (
              <span className="absolute w-2 md:mt-3 ml-1 h-2 rounded-full bg-[#FB2E86] z-[999] text-lg sm:text-xl" />
            )}
          </button>
        ))}
      </div>
    </div>
  
    {/* Carousel Section */}
    <div className="md:w-1/2 p-4 mt-28 md:mt-32 w-[100%] text-center md:text-left">
      <Carousel
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        selectedItem={activeSlide}
        onChange={handleSlideChange}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left mt-16">
            <h3 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#151875] dark:text-white mb-2 capitalize">
              {slide.heading}
            </h3>
            <p className="text-[#FB2E86] text-lg sm:text-xl md:text-2xl font-semibold py-2 mb-4">
              {slide.subHeading}
            </p>
            <p className="mb-6 text-gray-400 text-base sm:text-lg md:text-xl">{slide.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {slide.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <FiCheck className="mr-2 text-gray-700 text-2xl" />
                  <span className="text-gray-400 text-base sm:text-lg md:text-xl">{feature}</span>
                </div>
              ))}
            </div>
            <Link href={`/discountItem/${slide.id}`}>
              <button className="bg-[#FB2E86] text-white text-sm sm:text-base md:text-lg px-4 py-2 rounded-md">
                Shop Now
              </button>
            </Link>
          </div>
        ))}
      </Carousel>
    </div>
  
    {/* Image Section */}
    <div className="md:w-1/2 p-4 mt-11 md:mt-48">
      <Image
        src={slides[activeSlide].imageSrc}
        alt={slides[activeSlide].imageAlt}
        width={700}
        height={597}
        className="w-full h-full object-cover rounded-lg transition-all duration-500 ease-in-out"
      />
    </div>
  </div>
  
  
  );
};

export default DiscountItem;