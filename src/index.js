import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FarmerSignUp from "./components/farmer_signup" 
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from "./components/welcome"


ReactDOM.render(
  <Router>
  <React.StrictMode>
    <Switch>
      <Route path="/" exact>
        <Welcome></Welcome>
      </Route>
      <Route path="/farmer/signup" exact>
        <FarmerSignUp></FarmerSignUp>
      </Route>
    </Switch>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

