import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Login from "../components/loginpage"


function Navs() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />

          {/* <Route
            path="/candidate/auth"
            element={<AuthPage type="candidate" />}
          /> */}

          
          
        </Routes>
      </Router>
    </div>
  );
}

export default Navs;
