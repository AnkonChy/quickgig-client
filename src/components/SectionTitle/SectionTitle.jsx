import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 my-8 text-center mx-auto">
      <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
      <h3 className="border-y-4 py-4 text-3xl uppercase">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
