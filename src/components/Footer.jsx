import React from "react";
import logo from "../../../public/four_dot.png";
import linkedin from "../../../public/linkedin.png";
import reboot from "../../../public/reboot.png";
export default function Footer() {
  return (
    <footer className="w-full h-[850px] lg:h-[775px] bg-[#FFF8EC] text-[#502E23]">
      <div className="flex justify-between">
        <div className="w-[323px] lg:w-[900px] h-40">
          <h1 className="font-amiri italic text-3xl lg:text-6xl ml-5 lg:ml-16 mt-28 font-bold">
            Designed And Developed By Reboot Consultancy And Services
          </h1>
          <div className="mt-4 border-[1.75px] border-[#FDD780] w-[327px] lg:w-[1110px]"></div>
        </div>
        <div>
          <img
            src={logo}
            alt=""
            className="w-8 lg:w-14 h-8 lg:h-14 mt-7 lg:mt-14 mr-16"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:flex lg:justify-between mt-40">
        <div className="flex flex-col w-[284px] lg:w-[626px] h-[108px] lg:h-[270px] ml-4 lg:ml-16 space-y-3 lg:space-y-6">
          <div className="flex">
            <h1 className="font-bold text-xl lg:text-5xl font-amiri italic">
              Contact Number:{" "}
              <span className="font-qsans not-italic font-bold text-xl lg:text-[40px]">
                +91 7057141513
              </span>
            </h1>
          </div>
          <div className="flex">
            <h1 className="font-bold text-xl lg:text-5xl font-amiri italic">
              Location:{" "}
              <span className="font-qsans not-italic font-bold text-xl lg:text-[40px]">
                Kothrud, Pune, 411038
              </span>
            </h1>
          </div>
          <div className="flex">
            <h1 className="font-bold text-xl lg:text-5xl font-amiri italic">
              Email ID:{" "}
              <span className="font-qsans not-italic font-bold text-xl lg:text-[40px]">
                sales@rebootcas.com
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-col mt-20 lg:mt-0 ml-4 lg:ml-0 lg:mr-20">
          <div className="flex flex-col">
            <h1 className="font-amiri font-bold italic text-xl lg:text-5xl">
              Follow us on:
            </h1>
            <a
              className="decoration-transparent cursor-pointer mt-4"
              href="https://in.linkedin.com/company/reboot-consultancy-services"
            >
              <img
                src={linkedin}
                alt=""
                className="w-[123px] lg:w-[210px] h-8 lg:h-14 "
              />
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-36 lg:mt-0 -ml-14 lg:-ml-0">
        <img
          src={reboot}
          alt=""
          className="w-[308px] lg:w-[597px] h-[94px] lg:h-[186px]"
        />
      </div>
    </footer>
  );
}
