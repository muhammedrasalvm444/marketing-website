import React from "react";

const Address = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex-col p-10 space-y-10 text-white rounded-xl bg-primary">
        <h1 className="text-2xl">Get in Touch</h1>
        <h1>
          Job karo is a search engine marketing agency .that delivery digital
        </h1>
        <div className="flex space-x-5">
          <div>
            <i class="ri-map-pin-fill  text-3xl p-2 text-secondary bg-[#353b773d] rounded"></i>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Visit Us:</h1>
            <p>27 Division St.New York.NY 10002,USA</p>
          </div>
        </div>
        <div className="flex space-x-5">
          <div>
            <i class="ri-mail-fill  text-3xl p-2 text-secondary bg-[#353b773d] rounded"></i>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Mail Us:</h1>
            <p>jobkaro12@gmail.com</p>
          </div>
        </div>{" "}
        <div className="flex space-x-5">
          <div>
            <i class="ri-smartphone-fill  text-3xl p-2 text-secondary bg-[#353b773d] rounded"></i>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Call Us:</h1>
            <p>9554943322</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
