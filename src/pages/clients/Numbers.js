import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Numbers = () => {
  const data = [
    {
      name: "Clients",
      count: 19,
    },
    {
      name: "Projects",
      count: 47,
    },
    {
      name: "Locations",
      count: 16,
    },
  ];
  return (
    <div className="mt-12 px-36 md:px-4">
      <h1 className="my-4 text-2xl">
        Until today we have provide our services.
      </h1>
      <div className="flex justify-between p-6 bg-secondary sm:h-auto sm:flex-col sm:space-y-10">
        {data?.map((item) => (
          <div className="flex flex-col items-center m-2">
            <h1 className="font-semibold text-9xl text-secondery sm:text-5xl text-primary">
              <CountUp start={0} end={item?.count}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start}>
                    <div>
                      <span ref={countUpRef} className="text-6xl sm:text-5xl" />
                    </div>
                  </VisibilitySensor>
                )}
              </CountUp>
            </h1>{" "}
            <h1 className="text-4xl font-semibold text-white md:text-3xl">
              {item?.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
