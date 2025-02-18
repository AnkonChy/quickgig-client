import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/sJdyvDn1/ian-dooley-DJ7b-Wa-Gwks-unsplash.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            {/* Welcome to <span className="font-bold">Cine Vault</span>, your go-to
            platform for exploring movies across all genres. From classics to
            blockbusters, we bring you reviews, recommendations, and everything
            a movie lover needs. Dive into the world of cinema with us! */}
            Welcome to <span className="font-bold">QuickGig</span>, a micro-task
            and earning platform where users complete small tasks to earn real
            money. From liking posts to writing reviews, we connect task
            providers with gig workers for quick and easy earnings. Our mission
            is to empower users with flexible opportunities to make money
            anytime, anywhere.
          </p>
          <Link to="/">
            <button className="btn bg-yellow-500 hover:bg-yellow-600 hover:text-white">
              Get Started with QuickGig
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
