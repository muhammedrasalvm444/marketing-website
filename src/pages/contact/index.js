import React from "react";
import Layout from "../../components/Layouts/Layout";
import Address from "./address";
import Form from "./form";

const Contact = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-20 px-32 my-32 sm:px-4 sm:grid-cols-1">
        <Address />
        <Form />
      </div>
      <div className="flex justify-center border-b-2 ">
        <div className="p-5 text-center border-2 border-b-0 shadow">
          <h1 className="text-3xl">Design and Developed by</h1>
          <h1 className="text-2xl">Muhammed Rasal vm</h1>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
