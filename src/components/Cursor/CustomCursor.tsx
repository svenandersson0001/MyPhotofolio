'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      // Re-enable default cursor on mobile
      if (mobile) {
        document.body.style.cursor = 'auto';
      }
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      
      // Check if target exists and is an HTMLElement
      if (!target || !(target instanceof HTMLElement)) {
        return;
      }
      
      // Helper function to check if element or any parent matches selector
      // Uses parent traversal instead of closest() to avoid compatibility issues
      const hasParent = (element: HTMLElement, selector: string): boolean => {
        let current: HTMLElement | null = element;
        while (current) {
          try {
            // Check if element matches the selector
            if (current.matches && typeof current.matches === 'function' && current.matches(selector)) {
              return true;
            }
            // Check tag name for simple selectors
            if (selector === 'a' && current.tagName === 'A') {
              return true;
            }
            if (selector === 'button' && current.tagName === 'BUTTON') {
              return true;
            }
            // Check data attribute
            if (selector === '[data-cursor-hover]' && current.hasAttribute('data-cursor-hover')) {
              return true;
            }
          } catch (error) {
            // If matches fails, continue to parent
          }
          current = current.parentElement;
        }
        return false;
      };
      
      // Check if element or parent is interactive
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        hasParent(target, 'a') ||
        hasParent(target, 'button') ||
        hasParent(target, '[data-cursor-hover]')
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    if (!isMobile) {
      window.addEventListener('mousemove', updateMousePosition);
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);
    }

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Cursor Dot - No animation, follows cursor directly */}
      <div
        className="cursor-dot"
        style={{
          left: `${mousePosition.x - 4}px`,
          top: `${mousePosition.y - 4}px`,
          transform: `scale(${isHovering ? 1.5 : 1})`,
        }}
      />

      {/* Cursor Outline - Still animated */}
      <motion.div
        className="cursor-outline"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.5,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
}
