'use client';

import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FiCheck } from 'react-icons/fi';
import Image from 'next/image';

const DiscountItem = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveSlide(index);
  };

  const slides = [
    {
      imageSrc: '/chair1.jpeg',
      imageAlt: 'Wood Chair',
      heading: '20% discount of all products',
      subHeading: 'Eams Sofa Compact',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl.',
      features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      imageSrc: '/chair2.jpeg',
      imageAlt: 'Plastic Chair',
      heading: '30% discount of all products',
      subHeading: 'Plastic Chair',
      description:
        'Sed consectetur, nisl nec ultricies lacinia, nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      features: ['Feature A', 'Feature B', 'Feature C', 'Feature D'],
    },
    {
      imageSrc: '/chair3.jpeg',
      imageAlt: 'Sofa Collection',
      heading: '40% discount of all products',
      subHeading: 'Sofa Collection',
      description:
        'Nisl nisl aliquet nisl, nec aliquam nisl nisl sit amet nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur, nisl nec ultricies lacinia.',
      features: ['Feature X', 'Feature Y', 'Feature Z', 'Feature W'],
    },
  ];

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center max-w-[1440px] mx-auto px-11">
      {/* Custom Navigation Section */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center mb-6">
        <h2 className="text-5xl font-bold text-[#151875] mb-2">
          Discount Item
        </h2>
        {/* Navigation Links */}
        <div className="space-x-6 flex items-center justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`text-lg font-semibold relative ${
                activeSlide === index
                  ? 'text-[#FB2E86] underline'
                  : 'text-black'
              }`}
            >
              {index === 0 ? 'Wood Chair' : index === 1 ? 'Plastic Chair' : 'Sofa Collection'}
              {/* Mini circle with red color on active button */}
              {activeSlide === index && (
                <span className="absolute -right-3 bottom-0 text-[#FB2E86] text-xl">
                  ⚬
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Section */}
      <div className="md:w-1/2 p-8">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          selectedItem={activeSlide}
          onChange={handleSlideChange}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
        >
          {slides.map((slide, index) => (
            <div key={index}>
              <div>
                <h3 className="text-3xl font-bold text-[#151875] mb-2 capitalize">
                  {slide.heading}
                </h3>
                <p className="text-[#FB2E86] text-lg font-semibold py-2 mb-4">
                  {slide.subHeading}
                </p>
                <p className="mb-6 text-gray-500">{slide.description}</p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {slide.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <FiCheck className="mr-2 text-gray-500" />
                      <span className="text-gray-500">{feature}</span>
                    </div>
                  ))}
                </div>
                <button className="bg-[#fb2e86] text-white py-3 px-7 rounded-md">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 p-8">
        <Image
          src={slides[activeSlide].imageSrc}
          alt={slides[activeSlide].imageAlt}
          width={700}
          height={597}
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default DiscountItem;
