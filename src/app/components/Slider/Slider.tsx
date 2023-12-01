"use client";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Slider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Swiper
      className="flex items-center "
      slidesPerView={4}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation]}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
