import React from "react";
import Marquee from "react-fast-marquee";

const Companies = () => {
  return (
    <div className="my-10">
      <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4">
        Our Trusted Partners
      </h1>
      <p className="text-lg text-center">
        We collaborate with leading companies to provide exceptional services
        and deliver value to our clients.
      </p>
      <Marquee>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fiver</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fiver</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fiver</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fiver</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Fiver</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Fiverr_Logo_09.2020.svg/2560px-Fiverr_Logo_09.2020.svg.png"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Microsoft</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://blogs.microsoft.com/wp-content/uploads/prod/2012/08/8867.Microsoft_5F00_Logo_2D00_for_2D00_screen.jpg"
              alt="Shoes"
            />
          </figure>
        </div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">UpWork</h2>
          </div>
          <figure>
            <img
              className="h-24"
              src="https://logos-world.net/wp-content/uploads/2021/04/Upwork-Logo-1.png"
              alt="Shoes"
            />
          </figure>
        </div>
      </Marquee>
    </div>
  );
};

export default Companies;
