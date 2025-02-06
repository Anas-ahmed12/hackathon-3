"use client";

import { useState, useEffect } from "react";
// import { sanityClient } from "@/lib/sanityClient";  // Import Sanity Client
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ZoomModal from "./ZoomModal";
import AddToCartButton from "../Cart/AddToCartButton";
import WishlistButton from "../wishlist/wishListButton";
import { client } from "@/sanity/lib/client";
import Image from "next/image";

const filters = ["New Arrival", "Best Seller", "Featured", "Special Offer"];

const LatestProduct = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [zoomedProduct, setZoomedProduct] = useState<any>(null);

  // 🛒 Fetch Products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][4..9]{
        _id,
        name,
        "imageUrl": image.asset->url,
        price,
        description,
        discountPercentage,
        isFeaturedProduct,
        stockLevel,
        category
      }`;

      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);
      setFilteredProducts(fetchedProducts);
    };

    fetchProducts();
  }, []);

  // 🏷️ Filter Products Based on Selected Category
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setFilteredProducts(products.filter((product) => product.category === filter));
  };

  return (
    <div className="py-10 max-w-[1440px] mx-auto px-4 sm:px-10 overflow-hidden">
      <h2 className="text-center text-[#151875] dark:text-[#EAEAEA] text-5xl font-bold mb-5">
        Latest Products
      </h2>

      {/* Filters */}
      <div className="flex justify-center space-x-4 md:space-x-6 mb-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilterChange(filter)}
            className={`px-4 py-2 rounded ${
              activeFilter === filter
                ? "text-red-500 underline underline-offset-2 dark:text-red-500"
                : "text-black dark:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="rounded-lg shadow-md w-full h-[356px] relative overflow-hidden group">
            {/* Product Image */}
            <div className="w-full h-[269px] mx-auto relative bg-[#F7F7F7] dark:bg-[#484848] hover:cursor-pointer">
              <Link href={`/latestProduct/${product._id}`}>
                <Image src={product.imageUrl} alt={product.name} className="w-full h-full object-scale-down" />
              </Link>

              {/* Hover Icons */}
              <div className="absolute left-4 bottom-4 hidden group-hover:flex flex-col items-center gap-4 transition duration-300">
                <div className="text-[#3F509E] bg-[#F7F7F7] px-1 py-1 hover:scale-105 rounded-full shadow-lg hover:bg-[#3F509E] hover:text-white transition-colors duration-100 ease-linear">
                  <AddToCartButton
                    key={product._id}
                    product={{
                      id: product._id,
                      name: product.name,
                      price: product.price,
                      imageUrl: product.imageUrl,
                    }}
                  />
                </div>

                <div className="p-2 bg-white rounded-full hover:bg-[#2F1AC4] hover:text-white text-[#2F1AC4] transition-colors duration-100 ease-linear w-10 h-10 flex justify-center items-center">
                  <WishlistButton
                    showText={false}
                    product={{
                      id: product._id,
                      title: product.name,
                      price: product.price,
                      imageUrl: product.imageUrl,
                    }}
                  />
                </div>

                <button className="text-[#3F509E] hover:text-white hover:bg-[#3F509E] hover:rounded-full hover:scale-110 transition-all duration-300 bg-transparent px-2 py-2 h-11 w-11 flex items-center justify-center">
                  <FontAwesomeIcon icon={faSearch} className="w-5 h-5" onClick={() => setZoomedProduct(product)} />
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="p-4 py-7 flex justify-between items-center space-x-3">
              <h3 className="text-left text-lg font-semibold">{product.name}</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-[#151875] dark:text-white/80 font-bold">${product.price}</span>
                {product.discountPercentage && (
                  <span className="text-[#FB2448] line-through text-sm">
                    ${((product.price * (100 + product.discountPercentage)) / 100).toFixed(2)}
                  </span>
                )}
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

export default LatestProduct;
