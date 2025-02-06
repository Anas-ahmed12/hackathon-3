'use client';
import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import { BsCartPlus } from "react-icons/bs";
import AddToCartButton from "../Cart/AddToCartButton";
import WishlistButton from "../wishlist/wishListButton";
import Image from "next/image";
const ZoomModal = ({ product, onClose }: { product: any; onClose: () => void }) => {

    const [selectedImage, setSelectedImage] = useState(product.image); // Use the image passed from 
    const [selectedColor, setSelectedColor] = useState(product.selectedColor); // Track the selected color
  
    const [isOpen, setIsOpen] = useState(true); // Set to true to open modal immediately
  const handleModalClose = (e: any) => {
    if (e.target.id === "overlay") {
      setIsOpen(false);
    }
  };

  
  // Update selectedImage when product changes
  useEffect(() => {
    setSelectedImage(product.image);
    setSelectedColor(product.selectedColor);
  }, [product]);


  return (
    <div>
    {/* Modal */}
    {isOpen && (
      <div
        id="overlay"
        onClick={handleModalClose}
        className="fixed inset-0 bg-black dark:bg-[#5c5b5b] bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm transition-opacity duration-300"
      >
        <div className="relative bg-white/50 dark:bg-[#0F0F0F] rounded-lg shadow-lg h-[70vh] w-[90vw] md:h-auto md:w-[80vw] sm:w-[95vw] sm:h-auto flex flex-col sm:flex-row overflow-hidden animate-scale-up overflow-y-auto sm:overflow-auto">
          {/* Left Section - Image (Top on small screens) */}
          <div className="w-full md:w-1/2 p-6 flex items-center justify-center bg-white/50 dark:bg-white/10">
            <Image
              src={selectedImage} // Use the selected image passed from FeaturedProduct
              alt={product.title}
              className="h-[90%] w-auto object-cover rounded-lg shadow-lg shadow-black"
            />
          </div>
  
          {/* Right Section - Details (Bottom on small screens) */}
          <div className="w-full md:w-1/2 p-8 flex flex-col justify-center items-center gap-6 bg-white/50 dark:bg-white/10">
            {/* Title */}
            <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-4 text-center">{product.title}</h2>
  
            {/* Price Section */}
            <div className="flex flex-col items-center mb-6">
              <p className="text-xl font-semibold text-gray-700">
                <span className="text-red-500 line-through mr-2">${product.price}</span>
                <span className="text-green-600">${product.discountedPrice}</span>
              </p>
            </div>
  
            {/* Color Options */}
            <div className="flex items-center gap-4 mb-8">
              {product.colors &&
                product.colors.map((color: any) => (
                  <button
                    key={color}
                    onClick={() => {
                      setSelectedImage(product.images[color]); // Update selected image based on color
                      setSelectedColor(color); // Update selected color
                    }}
                    className={`w-6 h-6 rounded-full border-2 transform transition-transform duration-200 ${
                      selectedColor === color
                        ? 'ring-2 ring-blue-500 scale-110'
                        : 'border-gray-300 hover:scale-105'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
            </div>
  
            {/* Buttons */}
            <div className="flex items-center gap-6">
              <button className="p-4 flex items-center gap-2 bg-[#2F1AC4] text-white font-medium rounded-lg shadow-md hover:bg-[#1A0E9A] transition-all transform hover:scale-105">
                <BsCartPlus size={20} />
                {/* Add to Cart */}
                <AddToCartButton
                  key={product.id}
                  product={{
                    ...product,
                    id: product.id.toString(),
                    name: product.title,
                    price: product.price,
                    imageUrl: selectedImage, // Use selectedImage directly
                    colors: product.colors,
                    // size: product.size
                  }}
                  showText={true}
                  selectedColor={selectedColor} // Pass the selected color directly
                />
              </button>
              {/* <button className="p-4 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all transform hover:scale-105">
                <AiOutlineHeart size={20} />
              </button> */}
<div className="p-5 bg-gray-200 text-gray-700 font-medium rounded-lg shadow-md hover:bg-red-500 hover:text-white transition-all transform hover:scale-105">
  {/* WishlistButton Component */}
  <WishlistButton
    showText={false}
    product={{
      id: product.id.toString(),
      title: product.title,
      price: product.price,
      imageUrl: product.images[selectedColor],
      name: product.title,
      colors: product.colors,
      size: product.size,
    }}
      selectedColor={product.id.toString()}
  />
</div>
            </div>
          </div>
  
          {/* Close Button */}
          <button
            onClick={() => {
              onClose(); // Call the onClose function passed from FeaturedProduct
              setIsOpen(false);
            }}
            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl transition-transform transform hover:scale-125 hover:rotate-90"
          >
            ✖
          </button>
        </div>
      </div>
    )}
  </div>
  
  
  
  );
};

export default ZoomModal;