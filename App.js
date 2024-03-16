import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import PatientRegister from "./Pages/Auth/PatientRegister";
import Login from "./Pages/Auth/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patient-register" element={<PatientRegister />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
