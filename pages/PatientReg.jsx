import React, { useState } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/AuthStyles.css";

import { RingLoader } from "react-spinners";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const [gender, setGender] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false); // State to track whether OTP is sent
  const [isRegistering, setIsRegistering] = useState(false); // State to track whether registration is in progress
  const navigate = useNavigate();

  // Function to generate OTP and send it to the user's email
  const generateAndSendOtp = async () => {
    try {
      setIsRegistering(true);
      // Disable all fields once OTP is sent
      setNameDisabled(true);
      setEmailDisabled(true);
      setPasswordDisabled(true);
      setPhoneDisabled(true);
      setAgeDisabled(true);
      setLocationDisabled(true);
      setGenderDisabled(true);

      const res = await axios.post("/api/v1/auth/otp-gen", {
        name,
        phone,
        email,
        password,
        gender,
        age,
        location,
      });
      if (res && res.data.success) {
        toast.success("OTP sent to your email");
        setIsOtpSent(true);
      } else {
        toast.error(res.data.message);
        // If OTP sending failed, enable the fields again
        setNameDisabled(false);
        setEmailDisabled(false);
        setPasswordDisabled(false);
        setPhoneDisabled(false);
        setAgeDisabled(false);
        setLocationDisabled(false);
        setGenderDisabled(false);
      }
    } catch (error) {
      //console.log(error);
      toast.error("Something went wrong");
      setNameDisabled(false);
      setEmailDisabled(false);
      setPasswordDisabled(false);
      setPhoneDisabled(false);
      setAgeDisabled(false);
      setLocationDisabled(false);
      setGenderDisabled(false);
    } finally {
      setIsRegistering(false);
    }
  };

  // Function to handle the registration
  const handleRegistration = async (e) => {
    e.preventDefault();

    // Check if OTP is sent and entered
    if (!isOtpSent || !otp) {
      toast.error("Please enter the OTP sent to your email.");
      return;
    }

    try {
      setIsRegistering(true); // Start registration process

      const res = await axios.post("/api/v1/auth/register", {
        name,
        phone,
        email,
        password,
        gender,
        age,
        location,

        otp,
      });
      await new Promise((resolve) => setTimeout(resolve, 2000));

      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      //console.log(error);
      toast.error("Something went wrong");
    } finally {
      setIsRegistering(false); // Registration process completed
    }
  };

  // Define disabled state for each field
  const [nameDisabled, setNameDisabled] = useState(false);
  const [phoneDisabled, setPhoneDisabled] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [passwordDisabled, setPasswordDisabled] = useState(false);
  const [ageDisabled, setAgeDisabled] = useState(false);
  const [genderDisabled, setGenderDisabled] = useState(false);
  const [locationDisabled, setLocationDisabled] = useState(false);

  return (
    <Layout title="Patient Registration">
      <div
        className="form-container"
        style={{ minHeight: "90vh", alignitems: "center" }}
      >
        <form onSubmit={handleRegistration}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="username"
              placeholder="Enter Your Name"
              required
              autoFocus
              disabled={nameDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="userphone"
              placeholder="Enter Your Phone"
              required
              disabled={phoneDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="useremail"
              placeholder="Enter Your Email"
              required
              disabled={emailDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
              disabled={passwordDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="form-control"
              id="gender"
              placeholder="Enter Your Gender"
              required
              disabled={genderDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="form-control"
              id="user age"
              placeholder="Enter Your Age"
              required
              disabled={ageDisabled}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-control"
              id="location"
              placeholder="Your Location"
              required
              disabled={locationDisabled}
            />
          </div>

          {isOtpSent ? (
            <div className="mb-3">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="form-control"
                id="exampleInputOtp"
                placeholder="Enter OTP"
                required
              />
              <button
                onClick={handleRegistration}
                type="submit"
                className="btn btn-primary"
              >
                {isRegistering ? (
                  <>
                    <RingLoader color="hsla(283, 87%, 48%, 1)" size={35} />
                    <span style={{ marginLeft: "5px" }}> REGISTERING...</span>
                  </>
                ) : (
                  "REGISTER"
                )}
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={generateAndSendOtp}
              className={`btn btn-primary ${isRegistering ? "disabled" : ""}`}
              disabled={isRegistering}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {isRegistering ? (
                <>
                  <RingLoader color="hsla(283, 87%, 48%, 1)" size={35} />
                  <span style={{ marginLeft: "5px" }}> SENDING OTP...</span>
                </>
              ) : (
                "SEND OTP"
              )}
            </button>
          )}
        </form>
      </div>
    </Layout>
  );
};

export default Register;
