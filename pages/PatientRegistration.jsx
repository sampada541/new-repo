import React, { useState } from "react";
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PatientRegistration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [photo, setPhoto] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent || !otp) {
      console.error("Please enter the OTP sent to your email.");
      return;
    }
    verifyOtp();
  };

  const verifyOtp = async () => {
    try {
      const res = await axios.post('/api/v1/auth/verifyotp', {
        phone,
        otp,
      });

      if (res && res.data.success) {
        registerUser();
      } else {
        console.error('OTP verification failed');
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  };

  const registerUser = async () => {
    try {
      setIsRegistering(true);
      const res = await axios.post('/api/v1/auth/register', {
        name,
        phone,
        email,
        password,
        gender,
        age,
        location,
        photo,
      });
      if (res && res.data.success) {
        console.log(res.data);
        navigate('/login');
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
  
    // Password validation rules
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,16}$/;
    if (!passwordRegex.test(password)) {
      console.error("Password must be 8-16 characters long, contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }
  
    try {
      const res = await axios.post('/api/v1/auth/sendotp', {
        phone,
      });
  
      if (res && res.data.success) {
        console.log("OTP sent successfully");
        setIsOtpSent(true);
      } else {
        console.error('OTP sending failed');
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  return (
    <Layout>
     {/*} <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>*/}
      <div className="form-container">
      <form onSubmit={isOtpSent ? handleOtpSubmit : handleRegistration} className="registration-form">
          <style>
            {`
              *,
              *::before,
              *::after {
                padding: 0;
                margin: 0;
                box-sizing: border-box;
              }

              body {
                background-color: #000112;
                font-family: 'Poppins', sans-serif;
              }

              .background .shape {
                height: 100px; /* Adjust the height */
                width: 100px; /* Adjust the width */
                position: absolute;
                border-radius: 50%;
              }
    
              .shape:first-child {
                background: linear-gradient(
                  #03E5B7,
                  #037ADE
                );
                left: 350px; /* Adjust the position */
                top: 70px; /* Adjust the position */
              }
    
              .shape:last-child {
                background: linear-gradient(
                  to right,
                  #037ADE,
                  #03E5B7
                );
                right: 360px; /* Adjust the position */
                bottom: -230px; /* Adjust the position */
              }

              .form-container {
                position: relative;
                z-index: 1;
                margin-top: 50px; /* Adjust margin top to clear header */
                margin-bottom: 50px;
              }

              form {
                width: 90%;
                max-width: 700px;
                background-color: rgba(255,255,255,0.13);
                border-radius: 10px;
                backdrop-filter: blur(10px);
                border: 2px solid rgba(255,255,255,0.1);
                box-shadow: 0 0 40px rgba(8,7,16,0.6);
                padding: 30px;
                display: flex;
                flex-direction: column;
                justify-content: left;
                align-items: left;
                margin: auto; /* Center the form */
              }

              form * {
                color: #ffffff;
                outline: none;
                border: none;
              }

              form h3 {
                font-size: 24px;
                font-weight: 500;
                line-height: 32px;
                text-align: left;
                margin-bottom: 20px;
              }

              label {
                display: block;
                margin-top: 15px;
                font-size: 16px;
                font-weight: 500;
              }

              input, select {
                width: 100%;
                height: 25px;
                background-color: rgba(255,255,255,0.07);
                border-radius: 13px;
                padding: 0 10px;
                margin-top: 8px;
                font-size: 14px;
                font-weight: 400;
              }

              ::placeholder {
                color: #e5e5e5;
              }

              button {
                margin-top: 30px;
                width: 100%;
                background-color: #ffffff;
                color: #080710;
                padding: 12px 0;
                font-size: 16px;
                font-weight: 600;
                border-radius: 5px;
                cursor: pointer;
              }

              button:hover {
                background: linear-gradient(
                  #616161,
                  #424242
                );
              }
            `}
          </style>
          <h3>Sign up As Patient</h3>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div>
            <label>Phone:</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>
          {isOtpSent && (
            <div>
              <label>OTP:</label>
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
            </div>
          )}
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div>
            <label>Gender:</label>
            <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} required />
          </div>
          <div>
            <label>Age:</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} required />
          </div>
          <div>
            <label>Location:</label>
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </div>
          <div>
            <label>Photo:</label>
            <input type="file" onChange={(e) => setPhoto(e.target.files[0])} required />
          </div>
          <button type="submit" disabled={isRegistering}>{isOtpSent ? "Verify OTP" : "Send OTP"}</button>
        </form>
      </div>
    </Layout>
  );
};

export default PatientRegistration;
