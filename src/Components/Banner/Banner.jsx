import { Plus } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="hero my-5 md:my-10">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-3xl md:text-5xl font-bold dark-blue">
              Friends to keep close in your life
            </h1>
            <p className="py-3 md:py-6 light-blue ">
              Your personal shelf of meaningful connections. Browse, tend, and
              nurture the relationships that matter most.
            </p>
            <button className="btn bg-light-dark-green"><Plus size={18} /> Add a Friend</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
