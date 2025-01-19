import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TaskToReview from "../../components/Dashboard/TaskToReview";

const BuyerHome = () => {
  return (
    <div>
      <SectionTitle
        heading="Welcome Buyer Dashboard"
        subHeading="You can manage everything"
      ></SectionTitle>
      <TaskToReview></TaskToReview>
    </div>
  );
};

export default BuyerHome;
