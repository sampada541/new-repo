import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../styles/dreg.css";

const DoctorRegistration = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [yearsOfExp, setYearsOfExp] = useState('');
  const [docPhoto, setDocPhoto] = useState('');
  const [proofOfIdentity, setProofOfIdentity] = useState('');
  const [proofOfAddress, setProofOfAddress] = useState('');
  const [proofOfLicense, setProofOfLicense] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/register', {
        name,
        phone,
        email,
        password,
        speciality,
        yearsOfExp,
        docPhoto,
        proofOfIdentity,
        proofOfAddress,
        proofOfLicense
      });
      if (res && res.data.success) {
        console.log(res.data);
        navigate('/login'); // Navigate to login page after successful registration
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <Layout>
      {/*<div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
        </div>*/}
      <form onSubmit={handleSubmit}>
        <h3>Sign up page (Doctor)</h3>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div>
          <label>Speciality:</label>
          <input type="text" value={speciality} onChange={(e) => setSpeciality(e.target.value)} required />
        </div>
        <div>
          <label>Years of Experience:</label>
          <input type="text" value={yearsOfExp} onChange={(e) => setYearsOfExp(e.target.value)} required />
        </div>
        <div>
          <label>Doctor Photo:</label>
          <input type="file" onChange={(e) => setDocPhoto(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of Identity:</label>
          <input type="file" onChange={(e) => setProofOfIdentity(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of Address:</label>
          <input type="file" onChange={(e) => setProofOfAddress(e.target.files[0])} required />
        </div>
        <div>
          <label>Proof of License:</label>
          <input type="file" onChange={(e) => setProofOfLicense(e.target.files[0])} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default DoctorRegistration;
