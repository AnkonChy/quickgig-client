import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WorkerStates from "../../components/Dashboard/Worker/WorkerStates";

const WorkerHome = () => {
  return (
    <div>
      <SectionTitle
        heading="Welcome Worker Dashboard"
        subHeading="You can manage everything"
      ></SectionTitle>
     <WorkerStates></WorkerStates>
    </div>
  );
};

export default WorkerHome;
