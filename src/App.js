import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './views/HomePage/HomePage.js';
import LoginPage from './views/LoginPage/LoginPage.js';
//import Components from './views/Components/Components.js';
import LandingPage from './views/LandingPage/LandingPage.js';
import ProfilePage from './views/ProfilePage/ProfilePage.js';

import ScrollToTop from "components/ScrollTop/ScrollTop.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/HomeFooter.jsx";
import Log from './views/Test/Login.js';
import Reg from './views/Test/Register.js';

import "assets/scss/material-kit-react.scss";

// const indexRoutes = [
//   { path: "/login", name: "LoginPage", component: LoginPage },
//   { path: "/about", name: "AboutPage", component: About },
//   { path: "/", name: "Components", component: App }
// ];

// <Route path="/components" component={Components} />

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      <Header
        color="transparent"
        brand="Storage Rents"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "dark"
        }}
      />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/reg" component={Reg} />
        <Route exact path="/log" component={Log} />
        <Route path="/login" component={LoginPage} />
        <Route path="/landing" component={LandingPage} />
        <Route path="/profile" component={ProfilePage} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
);

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
