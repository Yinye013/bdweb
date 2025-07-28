import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import AnimatedSection from "./AnimatedSection";

// Custom toggle hook
const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((prev) => !prev);
  return [state, toggle] as const;
};

const BirthdayCard = () => {
  const [flipped, toggleFlipped] = useToggle(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (flipped) {
      // Trigger confetti burst once
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [flipped]);

  return (
    <AnimatedSection
      id="birthday-card"
      className="min-h-[100vh] max-w-[1300px] w-full flex items-center justify-center text-white px-4"
      threshold={0.1}
      delay={0.3}
    >
      <div
        ref={containerRef}
        className="w-full max-w-md h-[320px] relative"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlipped()}
      >
        <motion.div
          className="relative w-full h-full cursor-pointer"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Front of the card */}
          <div
            className="absolute inset-0 bg-white text-black rounded-xl shadow-lg flex items-center justify-center"
            style={{ backfaceVisibility: "hidden", padding: "1rem 2rem" }}
          >
            <div className="text-center flex flex-col gap-7 p-6">
              <span className="text-6xl">🎉</span>
              <h2 className="text-4xl font-bold mb-2"> Tap to reveal!</h2>
              <p className="text-xl">
                Click this card to open Emeka's special birthday message.
              </p>
            </div>
          </div>

          {/* Back of the card */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-xl shadow-lg flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              padding: "1rem 2rem",
            }}
          >
            <div className="text-center flex flex-col gap-5 p-6">
              <h2 className="text-3xl font-bold mb-3">
                🎂 Happy Birthday, Biggest Boss!
              </h2>
              <p className="text-xl leading-relaxed">
                You are loved, celebrated, and deeply appreciated. May this new
                chapter overflow with joy, laughter, growth, and every kind of
                goodness life has to offer. 💖
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default BirthdayCard;
