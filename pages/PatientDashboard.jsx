import React from "react";
import Layout from "../components/Layout/Layout";
import { useAuth } from "../context/auth";

function Dashboard() {
  const [auth] = useAuth();
  const { patient } = auth;

  return (
    <Layout title="Dashboard">
      <div>
        <h2>patient Data</h2>
        <table>
          <thead>
            <tr>
              <th>patientname</th>
              <th>Email</th>
              <th>Phone No</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{patient.name}</td>
              <td>{patient.email}</td>
              <td>{patient.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}

export default Dashboard;
