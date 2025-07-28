import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import HomePage from "./components/HomePage";
import MagicPage from "./components/MagicPage";
import SphereWarpTransition from "./components/SphereWarpTransition";

function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "magic">("home");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [navigatingTo, setNavigatingTo] = useState<"home" | "magic">("magic");

  const handleNavigateToMagic = () => {
    setNavigatingTo("magic");
    setIsTransitioning(true);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    setCurrentPage(navigatingTo);
  };

  const handleBackToHome = () => {
    setNavigatingTo("home");
    setIsTransitioning(true);
  };

  return (
    <div className="min-h-screen bg-[#060010]">
      <AnimatePresence mode="wait">
        {currentPage === "home" && !isTransitioning && (
          <HomePage key="home" onNavigate={handleNavigateToMagic} />
        )}
        {currentPage === "magic" && (
          <MagicPage key="magic" onBack={handleBackToHome} />
        )}
      </AnimatePresence>

      <SphereWarpTransition
        isActive={isTransitioning}
        onComplete={handleTransitionComplete}
      />
    </div>
  );
}

export default App;
