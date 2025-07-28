import React from "react";
import { hitusupArr } from "../utils/hitUsUp";
import ShinyText from "./ShinyText/ShinyText";
import AnimatedSection from "./AnimatedSection";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Message: React.FC = () => {
  return (
    <AnimatedSection
      id="wishes"
      className="py-8 md:py-16 relative"
      threshold={0.15}
      delay={0.2}
    >
      <div
        className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8"
        style={{ paddingTop: "2rem" }}
      >
        {/* Section Title */}
        <div
          className="flex flex-col gap-6 md:gap-10 items-center mb-8 md:mb-12"
          style={{ marginBottom: "2rem" }}
        >
          <ShinyText
            text="Send Birthday Wishes"
            disabled={false}
            speed={3}
            className="custom-class text-[3rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
          />

          <ShinyText
            text="Make Emeka's day special with your personal message!"
            disabled={false}
            speed={3}
            className="custom-class text-[18px] sm:text-base md:text-[18px] max-w-2xl mx-auto text-center px-4"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mt-6 md:mt-10">
          {/* Photo Grid */}
          <div className="p-3 md:p-4 bg-black bg-opacity-20 order-2 lg:order-1">
            <div className="grid grid-cols-3 gap-1 md:gap-1.5 aspect-square">
              {hitusupArr.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-sm md:rounded-md group aspect-square"
                >
                  <img
                    src={image.imgPath}
                    alt={image.alt || "Birthday memory"}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Message Section */}
          <div className="p-4 sm:p-6 md:p-10 flex flex-col gap-10 md:gap-4 order-1 lg:order-2">
            <h3 className="hidden md:block text-[2rem] sm:text-2xl md:text-3xl lg:text-7xl font-bold text-white mb-3 md:mb-6 text-center lg:text-left">
              Send Your Wishes!
            </h3>

            <p className="hidden md:block text-[1.4rem] sm:text-base md:text-lg lg:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed text-center md:text-left">
              Emeka would love to hear from you on his special day! Send a
              message, or make a call.
            </p>

            <div className="flex flex-row gap-3 md:gap-4 mt-auto justify-center lg:justify-start">
              <a
                href="https://wa.me/2347035773679?text=Happy%20Birthday%20Emeka!%20Wishing%20you%20all%20the%20best%20on%20your%20special%20day."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 sm:px-6 lg:px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-center self-center sm:self-start"
                style={{ padding: "0.75rem 1rem" }}
              >
                <FaWhatsapp size={18} className="sm:w-5 sm:h-5" />
                <span className="text-base sm:text-lg lg:text-xl">
                  WhatsApp
                </span>
              </a>

              <a
                href="tel:+2347035773679"
                className="inline-flex items-center justify-center gap-2 md:gap-3 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 sm:px-6 lg:px-6 rounded-lg transition-all shadow-lg hover:shadow-xl text-center self-center sm:self-start"
                style={{ padding: "1rem 2rem" }}
              >
                <FaPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
                <span className="text-base sm:text-lg lg:text-xl">Call</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Message;
