import React, { useState, useEffect } from "react";
import PatientDashboardMenu from "../../components/Layout/PatientDashboardMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const Appointments = () => {
  const [auth] = useAuth();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("/api/appointments", {
          params: {
            userId: auth.user.id // Assuming you have a user ID in your auth context
          }
        });
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [auth.user.id]);

  return (
    <Layout title={"Appointments"}>
      <div className="container-fluid p-3 m-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <PatientDashboardMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">Your Appointments</h1>
            <div className="border shadow p-3">
              <div className="row">
                <div className="col">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Doctor</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {appointments.map((appointment, index) => (
                        <tr key={index}>
                          <td>{appointment.date}</td>
                          <td>{appointment.time}</td>
                          <td>{appointment.doctor}</td>
                          <td>{appointment.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Appointments;
