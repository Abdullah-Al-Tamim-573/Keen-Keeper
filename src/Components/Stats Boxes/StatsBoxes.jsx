import React from "react";

const StatsBoxes = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 justify-items-center my-5 md:my-10">
        {/* 1st box */}
        <div className="card w-full bg-base-100 border card-md shadow-sm">
          <div className="card-body">
            <h2 className="text-2xl md:text-3xl light-dark-green text-center font-semibold">10</h2>
            <p className="text-center text-[1.1rem] light-blue">
                Total Friends
            </p>
            
          </div>
        </div>
        {/* 2nd box */}
        <div className="card w-full bg-base-100 border card-md shadow-sm">
          <div className="card-body">
            <h2 className="text-2xl md:text-3xl light-dark-green text-center font-semibold">3</h2>
            <p className="text-center text-[1.1rem] light-blue">
                On Track
            </p>
            
          </div>
        </div>
        {/* 3rd box */}
        <div className="card w-full bg-base-100 border card-md shadow-sm">
          <div className="card-body">
            <h2 className="text-2xl md:text-3xl light-dark-green text-center font-semibold">6</h2>
            <p className="text-center text-[1.1rem] light-blue">
                Need Attention
            </p>
            
          </div>
        </div>
        {/* 4th box */}
        <div className="card w-full bg-base-100 border card-md shadow-sm">
          <div className="card-body">
            <h2 className="text-2xl md:text-3xl light-dark-green text-center font-semibold">12</h2>
            <p className="text-center text-[1.1rem] light-blue">
                Interactions This Month
            </p>
            
          </div>
        </div>
       
       
      </div>
    </>
  );
};

export default StatsBoxes;
