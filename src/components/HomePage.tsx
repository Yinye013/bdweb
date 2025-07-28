import { motion } from "framer-motion";
import ShinyText from "./ShinyText/ShinyText";
import BouncingSphereScene from "./BouncingSphereScene";

interface HomePageProps {
  onNavigate: () => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <motion.div
      className="text-4xl flex flex-col gap-10 justify-center items-center h-screen bg-[#060010]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <BouncingSphereScene />
      <div onClick={onNavigate} className="cursor-pointer">
        <ShinyText
          text="Click to see the magic"
          disabled={false}
          speed={3}
          className="custom-class uppercase"
        />
      </div>
    </motion.div>
  );
}
