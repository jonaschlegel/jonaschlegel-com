'use client';
import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

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
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-[max(1.5rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-11 items-center justify-center rounded-full bg-primary-dark text-white shadow-md transition-colors hover:bg-primary-green md:right-8"
        >
          <MdArrowUpward size={20} aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
