import Particles from "./Particles/Particles";
import Hero from "./Hero";
import BirthdayCard from "./BirthdayCard";
import ImageCarousel from "./ImageCarousel";
import Message from "./Message";
import ShinyText from "./ShinyText/ShinyText";
import AnimatedSection from "./AnimatedSection";
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

      {/* Back button - at the end of page */}
      <section className="relative z-10 w-full py-24 flex items-center justify-center">
        <AnimatedSection
          className="flex flex-col items-center"
          threshold={0.1}
          delay={0.3}
        >
          <button
            onClick={onBack}
            className="px-8 py-4 bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-2xl text-white hover:bg-purple-700/50 transition-all hover:scale-105 group shadow-lg hover:shadow-purple-500/20"
            style={{ padding: "1rem 2rem", marginTop: "5rem" }}
          >
            <ShinyText
              text="Back Home 🏠✨"
              disabled={false}
              speed={3}
              className="text-xl md:text-2xl"
            />
          </button>
        </AnimatedSection>
      </section>
    </div>
  );
}
