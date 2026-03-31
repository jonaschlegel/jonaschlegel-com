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
          className="fixed bottom-24 right-10 text-primary-dark rounded-full border border-gray-400 hover:text-gray-500 transition-all text-xl z-10 w-6 h-6 hover:border-gray-500"
        >
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
