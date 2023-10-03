import React from "react";
import Layout from "../../components/Layouts/Layout";
import Address from "./address";
import Form from "./form";

const Contact = () => {
  return (
    <Layout>
      <div className="grid grid-cols-2 gap-20 px-32 my-32">
        <Address />
        <Form />
      </div>
    </Layout>
  );
};

export default Contact;
