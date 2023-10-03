import React from "react";
import Layout from "../../components/Layouts/Layout";
import Intro from "./Intro";
import ClientsList from "./clients-list";
import Numbers from "./Numbers";

const Clients = () => {
  return (
    <Layout>
      <div>
        <Intro />
        <ClientsList />
        <Numbers />
      </div>
    </Layout>
  );
};

export default Clients;
