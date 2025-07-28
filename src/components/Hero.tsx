import SplitText from "./SplitText";

const Hero = () => {
  // const decorationRef = useRef<HTMLDivElement>(null);

  return (
    <div className="w-full max-w-[1300px] grid grid-cols-2 gap-4 mx-auto px-4">
      <div className="flex flex-col gap-10 p-20">
        <SplitText
          text="Happy Birthday, Emeka!"
          className="text-[5.6rem] text-white font-bold"
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

        <p className="text-[1.7rem] pl-4 text-white/80">
          Happy birthday to someone truly special. Your kindness, strength, and
          beautiful spirit light up the lives of everyone around you. May this
          year bring you endless joy, growth, and moments that make your heart
          smile.
        </p>

        <button
          className="px-8 py-4 bg-white/20 border border-white/30 text-[1.4rem] rounded-2xl text-white hover:bg-white/30 transition-all hover:scale-105 inline-block w-fit cursor-pointer"
          style={{ padding: "1rem 2rem" }}
          onClick={() =>
            document
              .getElementById("birthday-card")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Let’s Go 🎁
        </button>
      </div>
      <div className="flex justify-center  items-center">
        {/* <img
          src="/path/to/your/image.jpg"
          alt="Magical Scene"
          className="w-full h-auto rounded-lg"
        /> */}
      </div>
    </div>
  );
};

export default Hero;
