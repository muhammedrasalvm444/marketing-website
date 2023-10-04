import React from "react";
import Layout from "../../components/Layouts/Layout";
import Intro from "./Intro";
import MarketingSpecialization from "./MarketingSpecialization";
import WhyMarketing from "./why-marketing";

const Home = () => {
  return (
    <Layout>
      <div className="px-32 md:px-3">
        <Intro />
        <MarketingSpecialization />
        <WhyMarketing />
      </div>
    </Layout>
  );
};

export default Home;
