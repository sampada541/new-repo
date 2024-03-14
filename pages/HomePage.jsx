import React from 'react';
import { Link } from 'react-router-dom';
import Typewriter from "typewriter-effect";
import Layout from '../components/Layout/Layout';
import "../styles/HomePage.css";

function HomePage() {
  return (
    <Layout>
      <div className="landing-page">
        <div className="container">
          <div className="welcome-section">
            <h1 className="title" style={{ color: 'white', marginTop:'0px' ,textAlign: 'left' }}>
              <Typewriter
                options={{
                  strings: ['Welcome to CureConnect!'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="aim-description">Connecting patients and doctors for better healthcare.</p>
            <div className="prediction-box">
              
              <Link to="/predict" className="prediction-link">
                <button className="prediction-button-small">Predict</button>
              </Link>
            </div>
          </div>
          {/* 
          <div className="user-actions">
            <div className="patient-actions">
              <h2 className="action-title">Patients</h2>
              <p className="action-description">If you are a patient, please <Link to="/patient-register" style={{ color: 'white' }}>Register</Link> or <Link to="/login" style={{ color: 'white' }}>Login</Link> to schedule an appointment.</p>
            </div>
            <div className="doctor-actions">
              <h2 className="action-title">Doctors</h2>
              <p className="action-description">If you are a doctor, please <Link to="/doctor-register" style={{ color: 'white' }}>Register</Link> or <Link to="/login" style={{ color: 'white' }}>Login</Link> to view appointments.</p>
            </div>
          </div> 
          */}
        </div>
      </div>
    </Layout>
  );
}

export default HomePage;
