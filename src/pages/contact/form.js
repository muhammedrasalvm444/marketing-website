import React from "react";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col space-y-6">
        <h1 className="mb-5 text-4xl font-semibold text-primary">
          Sent a Message
        </h1>
        <div className="flex space-x-10 ">
          <input
            name="first_name"
            placeholder="First Name"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg bg-blue-50 focus:outline-none"
          ></input>
          <input
            name="last_name"
            placeholder="Last Name"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg bg-blue-50 focus:outline-none"
          ></input>
        </div>
        <div className="flex space-x-10">
          <input
            name="Email"
            placeholder="Email"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg bg-blue-50 focus:outline-none"
          ></input>
          <input
            name="phone"
            placeholder="Phone"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg bg-blue-50 focus:outline-none"
          ></input>
        </div>
        <div className="flex items-center">
          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="items-center w-full px-4 py-3 text-gray-800 rounded-lg bg-blue-50 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            name="submit"
            placeholder="Submit"
            className="px-10 py-5 font-medium text-white rounded-lg bg-secondary"
          >
            {" "}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
