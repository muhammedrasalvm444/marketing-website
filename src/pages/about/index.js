import React from "react";
import Layout from "../../components/Layouts/Layout";
import Intro from "./intro";
import WhatWeDo from "./what-wedo";
import WhyChooseUs from "./why-choose-us";

const About = () => {
  return (
    <Layout>
      <div className="">
        <Intro />
        <WhatWeDo />
        <WhyChooseUs />
      </div>
    </Layout>
  );
};

export default About;
