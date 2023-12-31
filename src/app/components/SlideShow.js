"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SlideShow() {
  const data = [
    {
      id: "d1",
      image:
        "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    },
    {
      id: "d2",
      image:
        "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80",
    },
    {
      id: "d3",
      image:
        "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
    },
  ];
  return (
    <>
      <div className=" w-full relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          {data.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className=" mix-blend-darken bg-opacity-40 bg-gray-700">
                <div className="w-full h-full absolute justify-center items-center md:items-center md:justify-center text-white flex flex-col mx-auto  ">
                  <p className=" text-center  text-5xl md:text-7xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,10)] outline-1 font-bold font-quicksand mb-1 md:mb-6 max-w-xxl uppercase banner md:p-0">
                    Unleash Your Inner Chef
                  </p>
                  <p className="text-sm md:text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] font-sans-serif font-medium banner text-center flex items-end justify-center">
                    Where passion meets the plate, our cooking website inspires
                    every chef within you. Discover a world of delectable
                    recipes, culinary tips, and food adventures to savor.
                  </p>
                </div>
                <div className="h-full w-full  bg-opacity-5">
                  <img
                    className=" h-[50vh] md:h-[65vh] mix-blend-overlay w-full object-cover"
                    src={slide.image}
                    alt={slide.image}
                  ></img>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
