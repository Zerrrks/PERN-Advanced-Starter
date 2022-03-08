import React from "react";
import { render } from "react-dom";
import store from "./store/index";
import App from './App';
//import Dope from './Dope';

// Easy access to the redux store for dev
// window.store = store;

/*render(
  <Dope />,
   document.getElementById("root")
);*/

render(
  <App store={store} />,
  document.getElementById("root")
);
