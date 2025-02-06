import { FaCartPlus, FaHeart, FaSearchPlus } from 'react-icons/fa'; // Import icons from react-icons
import React, { useState } from 'react';
import Link from 'next/link';
import ZoomModal from './ZoomModal';
import AddToCartButton from '../Cart/AddToCartButton';
import WishlistButton from '../wishlist/wishListButton';
import Image from 'next/image';

const TrendingProduct = () => {
  const products = [
    {
      id: 1,
      title: 'Chair Modern',
      image: '/t1.png',
      discountedPrice: 150.0, // Use numbers for prices
      price: 200.0,
      slug: '1',
    },
    {
      id: 2,
      title: 'Chair Light',
      image: '/t2.png',
      discountedPrice: 120.0,
      price: 160.0,
      slug: '2',
    },
    {
      id: 3,
      title: 'Chair Office',
      image: '/t3.png',
      discountedPrice: 200.0,
      price: 250.0,
      slug: '3',
    },
    {
      id: 4,
      title: 'Chair Sofa',
      image: '/t4.png',
      discountedPrice: 180.0,
      price: 220.0,
      slug: '4',
    },
  ];

  const [zoomedProduct, setZoomedProduct] = useState<any>(null); // New state for zoomed product

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mt-11">
    <h2 className="text-center text-[#151875] dark:text-white text-3xl sm:text-4xl lg:text-[42px] font-bold mb-8">Trending Products</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full max-w-[270px] h-[360px] bg-white dark:bg-[#484848] rounded-lg shadow-lg overflow-hidden group mx-auto relative transition-transform duration-300 transform hover:scale-105"
        >
          {/* Image Section */}
          <div className="w-full h-[244px] bg-[#F5F6F8] dark:bg-[#484848] flex justify-center items-center">
            <Image
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>
  
          {/* Hover Icons */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 flex flex-col gap-4 items-center pb-20 pl-2 transition-opacity duration-300">
            <div className="w-7 h-7 bg-indigo-500 text-white rounded-full flex justify-center items-center group-hover:bg-indigo-700 transition-colors duration-300">
              <AddToCartButton
                product={{
                  id: product.id.toString(),
                  title: product.title,
                  price: product.price,
                  imageUrl: product.image,
                }}
                showText={false}
              />
            </div>
            <div className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white text-[#2F1AC4] transition-colors duration-100 ease-linear w-10 h-10 flex justify-center items-center">
  {/* WishlistButton Component */}
  <WishlistButton
    showText={false}
    product={{
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.image,
      name: product.title,
      // colors: product.colors,
      // size: product.size,
    }}
      // selectedColor={product.id}
  />
</div>            <div className="w-7 h-7 text-indigo-500 rounded-full flex justify-center items-center border-2 border-indigo-500 group-hover:border-indigo-700 group-hover:text-indigo-700 hover:scale-110 transition-all duration-300">
              <FaSearchPlus
                className="text-lg cursor-pointer"
                onClick={() => setZoomedProduct(product)}
              />
            </div>
          </div>
  
          {/* View Details Button */}
          <div className="relative flex justify-center">
            <Link href={`/trendingProduct/${product.id}`}>
              <button
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-[#15c662] hover:bg-purple-700 hover:text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 py-1 rounded shadow-md hover:shadow-lg"
              >
                View Details
              </button>
            </Link>
          </div>
  
          {/* Bottom Section */}
          <div className="p-4 flex flex-col justify-center items-center space-y-2 transition-all duration-300">
            <h3 className="text-[#151875] dark:text-white text-lg sm:text-xl font-semibold text-center ">
              {product.title}
            </h3>
            <div className="flex gap-2 items-center">
              <span className="text-[#151875] dark:text-white font-bold text-lg ">
                {`$${product.discountedPrice.toFixed(2)}`}
              </span>
              <span className="text-gray-500 dark:text-pink-500 line-through text-sm ">
                {`$${product.price.toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  
    {/* Zoom Modal */}
    {zoomedProduct && <ZoomModal product={zoomedProduct} onClose={() => setZoomedProduct(null)} />}
  </div>
  );
};

export default TrendingProduct;
