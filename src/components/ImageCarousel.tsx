import { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Note: Swiper CSS is now imported in src/swiper-styles.css and loaded globally via main.tsx

// Import the type from our types file
import type { CarouselImage } from "./types";

interface ImageCarouselProps {
  images: CarouselImage[];
  title?: string;
}

const ImageCarousel = ({
  images,
  title = "Photo Carousel 📸",
}: ImageCarouselProps) => {
  // Defensive: filter out invalid entries
  const slides = useMemo(() => images.filter((i) => !!i.src), [images]);

  return (
    <section
      id="memories"
      className="py-16 max-w-[800px] mx-auto w-full flex flex-col gap-10 items-center justify-center px-4 text-white"
    >
      <h2 className="text-[3rem] font-bold text-center mb-8 text-white">
        {title}
      </h2>

      <div className="max-w-[900px] sm:max-w-xl md:max-w-2xl lg:max-w-3xl w-full mx-auto">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination]}
          effect="fade"
          loop
          speed={800}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          allowTouchMove
          className="rounded-xl shadow-lg overflow-hidden"
        >
          {slides.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative group">
                {/* Square frame */}
                <div className="aspect-square w-full overflow-hidden bg-[#060010] flex items-center justify-center">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="object-cover"
                    loading="lazy"
                    style={{ height: "100%", width: "100%" }}
                  />
                </div>

                {/* Caption */}
                {/* {img.caption && (
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent text-white px-4 py-3">
                    <p className="text-sm">{img.caption}</p>
                  </div>
                )} */}

                {/* Download button (shows on hover/tap) */}
                <a
                  href={img.downloadSrc ?? img.src}
                  download
                  className="absolute bottom-3 right-3 
                             md:opacity-0 md:group-hover:opacity-100 
                             opacity-100 active:scale-95
                             transition duration-200
                             text-xs font-semibold px-3 py-1.5 rounded-full
                             bg-white/90 text-gray-800 shadow hover:bg-white"
                  aria-label={`Download ${img.alt}`}
                  style={{ padding: "1rem 2rem", fontSize: "0.875rem" }}
                >
                  ⬇️ Download
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ImageCarousel;
