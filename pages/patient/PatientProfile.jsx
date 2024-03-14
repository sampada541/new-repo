import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import PatientDashboardMenu from "../../components/Layout/PatientDashboardMenu";

const PatientProfile = () => {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    // Fetch patient profile data from the backend
    const fetchProfileData = async () => {
      try {
        const { data } = await axios.get("/api/patient/profile"); // Replace '/api/patient/profile' with your backend endpoint
        setProfileData(data);
      } catch (error) {
        console.error("Error fetching patient profile:", error);
      }
    };

    fetchProfileData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile({
      ...updatedProfile,
      [name]: value,
    });
  };

  const handleUpdateProfile = async () => {
    try {
      // Send updated profile data to the backend for updating
      await axios.put("/api/patient/profile", updatedProfile); // Replace '/api/patient/profile' with your backend endpoint
      // Update local profile data
      setProfileData(updatedProfile);
      // Exit editing mode
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating patient profile:", error);
    }
  };

  return (
    <Layout title={"Your Profile"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <PatientDashboardMenu />
          </div>
          <div className="col-md-9">
            <div className="profile-details">
              <h1 className="text-center">Your Profile</h1>
              <div className="profile-info">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={updatedProfile.name || profileData.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.name}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={updatedProfile.phone || profileData.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.phone}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email:</label>
                  {isEditing ? (
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={updatedProfile.email || profileData.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.email}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="gender"
                      name="gender"
                      value={updatedProfile.gender || profileData.gender}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.gender}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="age">Age:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="age"
                      name="age"
                      value={updatedProfile.age || profileData.age}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.age}</p>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="location">Location:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="location"
                      name="location"
                      value={updatedProfile.location || profileData.location}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <p>{profileData.location}</p>
                  )}
                </div>
                <div className="form-group">
                  <label>Photo:</label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="photo"
                      name="photo"
                      value={updatedProfile.photo || profileData.photo}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <img
                      src={profileData.photo}
                      alt="Patient"
                      className="img-fluid"
                    />
                  )}
                </div>
              </div>
              <div className="form-group">
                {isEditing ? (
                  <button
                    type="button"
                    className="btn btn-primary update-button"
                    onClick={handleUpdateProfile}
                  >
                    Update
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary edit-button"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .profile-details {
            margin-top: 20px;
          }

          .profile-info {
            max-width: 400px;
            margin: auto;
          }

          .form-group {
            margin-bottom: 20px;
          }

          .form-group label {
            display: block;
            font-weight: bold;
          }

          .form-control {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }

          .form-control:focus {
            outline: none;
            border-color: #007bff;
          }

          .btn {
            padding: 10px 20px;
            border-radius: 4px;
            cursor: pointer;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            color: white;
          }

          .btn-primary:hover {
            background-color: #0056b3;
          }

          .edit-button {
            background-color: #28a745;
            margin: auto;
          }

          .edit-button:hover {
            background-color: #218838;
          }
        `}
      </style>
    </Layout>
  );
};

export default PatientProfile;
