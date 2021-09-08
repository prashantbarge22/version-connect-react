import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FarmerSignUp from "./components/farmer_signup" 
import CompanySignUp from "./components/company_signup" 
import {BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Welcome from "./components/welcome"
import FarmerLogin from "./components/farmer_login"
import FarmerHome from "./components/farmer_home"
import CompanyLogin from "./components/company_login";
import CompanyItems from "./components/company_items";




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
      <Route path="/company/signup" exact>
        <CompanySignUp></CompanySignUp>
      </Route>

      <Route path="/company" exact>
        <CompanyItems></CompanyItems>
      </Route>

    
      <Route path="/farmer/login" exact>
       <FarmerLogin></FarmerLogin>
      </Route>
      <Route path="/farmer" exact>
      <FarmerHome></FarmerHome>
      </Route>
      <Route path="/company/login" exact>
       <CompanyLogin></CompanyLogin>
      </Route>
    </Switch>
  </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

