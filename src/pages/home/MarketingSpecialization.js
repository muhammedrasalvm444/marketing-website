import React from "react";

const MarketingSpecialization = () => {
  const strategies = [
    {
      title: "Content Marketing",
      dec: "Content marketing is a marketing strategy used to attract, engage, and retain an audience by creating and sharing relevant articles, videos, podcasts, and other media",
      img: "images/content-marketing.png",
    },
    {
      title: "In bound Marketing ",
      dec: "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategies to attract, engage, and delight customers.",
      img: "images/inbound-marketing.png",
    },
    {
      title: "Social Media",
      dec: "Social media marketing focuses on providing users with content they find valuable and want to share across their social networks, resulting in increased visibility and website traffic.",
      img: "images/social-media.png",
    },
    {
      title: "Search Engine Optimization",
      dec: "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines.",
      img: "images/seo.png",
    },
  ];
  return (
    <div className="sm:mt-16">
      <h1 className="text-5xl font-semibold text-primary sm:text-5xl ">
        Want to boost your business growth ?
      </h1>
      <h1 className="mt-10 font-semibold sm:mt-20 text-7xl text-primary sm:text-6xl">
        The <b className=" text-secondary">SOLUTION</b> is here..
      </h1>
      <p className="mt-6 text-xl text-justify text-grey-600 sm:mt-6">
        Curious about what business professionals think of different marketing
        strategies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        strategies commonly recognized as successful regardless of industry.
        Here’s what we found, in no particular order:
      </p>
      <div className="grid grid-cols-2 gap-12 mt-20 md:gap-5 sm:grid-cols-1 sm:mt-16">
        {strategies?.map((item) => (
          <div className="flex flex-col gap-3 p-6 mt-12 space-y-5 duration-300 transform border-2 rounded border-primary h-92 hover:scale-90">
            <h1 className="p-2 text-2xl font-semibold text-center bg-white border-2 border-black rounded -mt-11 text-secondary">
              {item?.title?.toUpperCase()}
            </h1>
            <img src={item?.img} alt="image" className="w-24 h-24" />
            <p className="text-xl text-justify text-gray-600">{item?.dec}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingSpecialization;
