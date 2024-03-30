import React from "react";
import bigLogo from "/bigLogo.png";
import logo from "/four_dot.png";

const Section4 = () => {
  return (
    <>
    <div className="section4">
      <div className="bg-[#FFF8EC] flex flex-col justify-center items-center">
        <div className="w-full h-[800px] flex justify-center items-center relative">
          <div className="flex flex-col space-y-7 lg:space-y-80 lg:-mb-20">
            <img
              src={bigLogo}
              alt="Big Logo"
              className="self-center w-[306px] h-[77px] lg:w-[726px] lg:h-[186px]"
            />
            <div className="border-[1.75px] border-[#FDD780] w-[327px] lg:w-[1110px] "></div>
          </div>
          <img
            src={logo}
            alt="Logo"
            className="absolute top-0 right-0 m-4 mr-10 w-8 lg:w-14 h-8 lg:h-14"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default Section4;
