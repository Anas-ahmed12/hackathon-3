// FeaturedProducts.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { AiOutlineZoomIn } from 'react-icons/ai';
import Link from 'next/link';
import ZoomModal from './ZoomModal';
import AddToCartButton from '../Cart/AddToCartButton';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../../wishlistRedux/wishlistSlice';
import WishlistButton from '../wishlist/wishListButton';
import { client } from '@/sanity/lib/client';

const FeaturedProducts = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [selectedColors, setSelectedColors] = useState<{ [key: string]: string }>({});
  const [zoomedProduct, setZoomedProduct] = useState<any>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product" && isFeaturedProduct == true]{
        _id,
        name,
        "imageUrl": image.asset->url,
        price,
        description,
        discountPercentage,
        stockLevel,
        category,
        colors
      }`;
      const fetchedProducts = await client.fetch(query);
      setProducts(fetchedProducts);

      const defaultColors = fetchedProducts.reduce((acc: any, product: any) => {
        acc[product._id] = product.colors?.[0] || '#000';
        return acc;
      }, {});
      setSelectedColors(defaultColors);
    };
    fetchProducts();
  }, []);

  return (
    <div className="py-16 px-4 max-w-[1920px] mx-auto">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#1A0B5B] dark:text-[#EAEAEA]">Featured Products</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
          <div key={product._id} className="w-64 p-4 bg-white shadow-lg rounded-lg group">
            <Link href={`/products/${product._id}`}>
              <div className="relative w-full h-64 cursor-pointer">
                <Image src={product.imageUrl} alt={product.name} fill className="object-cover rounded-t-lg" />
              </div>
            </Link>
            <h3 className="text-lg font-bold mt-2 text-center">{product.name}</h3>
            <p className="text-center text-gray-500">${product.price.toFixed(2)}</p>
            <div className="flex justify-center mt-2 gap-2">
              <AddToCartButton product={product} showText={false} />
              <WishlistButton product={product} showText={false} />
              <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300" onClick={() => setZoomedProduct(product)}>
                <AiOutlineZoomIn size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
      {zoomedProduct && <ZoomModal product={zoomedProduct} onClose={() => setZoomedProduct(null)} />}
    </div>
  );
};

export default FeaturedProducts;