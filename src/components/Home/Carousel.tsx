import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Poster1 from "../../../public/img/poster 27 1.jpg"
import Poster2 from "../../../public/img/poster 27 1.jpg"
import Poster3 from "../../../public/img/poster 27 1.jpg"
import Poster4 from "../../../public/img/poster 27 1.jpg"
import Poster5 from "../../../public/img/poster 27 1.jpg"
import Poster6 from "../../../public/img/poster 27 1.jpg"

const Carousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mb-8 font-nunito text-center mx-auto py-4">
      <h2 className="mb-3 font-ubuntu text-2xl font-bold text-center">
        Gallery.
      </h2>
      <p className="mb-8">Explore our gallery</p>

      <div className="carousel-container mx-auto w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[
            Poster1,
            Poster2,
            Poster3,
            Poster4,
            Poster5,
            Poster6,
          ].map((slider: StaticImageData, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <div className="w-full">
                <Image
                  src={slider}
                  alt={`Carousel Image ${index + 1}`}
                  layout="responsive"
                  width={279}
                  //height={600}
                  className="w-full object-cover cursor-pointer"
                  //style={{ height: "600px" }}
                  onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                  onMouseLeave={() => swiperRef.current?.autoplay.start()}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
