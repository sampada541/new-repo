import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Policy from "./pages/Policy.jsx";
import PagenotFound from "./pages/PagenotFound.jsx";
import PatientRegistration from "./pages/PatientReg.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/Forgotpassword.jsx";
import PredictDisease from "./pages/PredictDisease.jsx";
import PatientDashboard from "./pages/PatientDashboard.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/patient-register" element={<PatientRegistration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/predict-disease" element={<PredictDisease />} />
      <Route path="/patient-dashboard" element={<PatientDashboard />} /> 
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/policy" element={<Policy />} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  );
}

export default App;
