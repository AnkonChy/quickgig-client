import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import BestWorkers from "../../components/BestWorkers/BestWorkers";
import { useLoaderData } from "react-router-dom";
import Testimonial from "../../components/Testimonial/Testimonial";
import FreshOpportunities from "../../components/FreshOpportunities/FreshOpportunities";
import Blogs from "../Blogs/Blogs";
import Companies from "../Companies/Companies";

const Home = () => {
  const { sortWorkerData, allTasksData } = useLoaderData();
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
      <div className="py-16 w-11/12 mx-auto">
        <h1 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl lg:text-5xl font-bold my-8">
          Testimonial
        </h1>
        <div>
          <Testimonial></Testimonial>
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <FreshOpportunities></FreshOpportunities>
        <Blogs></Blogs>
      </div>
      <Companies></Companies>
    </div>
  );
};

export default Home;
