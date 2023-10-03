import React from "react";
import AboutIntro from "./about-intro.svg";
function Intro() {
  return (
    <>
      <div className="h-screen about-intro sm:hidden"></div>
      <div className="grid items-center min-h-screen grid-cols-2 sm:grid-cols-1 sm:bg-secondary sm:p-10">
        <div className="z-10 flex justify-center">
          <img src={AboutIntro} alt="" className="h-[500px] w-[500px]" />
        </div>
        <div className="z-10 flex flex-col space-y-5 max-w-max sm:-mt-20">
          <h1 className="font-semibold text-white text-8xl sm:text-5xl">
            JOBKARO
          </h1>
          <hr />
          <h1 className="text-xl text-white">OLDER | STRONGER | WISER</h1>
        </div>
      </div>
    </>
  );
}

export default Intro;
