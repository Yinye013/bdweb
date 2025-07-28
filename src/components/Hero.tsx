import SplitText from "./SplitText";
import ShinyText from "./ShinyText/ShinyText";
import AnimatedSection from "./AnimatedSection";

const Hero = () => {
  // const decorationRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatedSection
      className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-2 gap-16 mx-auto px-4 md:px-6"
      delay={0.1}
      threshold={0.05}
    >
      <div className="flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-10 p-4 md:p-10 lg:p-20 order-2 lg:order-1 col-span-1 lg:col-span-1">
        <SplitText
          text="Happy Birthday, Emeka!"
          className="text-[3rem] md:text-[3.5rem] lg:text-[5.6rem] text-white font-bold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />

        <ShinyText
          text="Biggest Boss. Odogwu. King of Doings. 🎉"
          disabled={false}
          speed={3}
          className="text-[1.5rem] md:text-[1.4rem] lg:text-[1.7rem] text-white/80 text-center md:text-left max-w-[90%] md:max-w-[85%] lg:max-w-none mx-auto lg:mx-0"
        />

        <div className="flex justify-center lg:justify-start w-full">
          <button
            className="px-6 md:px-8 py-3 md:py-4 bg-white/20 border border-white/30 text-[1.1rem] md:text-[1.4rem] rounded-2xl text-white hover:bg-white/30 transition-all hover:scale-105 inline-block w-fit cursor-pointer"
            onClick={() =>
              document
                .getElementById("birthday-card")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{ padding: "1rem 2rem", marginTop: "1rem" }}
          >
            <ShinyText
              text="Tap Here! 🎁"
              disabled={false}
              speed={3}
              className="text-2xl"
            />
          </button>
        </div>
      </div>
      <div className="w-full aspect-square overflow-hidden rounded-lg order-1 lg:order-2 max-w-md mx-auto lg:max-w-none hidden lg:block">
        <img
          src="/img/hero.jpeg"
          alt="Magical Scene"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </AnimatedSection>
  );
};

export default Hero;
