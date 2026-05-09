import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 180, damping: 22, mass: 0.6 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setHovering(
        target.closest("a, button, .project-card, [data-cursor-hover]") !== null
      );
    };

    const handleLeave = () => setVisible(false);

    document.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [visible, mouseX, mouseY]);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="custom-cursor"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          width: hovering ? 40 : 10,
          height: hovering ? 40 : 10,
          background: hovering ? "rgba(193, 68, 14, 0.15)" : "#C1440E",
          border: hovering ? "1.5px solid rgba(193, 68, 14, 0.5)" : "none",
          opacity: visible ? 1 : 0,
          transition: "width 0.3s ease, height 0.3s ease, background 0.3s ease, border 0.3s ease",
        }}
      />
    </>
  );
};

export default CustomCursor;
