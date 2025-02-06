// components/ScrollToTop.tsx

'use client';

import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;

    // If we're already at the top, no need to continue
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 19);
    }
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-8 bottom-8 bg-[#1A0B5B] dark:bg-[#1a1a1a] dark:hover:bg-[#e10967] hover:bg-[#fb2e86] opacity-100 text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-700 z-[999]"
    >
      <FiArrowUp size={24} />
    </button>
  );
};

export default ScrollToTop;
