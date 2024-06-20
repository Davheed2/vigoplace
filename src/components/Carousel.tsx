import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";
import CarouselImage1 from "../../public/img/Frame 238304.svg";
import CarouselImage2 from "../../public/img/Frame 238304.svg";
import CarouselImage3 from "../../public/img/Frame 238304.svg";

const Carousel: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="mb-8 font-nunito text-center mx-auto">
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
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full">
              <Image
                src={CarouselImage1}
                alt="Carousel Image 1"
                layout="responsive"
                width={279}
                height={248}
                loading="lazy"
                className="w-full h-auto cursor-pointer"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full">
              <Image
                src={CarouselImage2}
                alt="Carousel Image 2"
                layout="responsive"
                width={279}
                height={248}
                loading="lazy"
                className="w-full h-auto cursor-pointer"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center items-center">
            <div className="w-full">
              <Image
                src={CarouselImage3}
                alt="Carousel Image 3"
                layout="responsive"
                width={279}
                height={248}
                loading="lazy"
                className="w-full h-auto cursor-pointer"
                onMouseEnter={() => swiperRef.current?.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.autoplay.start()}
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;
