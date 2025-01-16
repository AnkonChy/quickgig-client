import React from "react";
import { useLoaderData } from "react-router-dom";

const BestWorker = ({ data }) => {
  const { name, email, coin, profile_picture } = data;
  return (
    <div className="card card-compact bg-base-100 shadow-xl hover:bg-gray-200 hover:shadow-2xl transition-all duration-300">
      <figure>
        <img
          referrerPolicy="no-referrer"
          className="w-28 h-28 rounded-full object-cover mt-4"
          src={profile_picture}
        />
      </figure>
      <div className="flex flex-col justify-center items-center space-y-4 mt-4 p-4">
        <h2 className="text-2xl font-bold">{name}</h2>

        <div>
          <h1 className="font-medium flex-grow">
            <span className="font-bold">Total Coin:</span>
            {coin}
          </h1>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-success">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default BestWorker;
