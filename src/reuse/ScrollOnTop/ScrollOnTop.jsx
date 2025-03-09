import { useEffect, useState } from 'react';
import { BiArrowFromBottom } from 'react-icons/bi';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  });
  return (
    <>
      {isVisible && (
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }} className="fixed bottom-2 right-2">
          <button style={{width: '50px', height: '50px', border: '3px solid black', borderRadius: '50%', backgroundColor: '#E7EBFC'}} type="button" onClick={scrollToTop} className="scroll-on-top">
            <BiArrowFromBottom style={{width: '40px', height: '40px'}} className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      )}
    </>
  );
};
