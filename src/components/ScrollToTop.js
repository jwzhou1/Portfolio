import { useEffect } from "react";

function ScrollToTop() {
  useEffect(() => {
    // Add smooth scroll to top button functionality
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '↑';
    scrollToTopBtn.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      border: none;
      cursor: pointer;
      font-size: 20px;
      display: none;
      z-index: 1000;
      transition: all 0.3s ease;
    `;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
      } else {
        scrollToTopBtn.style.display = 'none';
      }
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    scrollToTopBtn.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', handleScroll);
    document.body.appendChild(scrollToTopBtn);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      scrollToTopBtn.removeEventListener('click', scrollToTop);
      if (document.body.contains(scrollToTopBtn)) {
        document.body.removeChild(scrollToTopBtn);
      }
    };
  }, []);

  return null;
}

export default ScrollToTop;
