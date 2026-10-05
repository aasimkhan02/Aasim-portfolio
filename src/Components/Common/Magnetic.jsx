import React, { useEffect, useRef } from 'react';

const Magnetic = ({ children, strength = 0.3, scale = 1.05, className = '' }) => {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      if (window.innerWidth <= 768) return;
      const rect = element.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);

      element.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0) scale(${scale})`;
    };

    const handleMouseLeave = () => {
      element.style.transform = `translate3d(0px, 0px, 0) scale(1)`;
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, scale]);

  return (
    <div 
      ref={ref} 
      className={`magnetic-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        willChange: 'transform',
        transition: 'transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
      }}
    >
      {children}
    </div>
  );
};

export default Magnetic;
