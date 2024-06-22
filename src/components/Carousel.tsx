import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import Slider1 from "../../public/img/slider1.jpeg";
import Slider2 from "../../public/img/slider2.jpeg";
import Slider3 from "../../public/img/slider3.jpeg";
import Slider4 from "../../public/img/slider4.jpeg";
import Slider5 from "../../public/img/slider5.jpeg";
import Slider6 from "../../public/img/slider6.jpeg";
import Slider7 from "../../public/img/slider7.jpeg";
import Slider8 from "../../public/img/slider8.jpeg";
import Slider9 from "../../public/img/slider9.jpeg";
import Slider10 from "../../public/img/slider10.jpeg";

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
          autoplay={{ delay: 1000000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {[
            Slider1,
            Slider2,
            Slider3,
            Slider4,
            Slider5,
            Slider6,
            Slider7,
            Slider8,
            Slider9,
            Slider10,
          ].map((slider: StaticImageData, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
              style={{maxHeight: "80vh"}}
            >
              <div className="w-full sm:max-h-[500px]">
                <Image
                  src={slider}
                  alt={`Carousel Image ${index + 1}`}
                  layout="responsive"
                  width={279}
                  height={600}
                  loading="lazy"
                  className="w-full h-600 object-cover cursor-pointer"
                  style={{ height: "600px" }}
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
