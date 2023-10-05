import React from "react";

const WhatWeDo = () => {
  const list = [
    {
      title: "Web Development",
      dec: "Web development is the work involved in developing a website for the Internet or an intranet.",
      icon: "images/web.png",
    },
    {
      title: "Mobile Development ",
      dec: "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
      icon: "images/mobile.png",
    },
    {
      title: "Graphic Design",
      dec: "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
      icon: "images/graphicdesign.png",
    },
    {
      title: "Digital Marketing",
      dec: "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
      icon: "images/digital-marketing.png",
    },
  ];
  return (
    <div className="mx-4 my-5">
      <h1 className="text-6xl font-semibold text-center text-secondary sm:text-6xl sm:mt-8">
        What We Do ?
      </h1>
      <div className="w-full mt-10 h-96 bg-primary sm:hidden "></div>
      <div className="grid grid-cols-4 gap-10 px-32 mx-1 lg:px-4 lg:grid-cols-3 sm:grid-cols-1 -mt-60 sm:mt-24 md:grid-cols-2">
        {list?.map((item) => {
          return (
            <div className="flex flex-col items-center gap-4 p-5 space-y-4 duration-500 transform bg-white border rounded shadow-md hover:scale-105">
              <img src={item?.icon} alt="image" className="w-20 h-20" />
              <h1 className="text-2xl font-semibold">{item?.title}</h1>
              <p className="text-lg text-gray-600 ">{item?.dec}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeDo;
