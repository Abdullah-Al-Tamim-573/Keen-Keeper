import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-10">
      
        <h2 className="text-4xl text-center md:text-5xl font-extrabold text-error">
          Opps.... Page Not Found
        </h2>
        <Link className="btn bg-light-dark-green" to={"/"}>
          Back To Home Page
        </Link>
     
    </div>
  );
};

export default ErrorPage;
