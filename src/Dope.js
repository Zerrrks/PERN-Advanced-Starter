import React, { Fragment, useState, useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import { toast } from "react-toastify";

//components

import Log from "./test/Login";
import Reg from "./test/Register";
import ProfilePage from "./views/ProfilePage/ProfilePage";
import HomePage from "./views/HomePage/HomePage";
//import Dash from "./test/dashboard/Dash";

toast.configure();

function Dope() {
  const checkAuthenticated = async () => {
    try {
      const res = await fetch("http://localhost:5000/authentication/verify", {
        method: "POST",
        headers: { jwt_token: localStorage.token }
      });

      const parseRes = await res.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    checkAuthenticated();
  }, []);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = boolean => {
    setIsAuthenticated(boolean);
  };

  return (
    <Fragment>
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={props =>
                !isAuthenticated ? (
                  <HomePage {...props} />
                ) : (
                  <Redirect to="/profile" />
                )
              }
            />
            <Route
              exact
              path="/log"
              render={props =>
                !isAuthenticated ? (
                  <Log {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/profile" />
                )
              }
            />
            <Route
              exact
              path="/reg"
              render={props =>
                !isAuthenticated ? (
                  <Reg {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/profile" />
                )
              }
            />
            <Route
              exact
              path="/profile"
              render={props =>
                isAuthenticated ? (
                  <ProfilePage {...props} setAuth={setAuth} />
                ) : (
                  <Redirect to="/log" />
                )
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default Dope;
