import { IoVideocamOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import React, { useContext } from "react";

import { MdOutlineTextsms } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FriendsDataContext } from "../../Context/Context";

const TimeLinePage = () => {
  let contextData = useContext(FriendsDataContext);
  let { friendsData, handleFiterOutFriendsActions } = contextData;

  return (
    <>
      <div className="my-8 md:my-10 space-y-3 md:space-y-5 text-center md:text-left">
        <h2 className="dark-blue font-bold  text-4xl lg:text-5xl ">
          TimeLine
        </h2>

        <div className="dropdown">
          <div
            tabindex="0"
            role="button"
            className="btn w-50 m-1 flex justify-between light-blue"
          >
            Filter timeline
            <span>
              <IoIosArrowDown className="light-blue" />
            </span>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              onClick={() => {
                handleFiterOutFriendsActions("call");
              }}
            >
              <a className="font-medium">
                <span>
                  <BiPhoneCall size={17} />
                </span>{" "}
                Call
              </a>
            </li>
            <li
              onClick={() => {
                handleFiterOutFriendsActions("text");
              }}
            >
              <a className="font-medium">
                <span>
                  <MdOutlineTextsms size={17} />
                </span>{" "}
                Text
              </a>
            </li>
            <li
              onClick={() => {
                handleFiterOutFriendsActions("video");
              }}
            >
              <a className="font-medium">
                <span>
                  <IoVideocamOutline size={17} />
                </span>{" "}
                Video
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* timeline cards */}
      <div className="flex flex-col gap-4">
        {/* card */}
        {/*  */}
        {friendsData.map((friend, i) => (
          <div
            key={i}
            className="shadow-sm rounded-xl flex gap-5 items-center px-10 py-4"
          >
            <div>
              {friend.clickAction === "call" ? (
                <span>
                  <BiPhoneCall size={30} />
                </span>
              ) : friend.clickAction === "text" ? (
                <span>
                  <MdOutlineTextsms size={30} />
                </span>
              ) : (
                <span>
                  <IoVideocamOutline size={30} />
                </span>
              )}
            </div>
            <div>
              <div>
                <span className="light-dark-green font-medium text-xl">
                  {friend.clickAction}
                </span>{" "}
                <span className="light-blue text-[1.1rem]">{friend.name}</span>
              </div>
              <p className="font-medium light-blue">
                   {
                      new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
                   }
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeLinePage;
