'use client';

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const TopAnnouncementClient = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showCurrencies, setShowCurrencies] = useState(false);

  return (
    <>
      {/* Language Selector */}
      <div className="relative">
        <button
          className="flex items-center gap-1"
          onClick={() => setShowLanguages(!showLanguages)}
        >
          <span>English</span>
          <FaChevronDown className="text-xs" />
        </button>
        {showLanguages && (
          <div className="absolute top-full mt-1 bg-white text-gray-800 rounded shadow-lg z-50 min-w-[120px]">
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">Spanish</div>
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">French</div>
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">German</div>
          </div>
        )}
      </div>

      {/* Currency Selector */}
      <div className="relative">
        <button
          className="flex items-center gap-1"
          onClick={() => setShowCurrencies(!showCurrencies)}
        >
          <span>USD</span>
          <FaChevronDown className="text-xs" />
        </button>
        {showCurrencies && (
          <div className="absolute top-full mt-1 bg-white text-gray-800 rounded shadow-lg z-50 min-w-[120px]">
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">EUR</div>
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">GBP</div>
            <div className="py-1 px-3 hover:bg-gray-100 cursor-pointer">PKR</div>
          </div>
        )}
      </div>
    </>
  );
};

export default TopAnnouncementClient;
