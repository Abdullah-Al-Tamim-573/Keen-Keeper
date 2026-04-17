import React, { use } from "react";
import Friend from "./Friend";

const YourFriends = ({ friendsDataPromise }) => {
  let friendsData = use(friendsDataPromise);

  return (
    <>
    <div>
          <h2 className="dark-blue font-semibold text-2xl mt-13 mb-5 text-center md:text-left">
               Your Friends
          </h2>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-4">
            {
                friendsData.map(friendData => <Friend key={friendData.id} friendData={friendData}></Friend>)
            }
      </div>
    </>
  );
};

export default YourFriends;
