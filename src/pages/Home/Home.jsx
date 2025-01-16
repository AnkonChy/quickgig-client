import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import BestWorkers from "../../components/BestWorkers/BestWorkers";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const { sortWorkerData } = useLoaderData();
  return (
    <div>
      <Carousel></Carousel>
      <div className="mt-20 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold my-4">
          Best Workers
        </h1>
        <div>
          <BestWorkers sortWorkerData={sortWorkerData}></BestWorkers>
        </div>
      </div>
    </div>
  );
};

export default Home;
