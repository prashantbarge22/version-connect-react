import { useHistory } from "react-router-dom";
import Welcomenavbar from "./welcome_navbar";
import Companyfooter from "./company_footer"
import "./footerstyles"


import "../css/login.css";

function Login(){
    const history = useHistory();
  
    function handleClickd() {
      history.push("/farmer/login");
    }
    function handleClickx() {
        history.push("/company/login");
      }
    return( <>
        <div>
        <Welcomenavbar/>
        <div class="container-65">
            <div class="soil">
                <p>Login</p>
            </div>
            <div className="advertisment-34">
            <div class="card-46" style={{width:"25%" }} >
            
            <div class="card-body">
                <h2>For Companies</h2>
                <p class="card-text">We are the market–leading agriculture
                rental platform to connect and help farmers with the right technology and machinary.</p>
                <button class="button-124 button222" onClick={handleClickx}>LogIn</button>
                
            </div>
            <div class="box-8">
                   <p class="card-poi">Don't have an account? Sign up</p>
                   </div>
            
            
            </div>
            <div class="card-46" style={{width:"25%"}} >
            
            <div class="card-body">
                <h2>For Farmers</h2>
                <p class="card-text">Join over 1 lakh farmers,
                   using our services and providing 1.5 billion people with food.Connect with our company.</p>
                   <button class="button-124 button222" onClick={handleClickd}>LogIn</button>
                  
                   
            </div>
            <div class="box-8">
                   <p class="card-poi">Don't have an account? Sign up</p>
                   </div>
            
            
            </div>
            
            </div>

        </div>
        </div>
        <Companyfooter></Companyfooter></>

    )

}
export default Login;