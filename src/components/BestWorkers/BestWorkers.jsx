import React, { useEffect, useState } from "react";
import BestWorker from "../BestWorker/BestWorker";

const BestWorkers = ({ sortWorkerData }) => {
  return (
    <div className="mt-20">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortWorkerData
          .map((data) => <BestWorker key={data._id} data={data}></BestWorker>)
          .slice(0, 6)}
      </div>
    </div>
  );
};

export default BestWorkers;
