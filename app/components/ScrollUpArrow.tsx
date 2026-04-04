'use client';
import { useEffect, useState } from 'react';

/** Floating button that scrolls the page back to the top when clicked. */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-[max(6rem,calc(1.5rem+env(safe-area-inset-bottom)))] right-4 md:right-10 text-primary-dark rounded-full border border-gray-400 hover:text-gray-500 active:text-gray-500 transition-all text-base z-10 w-11 h-11 flex items-center justify-center hover:border-gray-500 active:border-gray-500"
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
