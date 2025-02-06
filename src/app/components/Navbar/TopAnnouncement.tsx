// components/TopAnnouncement.tsx
import React from 'react';
import Link from 'next/link';
import { IoMail, IoCall, IoPersonOutline, IoHeartOutline } from 'react-icons/io5';
import CartIcon from '../Cart/CartIcon';
import TopAnnouncementClient from './TopAnnouncementClient';

const TopAnnouncement = () => {
  return (
    <div className="bg-[#7E33E0] dark:bg-[#29015d] text-white py-2 md:py-4 px-4 md:px-8 max-w-[1920px] mx-auto">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-wrap gap-4 items-center ml-2 lg:ml-11 ">
            <div className="flex items-center gap-2">
              <IoMail className="text-lg" />
              <span className="text-base">mhhasanul@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCall className="text-lg" />
              <span className="text-base">12345 67890</span>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Dropdowns */}
            <TopAnnouncementClient />

            {/* Login Link */}
            <Link href="/pages/sign-in" className="flex items-center gap-1 hover:text-gray-200">
              <span>Login</span>
              <IoPersonOutline />
            </Link>

            {/* Wishlist Link */}
            <Link href="/pages/wishlist" className="flex items-center gap-1 hover:text-gray-200">
              <span>Wishlist</span>
              <IoHeartOutline />
            </Link>

            {/* Cart Link */}
            <Link href="/pages/cart" className="flex items-center gap-1 hover:text-gray-200 ml-2">
              <CartIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAnnouncement;
