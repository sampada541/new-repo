// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import PatientRegistration from "./pages/PatientRegistration.jsx";
import DoctorRegistration from "./pages/DoctorRegistration.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ScheduleAppointment from "./pages/ScheduleAppointment.jsx";
import PatientProfile from "./pages/patient/PatientProfile.jsx";
import PatientDashboard from "./pages/patient/PatientDashboard.jsx";
import Appointments from "./pages/patient/Appointments.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-register" element={<PatientRegistration />} />
        <Route path="/doctor-register" element={<DoctorRegistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/patient-register" element={<PatientRegistration />} />
        <Route path="/doctor-register" element={<DoctorRegistration />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/schedule-appointment" element={<ScheduleAppointment />} />
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
