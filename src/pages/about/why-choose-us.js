import React from "react";

const WhyChooseUs = () => {
  const items = [
    {
      title: "Innovative and Passionate",
      image: "images/innovation.png",
      description:
        "We are a team of creative and passionate designers and developers. We are fully aware of the importance of designing for the digital age and strive to deliver the best result for our clients.",
    },
    {
      title: "Good Return on Investment",
      image: "images/investment.png",
      description:
        "Working with us means providing your business with great savings. All our digital marketing and web development packages are being offered at competitive prices",
    },
    {
      title: "Seamless Customer Support",
      image: "images/customer-support.png",
      description:
        "We are always here to help you with any questions you may have. We are always here to help you with any questions you may have. We are always here to help you with any questions you may have.",
    },
  ];
  return (
    <div className="mx-32 mt-24 shadow-md sm:mx-2">
      <div className="flex items-center justify-center w-full h-40 text-center text-white bg-primary">
        <h1 className="items-center font-semibold text-center text-7xl md:text-6xl">
          Why Choose Us..?
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10 py-10 border-t-2 sm:grid-cols-1 px-7">
        {items?.map((item) => {
          return (
            <div className="flex flex-col items-center gap-3 p-5 space-y-4 duration-300 transform bg-white border-4 rounded shadow-md border-t-red-500 hover:scale-105">
              <img src={item?.image} alt="image" className="w-20 h-20" />
              <h1 className="text-2xl font-semibold">{item?.title}</h1>
              <p className="text-lg text-gray-600 ">{item?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChooseUs;
