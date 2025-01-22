import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WorkerStates from "../../components/Dashboard/Worker/WorkerStates";
import ApprovedSubmission from "../../components/Dashboard/Worker/ApprovedSubmission";

const WorkerHome = () => {
  return (
    <div>
      <SectionTitle
        heading="Welcome Worker Dashboard"
        subHeading="You can manage everything"
      ></SectionTitle>
      <WorkerStates></WorkerStates>
      <ApprovedSubmission />
    </div>
  );
};

export default WorkerHome;
