import React from "react";

const Intro = () => {
  return (
    <div className="grid items-center h-screen grid-cols-2 mb-0 sm:grid-cols-1 sm:mt-5">
      <div className="flex flex-col space-y-10 sm:space-y-5">
        <h1 className="font-semibold text-7xl sm:text-5xl text-primary ">
          The Best
          <b className=" text-secondary"> Marketing</b>
        </h1>
        <h1 className="text-4xl font-semibold text-primary sm:text-3xl">
          Doesn't feel like marketing
        </h1>
        <button className="px-16 py-4 text-lg text-white sm:px-10 sm:py-3 bg-secondary hover:bg-black max-w-max">
          {" "}
          Get started
        </button>
      </div>
      <div className="p-10 md:p-6 sm:p-6">
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_hwcplx4x.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Intro;
