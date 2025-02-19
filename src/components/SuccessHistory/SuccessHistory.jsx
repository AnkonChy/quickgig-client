import React from "react";

const SuccessHistory = () => {
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4 mt-14">
          Our Success Journey
        </h2>
        <p className="text-gray-600 mt-2">
          How QuickGig grew from an idea to a thriving micro-tasking platform.
        </p>

        <div className="mt-8 flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Left Side - Timeline */}
          <div className="flex-1 space-y-6 text-left">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">2020 - The Beginning</h3>
              <p className="text-gray-600 mt-1">
                QuickGig was founded with a mission to connect freelancers with
                small tasks globally.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">2021 - First Milestone</h3>
              <p className="text-gray-600 mt-1">
                Reached 10,000 active users and partnered with multiple
                companies.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">2023 - Rapid Growth</h3>
              <p className="text-gray-600 mt-1">
                Expanded globally with over 500,000 tasks completed
                successfully.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">2024 - Industry Leader</h3>
              <p className="text-gray-600 mt-1">
                Became a top micro-tasking platform with millions of users
                worldwide.
              </p>
            </div>
          </div>

          {/* Right Side - Company Image */}
          <div className="flex-1">
            <img
              src="https://i.ibb.co.com/BV5R7sp2/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg"
              alt="QuickGig Success"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessHistory;
