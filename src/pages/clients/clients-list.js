import React, { useState } from "react";

const ClientsList = () => {
  const clients = [
    {
      name: "Slack",
      logo: "images/slack.png",
      url: "https://www.tcs.com/",
      description:
        "Slack is a cloud-based set of tools and services that makes it easy to get work done. It’s built for teams of all sizes, and has a simple, beautiful design that’s easy to use and works great on any device.",
    },
    {
      name: "Twitter",
      logo: "images/twitter.png",
      url: "https://www.infosys.com/",
      description:
        "Twitter is a social networking service that enables users to send and read short 140-character messages called “tweets”.",
    },
    {
      name: "Instagram",
      logo: "images/instagram.png",
      url: "https://www.wipro.com/",
      description:
        "Instagram is a photo-sharing, video-sharing and communication service that is owned and operated by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010.",
    },
    {
      name: "Spotify",
      logo: "images/spotify.png",
      url: "https://www.hcl.com/",
      description:
        "Spotify is a music streaming service that offers a wide range of music genres, including rock, pop, country, electronic, and more. It was created by Swedish computer programmer and programmer Johan Liljegren in 2007.",
    },
    {
      name: "Messenger",
      logo: "images/messenger.png",
      url: "https://www.accenture.com/",
      description:
        "Messenger is a messaging app that enables users to communicate with their friends and family. It was created by Facebook in 2011.",
    },
    {
      name: "Cognizant",
      logo: "images/cognizant.png",
      url: "https://www.capgemini.com/",
      description:
        "Cognizant is a multinational technology company headquartered in Bengaluru, India. It is the largest Indian IT company by market capitalization.",
    },
    {
      name: "Github",
      logo: "images/github.png",
      url: "https://www.cognizant.com/",
      description:
        "GitHub is a web-based hosting service for version control of code using the distributed version control (DVCS) model. It was created by Linus Torvalds in 2005.",
    },
  ];
  const [selectedClients, setSelectedClients] = useState(0);
  const Previous = () => {
    setSelectedClients(selectedClients - 1);
  };
  const Next = () => {
    setSelectedClients(selectedClients + 1);
  };
  console.log("sel", selectedClients);
  return (
    <div className="px-3">
      <div className="w-full h-40 rounded-b-full sm:hidden sm:h-72 bg-primary"></div>

      {/* <div className=""> */}
      <div className="flex items-end justify-center -mt-32 space-x-10 text-gray-500">
        {selectedClients > 0 && (
          <i
            className="text-4xl hover:text-gray-700 ri-arrow-left-line hover:cursor-pointer "
            onClick={Previous}
          ></i>
        )}
        <div className="p-5 bg-white border shadow-md w-[500px] rounded h-[300px]">
          <div className="flex justify-between space-x-10  h-[100px]">
            <img src={clients[selectedClients]?.logo} className="w-20 h-20" />

            <h1 className="text-4xl font-semibold text-primary">
              {clients[selectedClients]?.name}
            </h1>
          </div>
          <p className="mt-8 text-justify">
            {" "}
            {clients[selectedClients]?.description}
          </p>
        </div>
        {selectedClients !== clients?.length - 1 && (
          <i
            className="text-4xl hover:text-gray-700 ri-arrow-right-line hover:cursor-pointer "
            onClick={Next}
          ></i>
        )}
      </div>
      {/* </div> */}
    </div>
  );
};

export default ClientsList;
