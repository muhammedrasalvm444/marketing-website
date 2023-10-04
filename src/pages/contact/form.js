import React from "react";

const Form = () => {
  return (
    <div>
      <form className="flex flex-col space-y-6 sm:space-y-10">
        <h1 className="mb-5 text-4xl font-semibold text-primary sm:text-5xl">
          Sent a Message
        </h1>
        <div className="flex space-x-10 sm:flex-col sm:space-x-0 sm:space-y-10">
          <input
            required
            name="first_name"
            placeholder="First Name"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg sm:py-4 sm:px-6 bg-blue-50 focus:outline-none"
          ></input>
          <input
            required
            name="last_name"
            placeholder="Last Name"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg sm:py-4 sm:px-6 bg-blue-50 focus:outline-none"
          ></input>
        </div>
        <div className="flex space-x-10 sm:flex-col sm:space-x-0 sm:space-y-10">
          <input
            required
            name="Email"
            placeholder="Email"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg sm:py-4 sm:px-6 bg-blue-50 focus:outline-none"
          ></input>
          <input
            required
            name="phone"
            placeholder="Phone"
            className="w-full px-6 py-2 text-gray-800 border rounded-lg sm:py-4 sm:px-6 bg-blue-50 focus:outline-none"
          ></input>
        </div>
        <div className="flex items-center">
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Message"
            className="items-center w-full px-4 py-3 text-gray-800 rounded-lg sm:py-4 sm:px-6 bg-blue-50 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            name="submit"
            placeholder="Submit"
            className="px-10 py-5 text-3xl text-white rounded-lg font-large bg-secondary"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
