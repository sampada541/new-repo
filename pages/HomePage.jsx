import React from "react";
import Layout from "./../components/Layout/Layout";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-5" style={{ color: "#007bff" }}>Welcome To CureConnect</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/back1.jpg"
                  alt="First slide"
                  style={{ objectFit: "cover", width: "100%", height: "300px" }} // Adjusted dimensions
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/back2.jpg"
                  alt="Second slide"
                  style={{ objectFit: "cover", width: "100%", height: "300px" }} // Adjusted dimensions
                />
              </Carousel.Item>
              {/* Add more Carousel.Item for additional images */}
            </Carousel>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6 mb-4">
            <Card className="bg-light">
              <Card.Body>
                <Card.Title>Major Services Offered</Card.Title>
                <Card.Text>
                  {/* Add your service details here */}
                  Service 1
                </Card.Text>
                <NavLink to="/predict" className="btn btn-primary me-2">Predict Disease</NavLink>
                <NavLink to="/schedule" className="btn btn-primary">Schedule Appointment</NavLink>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 mb-4">
            <Card className="bg-light">
              <Card.Body>
                <Card.Title>Another Service</Card.Title>
                <Card.Text>
                  {/* Add your service details here */}
                  Service 2
                </Card.Text>
                <NavLink to="/predict" className="btn btn-primary me-2">Predict Disease</NavLink>
                <NavLink to="/schedule" className="btn btn-primary">Schedule Appointment</NavLink>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
