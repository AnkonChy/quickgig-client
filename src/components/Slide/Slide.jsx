import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ image, heading, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[20rem] md:h-[30rem] lg:h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-gray-900/70">
        <div className="text-center">
          <h1 className="text-xl md:text-3xl font-semibold text-white lg:text-4xl">
            {heading}
          </h1>
          <br />
          <p className="text-base md:text-xl font-semibold text-white lg:text-2xl px-8 md:px-0">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
