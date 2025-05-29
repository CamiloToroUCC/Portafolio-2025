"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCreative } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/images/image1.jpg" },
  { id: 2, image: "/images/image2.jpg" },
  { id: 3, image: "/images/image3.jpg" },
];

export default function HeroSuperFlow() {
  return (
    <div className="w-full h-96 mb-8 overflow-hidden rounded-2xl shadow relative">
      <Swiper
        effect="creative"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        spaceBetween={50}
        speed={1000}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-120%", 0, -500] as [string, number, number],
            rotate: [0, 0, 0],
            opacity: 0,
          },
          next: {
            translate: ["120%", 0, -500] as [string, number, number],
            rotate: [0, 0, 0],
            opacity: 0,
          },
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, EffectCreative]}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="w-full h-full relative">
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
