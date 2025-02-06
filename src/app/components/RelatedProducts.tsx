export default function RelatedProducts() {
    return (
        <div className="grid grid-cols-1 max-w-[1100px] mx-auto sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Product 1 */}
        <div className="flex flex-col">
          <div
            className="w-full h-[340px] bg-cover bg-center rounded-md dark:bg-gray-700"
            style={{ backgroundImage: `url('/rp1.png')` }}
          ></div>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-base font-semibold">Men Fashion</h4>
            {/* Rating */}
            <div className="flex items-center justify-end flex-wrap">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          {/* Price */}
          <div className="mt-2">
            <span className="text-lg font-bold text-[#151875] dark:text-white/70">$199.99</span>
          </div>
        </div>
      
        {/* Product 2 */}
        <div className="flex flex-col">
          <div
            className="w-full h-[340px] bg-cover bg-center rounded-md dark:bg-gray-700"
            style={{ backgroundImage: `url('/rp4.png')` }}
          ></div>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-base font-semibold">Women Fashion</h4>
            {/* Rating */}
            <div className="flex items-center justify-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          {/* Price */}
          <div className="mt-2">
            <span className="text-lg font-bold text-[#151875] dark:text-white/70">$499.99</span>
          </div>
        </div>
      
        {/* Product 3 */}
        <div className="flex flex-col">
          <div
            className="w-full h-[340px] bg-cover bg-center rounded-md dark:bg-gray-700"
            style={{ backgroundImage: `url('/rp3.png')` }}
          ></div>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-base font-semibold">Wolx Dummy Fashion</h4>
            {/* Rating */}
            <div className="flex items-center justify-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          {/* Price */}
          <div className="mt-2">
            <span className="text-lg font-bold text-[#151875] dark:text-white/70">$19.99</span>
          </div>
        </div>
      
        {/* Product 4 */}
        <div className="flex flex-col">
          <div
            className="w-full h-[340px] bg-cover bg-center rounded-md dark:bg-gray-700"
            style={{ backgroundImage: `url('/rp2.png')` }}
          ></div>
          <div className="flex justify-between items-center mt-3">
            <h4 className="text-base font-semibold">Top Wall Digital Clock</h4>
            {/* Rating */}
            <div className="flex items-center justify-end">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-500">
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          {/* Price */}
          <div className="mt-2">
            <span className="text-lg font-bold text-[#151875] dark:text-white/70">$19.99</span>
          </div>
        </div>
      </div>
      
    )
}