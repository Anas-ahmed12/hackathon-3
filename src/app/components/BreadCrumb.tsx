import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  mainHeading: string;
  miniHeadings?: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ mainHeading, miniHeadings = [] }) => {
  return (
    <div className="max-w-[1920px] mx-auto h-[286px] bg-[#F6F5FF] dark:bg-[#1a1a1a] flex flex-col justify-center pl-9 sm:pl-24 md:pl-36 lg:pl-48">
      <h1 className="text-[#101750] dark:text-white text-[36px] lg:text-[42px] font-bold leading-[42.19px] mb-3">
        {mainHeading}
      </h1>
      {miniHeadings.length > 0 && (
        <div className="flex items-center gap-2">
          {miniHeadings.map((heading, index) => (
            <React.Fragment key={index}>
              {index === 0 ? (
                // First mini heading is always Home
                <Link href="/" className="font-medium text-[16px] leading-[19.2px] text-black dark:text-white/80">
                  Home
                </Link>
              ) : index === 1 ? (
                // Second mini heading is dynamic with href based on the heading
                <Link href={`/${heading}`} className="font-medium text-[16px] leading-[19.2px] text-black dark:text-white/80">
                  {heading}
                </Link>
              ) : (
                // Last mini heading has color #FB2E86
                <span className="font-medium text-[16px] leading-[19.2px] text-[#FB2E86] dark:text-[#e10967]">
                  {heading}
                </span>
              )}
              {index < miniHeadings.length - 1 && (
                <span className="font-medium text-[16px] text-black rounded-full">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default Breadcrumb;
