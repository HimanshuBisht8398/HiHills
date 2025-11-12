"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Digital() {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="mySwiper"
      >
        {[
          {
            src: "/images/digital/chopta.mp4",
          },
          {
            src: "/images/digital/kedarnath.mp4",
          },
          {
            src:"/images/digital/BADRINATH.mp4"
          },
          {
            src: "/images/digital/Views.mp4",
          },
          {
            src:"/images/digital/JOSHIMATH.mp4"
          },
          {
            src: "/images/digital/two.mp4",
          },
          {
            src: "/images/digital/corbet.mp4",
          },
        ].map((video, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <video className="w-full" autoPlay muted loop playsInline>
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                {/* <h2 className="text-xl font-bold">{video.label}</h2> */}
                {/* <p>{video.description}</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}