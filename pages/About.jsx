import React from "react";
import Layout from "./../components/Layout/Layout.jsx";

const About = () => {
  return (
    <Layout>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/back1.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            This is Cureconnect.Healthcare app.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
