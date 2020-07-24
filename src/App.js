import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DonationPage from "./pages/DonationPage";
import Alerts from "./pages/Alerts";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/LoginPage";
import DashBoard from "./pages/DashBoardPage";
import { AuthContext } from "./context/Authcontext";
import Dashboard from "./components/Dashboard/DashboardTab/Dashboard";

function App() {
  const { user, setUserData, userData, isAuthenticated } = useContext(
    AuthContext
  );
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            
            path="/dashboard/"
            render={() =>
              isAuthenticated ? (
                <DashBoard/>
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route
            
            path="/dashboard/:subPath"
           component={Dashboard}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/widgets/alerts/" component={Alerts} />
          <Route exact path="/donate/:userId" component={DonationPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
