import React, { useState } from "react";
import Layout from "../../Components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../Styles/AuthStyles.css";
import { useAuth } from "../../Context/Auth";
import { RingLoader } from "react-spinners";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoggingIn(true);

      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        setAuth({
          ...auth,
          patient: res.data.patient,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <Layout title="Login - SynthGad">
      <div
        className="form-container"
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h4 className="title">LOGIN FORM</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="useremail"
              placeholder="Enter Your Email "
              required
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
            />
          </div>
          <div className="mb-3">
            <button
              type="button"
              className="btn forgot-btn"
              onClick={() => {
                navigate("/forgot-password");
              }}
            >
              Forgot Password
            </button>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginTop: "10px" }}
          >
            {isLoggingIn ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <RingLoader color="hsla(283, 87%, 48%, 1)" size={35} />
                <span style={{ marginLeft: "5px" }}> LOGGING IN...</span>
              </div>
            ) : (
              "LOGIN"
            )}
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
