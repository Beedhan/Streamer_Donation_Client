import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/Authcontext";
import DashboardNav from "../components/Dashboard/DashboardNav";
import Dashboard from "../components/Dashboard/DashboardTab/Dashboard";
import AuthService from "../services/AuthService";
import {BrowserRouter as Router, Link, Switch,Route } from "react-router-dom";
import DashboardAlerts from "../components/Dashboard/Alerts/DashboardAlerts";
import DashboardDonations from "../components/Dashboard/DashboardDonations";
const DashBoardPage = () => {
  const { setUserData, userData } = useContext(AuthContext);

  useEffect(() => {
    AuthService.userData().then((d) => setUserData(d));
  }, []);
  return (
    <div style={{ backgroundColor: "#222831" }}>
      {userData && (
        <>
          <DashboardNav />
          <Switch>
           <Route exact path="/dashboard/" component={Dashboard} />
           <Route exact path="/dashboard/donations" component={DashboardDonations} />
           <Route exact path="/dashboard/alerts" component={DashboardAlerts} />
          </Switch>
        </>
      )}
    </div>
  );
};

export default DashBoardPage;
