import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import SideBarHOC from "../HOC/SideBarHOC/SideBarHOC";
import Login from "../components/loginpage";
import Clients from "../components/Clients";
import Onboarding from "../components/Onboarding";

function Navs() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route
            path="/clients"
            element={
              <SideBarHOC>
                <Clients />
              </SideBarHOC>
            }
          />
          <Route
            path="/onboarding"
            element={
              <SideBarHOC>
                <Onboarding />
              </SideBarHOC>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
