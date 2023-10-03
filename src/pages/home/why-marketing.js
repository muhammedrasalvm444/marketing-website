import React from "react";

const WhyMarketing = () => {
  return (
    <div className="my-24">
      <h1 className="font-semibold text-7xl md:text-5xl text-primary">
        Why<b className=" text-secondary"> Marketing?</b>
      </h1>
      <div className="h-[400px] mt-10 sm:h-[300px]">
        <lottie-player
          src="https://assets2.lottiefiles.com/private_files/lf30_GjhcdO.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="mt-10 text-gray-600 text-md">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h1 className="mt-10 text-4xl font-semibold text-primary">
        The answers to all these questions lie in marketing.
      </h1>
      <p className="mt-10 text-gray-600 text-md">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
};

export default WhyMarketing;
