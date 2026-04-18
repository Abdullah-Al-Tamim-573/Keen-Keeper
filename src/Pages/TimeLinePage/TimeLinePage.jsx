import { IoVideocamOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import React from "react";

import { MdOutlineTextsms } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const TimeLinePage = () => {
  return (
    <>
      <div className="my-8 md:my-15 space-y-3 md:space-y-5 text-center md:text-left">
        <h2 className="dark-blue font-bold  text-4xl lg:text-5xl dark-blue">
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
              <IoIosArrowDown className="light-blue"/>
            </span>
          </div>
          <ul
            tabindex="0"
            class="dropdown-content  menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="font-medium"><span><BiPhoneCall size={17} color="black"/></span> Call</a>
            </li>
            <li>
              <a className="font-medium"><span><MdOutlineTextsms size={17}/></span> Text</a>
            </li>
            <li>
              <a className="font-medium"><span><IoVideocamOutline size={17} /></span> Video</a>
            </li>
          </ul>
        </div>
      </div>

      {/* timeline cards */}
      <div>
            {/* card */}
             <div className="border">
                    
             </div>
      </div>
    </>
  );
};

export default TimeLinePage;
