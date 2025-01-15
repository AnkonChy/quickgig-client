import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "../Slide/Slide";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <style>
        {`
          .autoplay-progress {
            position: absolute;
            right: 16px;
            bottom: 16px;
            width: 48px;
            height: 48px;
            z-index: 10;
          }

          .autoplay-progress svg {
            transform: rotate(-90deg);
            width: 100%;
            height: 100%;
          }

          .autoplay-progress circle {
            fill: none;
            stroke: white; /* Green color for the progress */
            stroke-width: 4;
            stroke-dasharray: 126; /* Approx. circumference of the circle (2 * π * radius) */
            stroke-dashoffset: calc(var(--progress, 1) * 126);
            transition: stroke-dashoffset 0.1s linear;
          }

          .autoplay-progress span {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 12px;
            font-weight: bold;
            color: white;
          }
        `}
      </style>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co.com/qCTSzGx/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg"
            }
            heading="Quick Tasks, Quick Cash"
            text="Earn Real Money by Completing Simple Micro-Tasks in Minutes!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co.com/qCTSzGx/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg"
            }
            heading="Turn Time into Earnings"
            text="Unlock Your Potential with Flexible Tasks That Fit Your Schedule!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co.com/qCTSzGx/nick-morrison-FHnnjk1-Yj7-Y-unsplash.jpg"
            }
            heading="Earn Anytime, Anywhere"
            text="Join a Global Community of Taskers and Start Earning Today!"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={
              "https://i.ibb.co.com/hFDjQF1/marvin-meyer-SYTO3xs06f-U-unsplash.jpg"
            }
            heading="Your Gig, Your Way"
            text="Choose Tasks You Love and Get Paid Instantly with QuickGig!"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Carousel;
