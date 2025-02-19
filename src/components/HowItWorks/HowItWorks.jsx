import React from "react";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className=" animate__animated animate__fadeInLeft text-3xl md:text-4xl text-center lg:text-5xl font-bold my-4 mt-16">
          How It Works
        </h2>
        <p className="text-gray-600 mt-2">
          Follow these simple steps to start earning on QuickGig.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-500">1</div>
            <h3 className="text-lg font-semibold mt-3">Sign Up</h3>
            <p className="text-gray-600 mt-1">
              Create a free account and log in to start earning.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-500">2</div>
            <h3 className="text-lg font-semibold mt-3">Browse Tasks</h3>
            <p className="text-gray-600 mt-1">
              Explore micro-tasks that match your skills and interests.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-500">3</div>
            <h3 className="text-lg font-semibold mt-3">Complete & Submit</h3>
            <p className="text-gray-600 mt-1">
              Finish tasks as per instructions and submit for review.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl font-bold text-blue-500">4</div>
            <h3 className="text-lg font-semibold mt-3">Get Paid</h3>
            <p className="text-gray-600 mt-1">
              Receive payments directly to your wallet after approval.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
