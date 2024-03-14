import React from "react";
import Layout from "../../components/Layout/Layout";
import PatientDashboardMenu from "../../components/Layout/PatientDashboardMenu";
import { useAuth } from "../../context/auth";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={"Dashboard - CureConnect"}>
      <div className="container-flui m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <PatientDashboardMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
