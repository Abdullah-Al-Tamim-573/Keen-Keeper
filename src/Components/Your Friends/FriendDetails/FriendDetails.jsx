import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { PiArchiveBold } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import { FriendsDataContext} from "../../../Context/Context";




const FriendDetails = () => {
  let params = Number(useParams().id);
  let friendsData = useLoaderData();
  let contextData = useContext(FriendsDataContext);
  let {handleFriendsData} = contextData;
 

  let findTargetFriend = friendsData.find((friend) => friend.id === params);
  

  let {id, name, picture, email, days_since_contact, goal, next_due_date
,status, tags, bio} = findTargetFriend;
const formattedDate = new Date(next_due_date).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' });

  return (
    <>
      <section className="my-20 flex gap-5 flex-col lg:flex-row ">
        {/* 1st part box */}
        <div className="flex flex-col gap-3 items-center">
          {/* 1st box */}
          <div className="card  w-full md:w-80  shadow-sm py-7">
            <figure>
              <img src={picture} alt={name} className="rounded-full"/>
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{name}</h2>
              <p
                className={`text-white ${status === 'almost due'? 'bg-[#EFAD44]': status==='overdue'? 'bg-[#EF4444]': 'bg-[#244D3F]'} text-center w-fit px-4  rounded-4xl mx-auto font-medium text-[14px]`}
              >
                {status}
              </p>
                <div className="flex gap-1  items-center w-fit mx-auto">
                     {
                        tags.map((tag, i) =>  
                        <p key={i} className="light-dark-green w-fit mx-auto  bg-[#CBFADB]  font-medium text-[13px] px-4  rounded-4xl">
                              {
                                tag
                              }
                         </p>
              )
                     }
                </div>
              <p className="light-blue font-medium text-center italic">
                "{bio}"
              </p>
              <div className="card-actions justify-end">
                <p className="light-blue text-[14px] text-center">
                  Preferred: {email}
                </p>
              </div>
            </div>
          </div>
          {/* 2nd box */}
          <div className="card  w-full md:w-80 shadow-sm ">
            <div className="card-body p-0">
              <p className="font-medium flex justify-center  gap-1 btn  p-4 dark-blue">
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
        <div className="shadow-xl w-full flex flex-col gap-4 ">
          {/* status boxes */}
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* 1st box */}
            <div className="card bg-base-100  card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl  light-dark-green text-center font-semibold">
                  {days_since_contact}
                </h2>
                <p className="text-center text-[1rem] light-blue">
                  Days Since Contact
                </p>
              </div>
            </div>
            {/* 2nd box  */}
            <div className="card  bg-base-100 card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl light-dark-green text-center font-semibold">
                  {goal}
                </h2>
                <p className="text-center text-[1rem] light-blue">
                  Goal (Days)
                </p>
              </div>
            </div>
            {/* 3rd box */}
            <div className="card  bg-base-100  card-md shadow-sm">
              <div className="card-body">
                <h2 className="text-2xl  light-dark-green text-center font-semibold">
                  {/* Feb 27, 2026 */}
                  {
                    formattedDate
                  }
                </h2>
                <p className="text-center text-[1rem] light-blue">Next Due</p>
              </div>
            </div>
          </div>

          {/* Relationship Goal box */}
          <div className="shadow-sm flex justify-between p-6 rounded-xl">
            <div className="space-y-1">
              <h4 className="font-medium text-xl light-dark-green">
                Relationship Goal
              </h4>
              <p className="light-blue text-[17px]">
                Connect every{" "}
                <span className="dark-blue font-bold">{goal} days</span>
              </p>
            </div>
            <div>
              <button className="btn">Edit</button>
            </div>
          </div>
          {/* Quick Check-In box */}
          <div className="shadow-sm rounded-xl p-6 ">
            <h4 className="text-xl font-medium">Quick Check-In</h4>

            {/* Action Cards box */}
            <div className="flex gap-2 py-10">
              <div className="w-full">
                <button onClick={() => {
                  toast.success(`SuccessFully Call with ${name}`, {
                    position: "top-center"

                  })
                  handleFriendsData(findTargetFriend, 'call')
                }} className="btn w-full flex flex-col gap-1 p-5 md:p-7 lg:p-10">
                    <span><BiPhoneCall size={24} color="black"/></span> Call</button>
              </div>
              <div className="w-full">
                <button onClick={() => {
                    toast.success(`SuccessFully Text with ${name}`, {
                    position: "top-center"
                  })
                  handleFriendsData(findTargetFriend, 'text')
                }} className="btn flex flex-col w-full gap-1 p-5 md:p-7 lg:p-10"> <span><MdOutlineTextsms size={24}/></span> Text</button>
              </div>
              <div className="w-full">
                <button onClick={() => {
                  toast.success(`SuccessFully Video Call With ${name}`, {
                    position: "top-center"
                  })
                  handleFriendsData(findTargetFriend, 'video')
                }} className="btn  w-full gap-1 p-5 md:p-7 lg:p-10 flex flex-col">
                    <span><IoVideocamOutline size={24} /></span> Video</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FriendDetails;
