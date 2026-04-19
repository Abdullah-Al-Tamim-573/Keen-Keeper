import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
         <h2 className="text-6xl md:text-7xl font-extrabold text-error">
             404
         </h2>
        <h4 className="text-2xl text-center font-bold text-error">
          Opps.... Page Not Found
        </h4>
        <Link className="btn bg-light-dark-green" to={"/"}>
          Back To Home Page
        </Link>
     
    </div>
  );
};

export default ErrorPage;
