import React from "react";

const Friend = ({ friendData }) => {
//   console.log(friendData);
  const { id, name, picture, days_since_contact, status, tags } = friendData;
  console.log(picture)
  return (
    <>
      <div className="card  bg-base-100 border card-md shadow-sm">
        <div className="card-body">
          <div className="">
            <img src={picture} className="w-[65px] mx-auto rounded-4xl " alt="image" />
          </div>
          <p className="text-center text-[20px] font-semibold dark-blue">
            {name}
          </p>
          <p className="text-center light-blue text-[12px]">
            {days_since_contact}d ago
          </p>
          <div className="flex gap-2 mx-auto items-center w-fit">
            {
              tags.map((tag,i) => <p key={i} className="light-dark-green  bg-[#CBFADB]  font-medium text-[12px] px-4  rounded-4xl">
                {tag}
              </p>)
            }
          </div>
          <p 
          className={`text-white ${status === 'almost due'? 'bg-[#EFAD44]': status==='overdue'? 'bg-[#EF4444]': 'bg-[#244D3F]'} text-center w-fit px-4  rounded-4xl mx-auto font-medium text-[14px]`}>
            {status}
          </p>
        </div>
      </div>
    </>
  );
};

export default Friend;
