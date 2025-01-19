import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TaskToReview from "../../components/Dashboard/Buyer/TaskToReview";
import BuyerStates from "../../components/Dashboard/Buyer/BuyerStates";

const BuyerHome = () => {
  return (
    <div>
      <SectionTitle
        heading="Welcome Buyer Dashboard"
        subHeading="You can manage everything"
      ></SectionTitle>
      <BuyerStates></BuyerStates>
      <TaskToReview></TaskToReview>
    </div>
  );
};

export default BuyerHome;
