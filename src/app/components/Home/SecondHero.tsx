'use client';

import React from 'react';
import AddToCartButton from '../Cart/AddToCartButton';
import Image from 'next/image';

const SecondHero = () => {
  return (
    <div className="bg-[#F1F0FF] dark:bg-[#484848] max-w-[1920px] mx-auto py-20 w-full">
  <div className="max-w-[1050px] mx-auto flex flex-col md:flex-row lg:flex-row items-center justify-between space-y-10 md:space-y-0 lg:space-y-0 md:space-x-10 lg:space-x-28 ">
    {/* Left Side (Image and Text) */}
    <div className="w-full max-w-[500px] h-[500px] md:h-[400px] lg:h-[500px]">
      <Image
        src="/secondhero.png" 
        alt="Sofa"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Right Side (Text) */}
    <div className="flex flex-col items-start ml-0 md:ml-10 lg:ml-16 p-7 sm:p-4">
      <h2 className="text-[#151875] dark:text-white text-2xl md:text-3xl lg:text-5xl -mt-16 font-bold mb-6">
        Unique Features of Latest & Trending Products
      </h2>

      {/* Three Paragraphs with Circles */}
      <div className="space-y-6 ">
        <div className="flex items-center">
          <div className="w-4 h-4 p-2 rounded-full bg-red-500 mr-4"></div>
          <p className="text-sm md:text-base text-gray-700 dark:text-[#EAEAEA]">All frames constructed with hardwood solids and laminates</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 p-2 rounded-full bg-indigo-500 mr-4"></div>
          <p className="text-sm md:text-base text-gray-700 dark:text-[#EAEAEA]">Reinforced with doubles, glue, screw-on brads nail-corner blocks and machine nails.</p>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 p-2 rounded-full bg-green-500 mr-4"></div>
          <p className="text-sm md:text-base text-gray-700 dark:text-[#EAEAEA]">Arms, backs, and seats are structured with solid wood.</p>
        </div>
      </div>

      {/* Add to Cart Button */}
        {/* <div className="flex items-center mt-6"> */}
        {/* <button className="bg-[#ef415e] text-white px-6 py-2"> */}
         {/* Add to Cart Button */}
      <div className="flex items-center mt-6">
      <div className="bg-[#ef415e] text-white w-[156px] h-[45px] flex items-center hover:bg-indigo-700 hover:text-white transition-all duration-300 hover:scale-105 justify-center">
    <AddToCartButton  
      key={1}  
      product={{ 
        id: '1',
        title: 'B&B Italian Sofa', 
        price: 32.00, 
        imageUrl: '/secondhero.png',
      }} 
      showText={true}  // Pass prop to show text
    />
  </div>
        <div className="ml-4 text-sm text-[#151875] dark:text-white font-semibold">
          <p>B&B Italian Sofa</p>
          <p className="text-base font-medium">$32.00</p>
      </div>
        </div>
      </div>
    </div>
  </div>  
  ); // Ensure this closing parenthesis is correctly placed
}; 
export default SecondHero;
