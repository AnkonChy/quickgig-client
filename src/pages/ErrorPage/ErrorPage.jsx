import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-2">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 italic">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <button className="btn btn-success">Go back home</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
