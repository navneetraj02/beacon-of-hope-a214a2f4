import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const FlashlightCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible]);

  return (
    <>
      {/* Dark overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[5] transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, rgba(0,0,0,0.3) 100%)`,
          opacity: isVisible ? 1 : 0,
        }}
      />
      
      {/* Flashlight glow effect */}
      <motion.div
        className="fixed pointer-events-none z-[6] hidden md:block"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          width: 300,
          height: 300,
          background: `radial-gradient(circle, hsl(40 90% 55% / 0.15) 0%, hsl(40 90% 55% / 0.08) 30%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(20px)",
        }}
      />
      
      {/* Inner bright core */}
      <motion.div
        className="fixed pointer-events-none z-[7] hidden md:block"
        animate={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 600,
          damping: 30,
          mass: 0.3,
        }}
        style={{
          width: 100,
          height: 100,
          background: `radial-gradient(circle, hsl(40 90% 55% / 0.25) 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(10px)",
        }}
      />
    </>
  );
};
