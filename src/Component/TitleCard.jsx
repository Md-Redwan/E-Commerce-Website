import React from "react";

const TitleCard = ({titleName,titleHeading}) => {
  return (
    <div className="flex flex-col justify-center items-center lg:items-start ">
      <div className="flex items-center gap-4">
        <div className="w-5 h-10 bg-[#DB4444] rounded-sm"></div>
        <h6 className="text-[#DB4444] leading-5 font-semibold font-[Poppins]">
          {titleName}
        </h6>
      </div>
      <h2 className="text-[28px] lg:text-[36px] leading-12 tracking-[2px] font-semibold font-[Inter] mt-6">
        {titleHeading}
      </h2>
    </div>
  );
};

export default TitleCard;
