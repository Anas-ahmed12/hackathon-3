import Link from 'next/link';
import React from 'react';
import Breadcrumb from '../components/BreadCrumb';
import Image from 'next/image';

const Contact = () => {
  return (
    <>
          {/* Breadcrumb Section */}
      
        <Breadcrumb
        mainHeading="Contact us"
        miniHeadings={['Home', 'pages', 'Contact us']}
      />
   <div className="container mx-auto px-2 sm:px-4">
  {/* Top Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mt-8 sm:mt-10">
    {/* Left Section */}
    <div className="max-w-xs sm:max-w-md mx-auto text-center p-2 sm:p-4 md:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#151875] dark:text-white/70">
        Information About Us
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
        ultrices lorem, vitae aliquam dolor. Maecenas euismod libero vitae
        libero volutpat vitae eget odio interdum. Donec non facilisis libero,
        vitae lobortis felis. Quisque quam.
      </p>
      <div className="flex justify-center gap-2 sm:gap-3">
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-purple-500"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-pink-500"></div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-cyan-500"></div>
      </div>
    </div>

    {/* Right Section */}
    <div className="max-w-xs sm:max-w-md mx-auto text-center p-2 sm:p-4 md:text-left md:p-8">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-[#151875] dark:text-white/70">
        Contact Way
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-purple-500"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Tel: 8766 53 88 99</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-pink-500"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Support forum for over</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-orange-500"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">20 Margaret Street, London</p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-green-500"></div>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base">Free standard shipping</p>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-6 sm:mt-8 max-w-6xl mx-auto">
    {/* Left Side */}
    <div className="p-2 sm:p-4">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-[#151875] dark:text-white/70">
        Get in Touch
      </h2>
      <p className="text-gray-600 text-sm sm:text-base mb-4">
        If you have any questions, feel free to reach out to us!
      </p>
      <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row mb-4">
        <input
          type="text"
          placeholder="First Name"
          className="border border-[#151875] rounded p-2 text-sm sm:text-base flex-1"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-[#151875] rounded p-2 text-sm sm:text-base flex-1"
        />
      </div>
      <input
        type="email"
        placeholder="Email"
        className="border border-[#151875] rounded p-2 text-sm sm:text-base mb-4 w-full"
      />
      <textarea
        placeholder="Your Message"
        className="border border-[#151875] rounded p-2 text-sm sm:text-base mb-4 w-full h-24 sm:h-32"
      ></textarea>
      <button className="bg-[#F24E1E] text-white rounded p-2 text-sm sm:text-base w-full sm:w-auto">
        Send Mail
      </button>
    </div>

    {/* Right Side */}
    <div className="flex items-center justify-center">
      <Image
        src="/contact.png"
        alt="Contact"
        className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[500px] md:h-[500px]"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Contact;