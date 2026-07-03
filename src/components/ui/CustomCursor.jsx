import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' ||
          e.target.closest('a') || e.target.closest('button')) {
        if (ringRef.current) {
          ringRef.current.style.width = '60px';
          ringRef.current.style.height = '60px';
          ringRef.current.style.borderColor = 'rgba(139, 92, 246, 0.6)';
        }
        if (cursorRef.current) cursorRef.current.style.transform = 'scale(1.5)';
      } else {
        if (ringRef.current) {
          ringRef.current.style.width = '40px';
          ringRef.current.style.height = '40px';
          ringRef.current.style.borderColor = 'rgba(99, 102, 241, 0.4)';
        }
        if (cursorRef.current) cursorRef.current.style.transform = 'scale(1)';
      }
    };

    let animId;
    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;

      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX - 10 + 'px';
        cursorRef.current.style.top = mouseY - 10 + 'px';
      }
      if (ringRef.current) {
        ringRef.current.style.left = ringX - 20 + 'px';
        ringRef.current.style.top = ringY - 20 + 'px';
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
    </>
  );
}
