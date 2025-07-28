import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { Variants } from "framer-motion";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
  delay?: number;
  once?: boolean;
};

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AnimatedSection = ({
  children,
  className = "",
  id,
  threshold = 0.2,
  delay = 0,
  once = true,
}: AnimatedSectionProps) => {
  // Use our custom hook to detect when element is in view
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    triggerOnce: once,
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isIntersecting ? "visible" : "hidden"}
      variants={fadeInVariants}
      transition={{
        delay: delay,
      }}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;
