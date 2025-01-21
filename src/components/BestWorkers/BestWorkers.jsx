import React, { useEffect, useState } from "react";
import BestWorker from "../BestWorker/BestWorker";

const BestWorkers = ({ sortWorkerData }) => {
  console.log(sortWorkerData);
  return (
    <div className="mt-20">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {sortWorkerData.map((data) => (
          <BestWorker key={data._id} data={data}></BestWorker>
        ))}
      </div>
    </div>
  );
};

export default BestWorkers;
