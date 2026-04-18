import React from "react";
import { useLoaderData, useParams } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";

const FriendDetails = () => {
  let params = Number(useParams().id);
  let friendsData = useLoaderData();

  let findTargetFriend = friendsData.find((friend) => friend.id === params);

  return (
    <>
      <section className="my-20 flex gap-5 flex-col lg:flex-row ">
        {/* 1st part box */}
        <div className="flex flex-col gap-3">
          {/* 1st box */}
          <div className="card border w-80 shadow-sm py-7">
            <figure>
              <img src="Ellipse1.png" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">Emma Wilson</h2>
              <p
                className={`text-white bg-[#EF4444] text-center w-fit px-4  rounded-4xl mx-auto font-medium text-[14px]`}
              >
                Overdue
              </p>
              <p className="light-dark-green w-fit mx-auto  bg-[#CBFADB]  font-medium text-[13px] px-4  rounded-4xl">
                family
              </p>
              <p className="light-blue font-medium text-center italic">
                "Former colleague, great mentor"
              </p>
              <div className="card-actions justify-end">
                <p className="light-blue text-[14px] text-center">
                  Preferred: email
                </p>
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className="card  w-80 shadow-sm ">
            <div className="card-body p-0">
              <p className="font-medium flex justify-center  gap-1   p-4 dark-blue">
                <RiNotificationSnoozeLine size={17} /> Snooze 2 weeks
              </p>
              <p className="font-medium btn text-center p-4 dark-blue flex justify-center gap-1">
                <PiArchiveBold size={17} /> Archive
              </p>
              <p className="font-medium text-center p-4 flex justify-center gap-1 btn text-[#EF4444]">
                <RiDeleteBin6Line size={17} /> Delete
              </p>
            </div>
          </div>
        </div>

        {/* 2nd part box */}

        <div className="border w-full flex flex-col gap-4 ">
          {/* status boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1st box */}
            <div className="card bg-base-100 border  card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl  light-dark-green text-center font-semibold">
                  62
                </h2>
                <p className="text-center text-[1rem] light-blue">
                  Days Since Contact
                </p>
              </div>
            </div>
            {/* 2nd box  */}
            <div className="card  bg-base-100 border card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl light-dark-green text-center font-semibold">
                  30
                </h2>
                <p className="text-center text-[1rem] light-blue">
                  Goal (Days)
                </p>
              </div>
            </div>
            {/* 3rd box */}
            <div className="card  bg-base-100 border  card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl  light-dark-green text-center font-semibold">
                  Feb 27, 2026
                </h2>
                <p className="text-center text-[1rem] light-blue">
                  Next Due
                </p>
              </div>
            </div>
          </div>

          {/* Relationship Goal box */}
          <div className="border flex justify-between p-6 rounded-xl">
                <div className="space-y-1">
                     <h4 className="font-medium text-xl light-dark-green">
                      Relationship Goal
                </h4>
                <p className="light-blue text-[17px]">
                     Connect every <span className="dark-blue font-bold">30 days</span>
                </p>
                </div>
                <div>
                     <button className="btn">
                        Edit 
                     </button>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FriendDetails;
