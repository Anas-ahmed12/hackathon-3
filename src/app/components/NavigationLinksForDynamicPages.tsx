'use client'
import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Brands from "./Home/brands";
import RelatedProducts from "./RelatedProducts";


// const { title, price, colors, images } = product;
// const [mainImage, setMainImage] = useState(colors[0]);
// const [hoverStyle, setHoverStyle] = useState({ backgroundPosition: "center" });

const scrollToSection = (ref:any) => {
    if (ref.current) {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Ensures the section aligns at the top of the container
            inline: 'start', // Aligns horizontally at the start
        });
    }
};


// const { title, price, colors, images } = product;
// const [mainImage, setMainImage] = useState(colors[0]);
// const [hoverStyle, setHoverStyle] = useState({ backgroundPosition: "center" });
  const activeButtonClass = 'text-[#222585] underline underline-offset-4';
  const inactiveButtonClass = 'text-[#0d0f43]';
  
  
  
  export default function NavigationLinksForDynamicPages() {
    const [activeLink, setActiveLink] = useState("description");
    const btn1Ref = useRef(null);
    const btn2Ref = useRef(null);
    const btn3Ref = useRef(null);
    const btn4Ref = useRef(null);
    return (
    <>
    <div className="max-w-[1800px] mx-auto mt-16 p-3 bg-[#F9F8FE] dark:bg-[#0F0F0F]">

     <div className="max-w-[1100px] mx-auto mt-16 p-3 ">
    <div className="gap-8 mb-6 overflow-x-auto whitespace-nowrap hide-scrollbar hidden md:flex">
      {/* Navigation Links */}
      <button
        onClick={() => { setActiveLink("description"); scrollToSection(btn1Ref); }}
          className={`text-xl font-semibold ${activeLink === "description" ? "text-[#222585] dark:text-white underline underline-offset-4" : "text-[#0d0f43] dark:text-[#494a71]"}`}
      >
        Description
      </button>
      <button
        onClick={() => { setActiveLink("additionalInfo"); scrollToSection(btn2Ref); }}
        className={`text-xl font-semibold ${activeLink === "additionalInfo" ? "text-[#222585] dark:text-white underline underline-offset-4" : "text-[#0d0f43] dark:text-[#494a71]"}`}
      >
        Additional Info
      </button>
      <button
        onClick={() => { setActiveLink("reviews"); scrollToSection(btn3Ref); }}
        className={`text-xl font-semibold ${activeLink === "reviews" ? "text-[#222585] dark:text-white underline underline-offset-4" : "text-[#0d0f43] dark:text-[#494a71]"}`}
      >
        Reviews
      </button>
      <button
        onClick={() => { setActiveLink("video"); scrollToSection(btn4Ref); }}
        className={`text-xl font-semibold ${activeLink === "video" ? "text-[#222585] dark:text-white underline underline-offset-4" : "text-[#0d0f43] dark:text-[#494a71]"}`}
      >
        Video
      </button>
    </div>
  </div>

  {/* Content for Each Section */}
  <div className="max-w-[1100px] mx-auto p-3 pt-4">
    {activeLink === "description" && (
      <div ref={btn1Ref}>
        <h2 className="text-3xl font-bold text-[#151875] dark:text-white mt-6 py-3">Product Description</h2>
        <p className="mt-4 text-[17px] text-[#5155e2] dark:text-[#898cd2]">
          This chair is perfect for modern interiors and provides unmatched comfort. It is made with high-quality materials and is designed to last for many years. Whether you place it in your living room or office, it will add a touch of elegance and comfort.
        </p>
        <p className="mt-4 text-[17px] text-[#5155e2] dark:text-[#898cd2] ">
          sofa is a type of furniture that is designed to provide comfort and support for people sitting on it. It typically consists of a backrest, armrests, and a seat cushion, and is often upholstered in fabric or leather. Sofas are available in a wide range of styles and designs, from traditional to modern, and can be found in various settings such as living rooms, offices, and public spaces.
        </p>
        <h3 className="mt-6 text-3xl font-semibold text-[#151875] dark:text-white py-3">More Details</h3>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> The product is designed for maximum comfort and support.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> It is crafted from durable materials for long-lasting use.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
            <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> This chair features an ergonomic design to reduce strain on the body.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
            <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2" /> Available in multiple colors to match your interior decor.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2" /> Easy to assemble with included instructions.
        </p>
      </div>
    )}

    {activeLink === "additionalInfo" && (
      <div ref={btn2Ref}>
        <h2 className="text-3xl font-bold text-[#151875] dark:text-white mt-6 py-3">Additional Information</h2>
        <p className="mt-4 text-[17px] text-[#5155e2] dark:text-[#898cd2]">
          This product comes with a 1-year warranty. The warranty covers any manufacturing defects and malfunctions.
        </p>
        <h3 className="mt-6 text-3xl font-semibold text-[#151875] dark:text-white py-3">Warranty Details</h3>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> Covers repairs or replacement for defective parts.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> Warranty is valid for 12 months from the date of purchase.
        </p>
        <p className="mt-2 text-[17px] text-[#5155e2] dark:text-[#898cd2] py-2">
          <FontAwesomeIcon icon={faArrowRight} className="text-indigo-950 dark:text-[#898cd2] text-xl mr-2"/> To claim warranty, please retain the original receipt.
        </p>
      </div>
    )}

{activeLink === "reviews" && (
  <div ref={btn3Ref}>
    <h2 className="text-3xl font-bold text-[#151875] dark:text-white mt-6 py-3">Customer Reviews</h2>
    <p className="mt-4 text-[17px] text-[#5155e2] dark:text-[#898cd2]">Here&apos;s what our customers have to say:</p>

    {/* Reviews Grid */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Testimonials */}
      <div className="border p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-[#5155e2]">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="font-bold">John Doe</div>
        </div>
        <p>&quot;Great product, excellent service! Highly recommended.&quot;</p>
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-[#5155e2]">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="font-bold">Jane Smith</div>
        </div>
        <p>&quot;Amazing experience with this company. Will definitely buy again!&quot;</p>
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-[#5155e2]">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="font-bold">Alice Johnson</div>
        </div>
        <p>&quot;Outstanding customer support and top-notch quality.&quot;</p>
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-[#5155e2]">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="font-bold">Michael Brown</div>
        </div>
        <p>&quot;Impressed by the fast delivery and product exceeded expectations.&quot;</p>
      </div>

      <div className="border p-4 rounded-lg">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-[#5155e2]">⭐️⭐️⭐️⭐️⭐️</div>
          <div className="font-bold">Sarah Wilson</div>
        </div>
        <p>&quot;Couldn&apos;t be happier with my purchase. Thank you!&quot;</p>
      </div>
    </div>
  </div>
)}

{activeLink === "video" && (
  <div ref={btn4Ref}>
    <h2 className="text-3xl font-bold text-[#151875] dark:text-white mt-6 py-3">Product Video</h2>
    <p className="mt-4 text-[18px] py-2 text-[#5155e2] dark:text-[#898cd2]">
      Watch the product videos to learn more about how this chair can elevate your space.
    </p>

    {/* Videos */}
    <div className="grid gap-6">
  <video
    className="w-full"
    src="/videos/video01.mp4"
    autoPlay
    muted
    loop
    playsInline
  >
    Your browser does not support the video tag.
  </video>
  <video
    className="w-full"
    src="/videos/video02.mp4"
    autoPlay
    muted
    loop
    playsInline
  >
    Your browser does not support the video tag.
  </video>
</div>

  </div>
)}
    </div>

        </div>
    <h1 className="text-3xl mt-16 font-bold text-[#151875] dark:text-white mb-7 py-3 max-w-[1100px] mx-auto">Related Product</h1>
  <RelatedProducts/>

     {/* Related Product Section */}
    <Brands/> 
    </>
  );
}