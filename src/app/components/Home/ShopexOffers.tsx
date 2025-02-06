'use client';

import Image from 'next/image';
import React, { useState } from 'react';

// Define the type for tilt styles
interface TiltStyle {
  transform: string;
  transition: string;
}

const ShopexOffers = () => {
  // Initialize an object to hold the tilt styles for each card
  const [tiltStyles, setTiltStyles] = useState<{ [key: number]: TiltStyle }>({}); // Use a record type

  const offers = [
    {
      id: 1,
      title: '24/7 Support',
      image: '/ofer1.png',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fugit iure.',
    },
    {
      id: 2,
      title: 'Free Shipping',
      image: '/offer2.png',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fugit iure',
    },
    {
      id: 3,
      title: 'Best Prices',
      image: '/offer3.png',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fugit iure',
    },
    {
      id: 4,
      title: 'Secure Payments',
      image: '/offer4.png',
      description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam fugit iure',
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    const { clientX, clientY } = e;
    const card = e.currentTarget;
    const { left, top, width, height } = card.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const deltaX = (clientX - centerX) / (width / 2); // Adjusted for better sensitivity
    const deltaY = (clientY - centerY) / (height / 2); // Adjusted for better sensitivity

    const rotateX = deltaY * -40; // Adjust the value for tilt sensitivity
    const rotateY = deltaX * 40; // Adjust the value for tilt sensitivity

    // Update the tilt style for the specific card
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out', // Smooth transition
        willChange: 'transform', // Optimize rendering
      },
    }));
  };

  const handleMouseLeave = (id: number) => {
    // Reset the tilt style for the specific card
    setTiltStyles((prevStyles) => ({
      ...prevStyles,
      [id]: {
        transform: 'perspective(1500px) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.3s ease-out', // Smooth transition back
        willChange: 'transform', // Optimize rendering
      },
    }));
  };

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4 sm:px-10">
      <h2 className="text-center text-[#151875] dark:text-[#EAEAEA] text-5xl font-bold mb-8">
        What Shopex Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="flex flex-col items-center justify-center p-6 mx-auto shadow-xl shadow-gray-300 dark:shadow-gray-700 rounded-lg h-[300px] w-full max-w-[250px] text-center bg-white dark:bg-[#708090]"
            onMouseMove={(e) => handleMouseMove(e, offer.id)}
            onMouseLeave={() => handleMouseLeave(offer.id)}
            style={tiltStyles[offer.id] || {}} // Apply the tilt effect style for the specific card
          >
            <div className="w-[65px] h-[65px] mb-4">
              <Image src={offer.image}
                alt={offer.title}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-[#151875] dark:text-white">{offer.title}</h3>
            <p className="text-sm text-gray-500 mt-2 dark:text-[#dad9d9]">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffers;