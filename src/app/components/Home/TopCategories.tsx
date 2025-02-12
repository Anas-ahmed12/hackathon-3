'use client'
import Link from 'next/link';
import { useState, useEffect } from 'react';
import AddToCartButton from '../Cart/AddToCartButton';
import Image from 'next/image';

const TopCategories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Initially set to 4

  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsPerPage(2); // Set 2 items per page for smaller screens
      } else {
        setItemsPerPage(4); // Set 4 items per page for larger screens
      }
    };

    updateItemsPerPage(); // Set initial value
    window.addEventListener('resize', updateItemsPerPage);

    return () => {
      window.removeEventListener('resize', updateItemsPerPage);
    };
  }, []); // Empty dependency array ensures this runs only once after initial render

  const products = [
    { id: 1, image: '/cat1.png', title: 'Wood Chair', price: 19.99, slug: '1' },
    { id: 2, image: '/cat2.png', title: 'Plastic Chair', price: 29.99, slug: '2' },
    { id: 3, image: '/s8.jpeg', title: 'Luxury Sofa', price: 19.99, slug: '3' },
    { id: 4, image: '/s9.jpeg', title: 'Luxurious Sofa', price: 29.99, slug: '4' },
    { id: 5, image: '/s14.jpeg', title: 'Modern Sofa', price: 19.99, slug: '5' },
    { id: 6, image: '/s4.jpeg', title: 'Arm Sofa', price: 29.99, slug: '6' },
    { id: 7, image: '/s9.jpeg', title: 'Wood Sofa', price: 39.99, slug: '7' },
    { id: 8, image: '/s6.jpeg', title: 'Kids Sofa', price: 49.99, slug: '8' },
    { id: 9, image: '/s7.jpeg', title: 'Expensive Sofa', price: 59.99, slug: '9' },
    { id: 10, image: '/s10.jpeg', title: 'Demanded Sofa', price: 59.99, slug: '10' },
  ];

  const handleNavigationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-9 mt-20">
      <h2 className="text-center text-[#151875] dark:text-white text-5xl font-bold mb-8">
        Top Categories
      </h2>
      {/* Product Container */}
      <div className="flex justify-center overflow-x-auto scrollbar-hide px-4 py-4 smooth-scroll">
        {products
          .slice(activeIndex * itemsPerPage, (activeIndex + 1) * itemsPerPage)
          .map((product) => (
            <div
              key={product.id}
              className="relative mx-4 flex-shrink-0 w-[50%] sm:w-[50%] md:w-[22%] md:pl-8 lg:w-[22%] group"
            >
              {/* Product Image */}
              <div className="bg-[#F6F7FB] dark:bg-[#484848] rounded-full p-6 hover:shadow-7xl hover:shadow-indigo-500 dark:hover:shadow-indigo-950/50 shadow-[-19px_26px_10px_rgba(10,0,0,0.3)] transition-shadow duration-300 overflow-hidden group-hover:relative">
                <Link href={`/topCategories/${product.slug}`}>
                <Image
                  src={product.image}
                  alt={product.title}
                  className="rounded-2xl w-full h-auto object-cover"
                  width={100}
                  height={100}
                  
                  />
                  </Link>
                {/* Add to Cart Button - Visible on hover */}
                {/* <button "
                > */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white  rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[999]">

                <AddToCartButton
                product={{
                  id: product.id.toString(),
                  title: product.title,
                  price: product.price,
                  imageUrl: product.image,
                }}
                showText={true}
                />
                </div>
              </div>
                  {/* Add to Cart */}
                {/* </button> */}
              {/* Title and Price outside the card */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-[#151875]">{product.title}</h3>
                <p className="text-[#151875]">${product.price}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-16 space-x-2">
        {Array.from({ length: Math.ceil(products.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index}
              onClick={() => handleNavigationClick(index)}
              className={`w-4 h-4 rounded-full border-2 ${
                index === activeIndex
                  ? 'bg-red-500 border-red-500'
                  : 'border-red-500'
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default TopCategories;
