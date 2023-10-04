import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="grid items-center min-h-screen grid-cols-2 p-10 bg-primary md:grid-cols-1">
        <div className="h-[400px]">
          <lottie-player
            src="https://assets2.lottiefiles.com/packages/lf20_jimqos21.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="flex flex-col items-center justify-center gap-7">
          <div>
            <h1 className="text-6xl font-semibold text-white sm:text-5xl">
              We <b className=" text-secondary">Work</b> Together With Our{" "}
              <b className="text-green-500 ">Clients</b>
            </h1>
          </div>
          <div className="text-lg text-gray-600">
            <p>
              “To give real service you must add something which cannot be
              bought or measured with money, and that is sincerity and
              integrity.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
