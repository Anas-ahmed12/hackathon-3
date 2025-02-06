import Link from 'next/link';
import Breadcrumb from './components/BreadCrumb';
import Brands from './components/Home/brands';
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div>
      {/* Breadcrumb Section */}
    <Breadcrumb
    mainHeading="404 Error"
    miniHeadings={['Home', 'pages', '404 Error']}
    />

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center max-w-[1500px] mx-auto py-16 space-y-2">
        {/* Top Image */}
        <Image
          src="/error.png" // Replace with your actual image path
          alt="404 Top"
          className="w-[60vw] h-auto mx-auto"
        />

      

        {/* Button */}
        <Link href="/">
          <button className="bg-[#F24E1E] mb-10 -mt-6 text-white py-3 px-8 rounded-lg shadow-md hover:bg-[#D32F2F]">
            Back to Home
          </button>
        </Link>

        {/* Bottom Image */}
       <Brands/>
      </div>
    </div>
  );
}
