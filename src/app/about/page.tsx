//example of server component

import React from "react";
export const metadata = {
  title: "About codevolution",
  description: "Generated by nextjs",
};
const About = () => {
  console.log("About is a server component");
  return <div>Welocme to the About page{new Date().toLocaleTimeString()}</div>;
};

export default About;
