import Particles from "./Particles/Particles";
import Hero from "./Hero";
import BirthdayCard from "./BirthdayCard";
import ImageCarousel from "./ImageCarousel";
import Message from "./Message";
import birthdayImages from "../utils/imageData";

interface MagicPageProps {
  onBack: () => void;
}

export default function MagicPage({ onBack }: MagicPageProps) {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "200vh", // Allow for multiple sections
        position: "relative",
        backgroundColor: "#060010",
      }}
    >
      {/* Particles background for entire page */}
      <div className="fixed inset-0 z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 w-full h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Birthday Card Section */}
      <section
        id="birthday-card"
        className="relative z-10 w-full min-h-screen flex items-center justify-center"
      >
        <BirthdayCard />
      </section>

      {/* Photo Gallery Section */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center">
        <ImageCarousel title="Emeka's Photo Gallery" images={birthdayImages} />
      </section>

      {/* Message Section */}
      <section className="relative z-10 w-full min-h-screen flex items-center justify-center">
        <Message />
      </section>

      {/* Back button - fixed position */}
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={onBack}
          className="px-8 py-4 bg-white/20 border border-white/30 rounded-2xl text-white hover:bg-white/30 transition-all hover:scale-105"
        >
          Back to the magic
        </button>
      </div>
    </div>
  );
}
