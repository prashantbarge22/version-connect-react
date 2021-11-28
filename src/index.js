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
import CompanyHome from "./components/company_home";
import AboutUs from "./components/about_us";
import ContactUs from "./components/contact_us";
import Login from "./components/login";
import SignUp from "./components/signup";
import Store from "./components/store";


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

      <Route path="/companyty" exact>
        <CompanyItems></CompanyItems>
      </Route>
      
      <Route path="/company" exact>
        <CompanyHome></CompanyHome>
      </Route>
      <Route path="/aboutus" exact>
       <AboutUs></AboutUs>
      </Route>
      <Route path="/contactus" exact>
       <ContactUs></ContactUs>
      </Route>
      <Route path="/login" exact>
       <Login></Login>
      </Route>
      <Route path="/signup" exact>
       <SignUp></SignUp>
      </Route>
      <Route path="/store" exact>
       <Store></Store>
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

