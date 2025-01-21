import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Simplify onboarding with a clear step-by-step guide for new users
              to quickly start using the platform.
            </p>
            <h3 className="text-lg font-semibold mt-4">Celia Almeda</h3>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Logan Paul</h3>
            <p className="text-gray-500">UI/UX designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://cdn.pixabay.com/photo/2024/05/11/13/32/portrait-8754958_640.jpg" // Replace with the actual image URL
              alt="Ananya Sen"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Ananya Sen</h3>
            <p className="text-gray-500">SQA Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Simplify onboarding with a clear step-by-step guide for new users
              to quickly start using the platform.
            </p>
            <h3 className="text-lg font-semibold mt-4">Celia Almeda</h3>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Logan Paul</h3>
            <p className="text-gray-500">UI/UX designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://cdn.pixabay.com/photo/2024/05/11/13/32/portrait-8754958_640.jpg" // Replace with the actual image URL
              alt="Ananya Sen"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Ananya Sen</h3>
            <p className="text-gray-500">SQA Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Simplify onboarding with a clear step-by-step guide for new users
              to quickly start using the platform.
            </p>
            <h3 className="text-lg font-semibold mt-4">Celia Almeda</h3>
            <p className="text-gray-500">Software Engineer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" // Replace with the actual image URL
              alt="Celia Almeda"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Logan Paul</h3>
            <p className="text-gray-500">UI/UX designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-sm">
            <div className="w-full bg-yellow-400 h-20 rounded-t-lg"></div>
            <img
              src="https://cdn.pixabay.com/photo/2024/05/11/13/32/portrait-8754958_640.jpg" // Replace with the actual image URL
              alt="Ananya Sen"
              className="w-24 h-24 rounded-full mx-auto -mt-12 object-cover"
            />
            <p className="text-gray-600 mt-4">
              Enhance task filtering by adding advanced filters to help users
              find tasks matching their skills.
            </p>
            <h3 className="text-lg font-semibold mt-4">Ananya Sen</h3>
            <p className="text-gray-500">SQA Engineer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
