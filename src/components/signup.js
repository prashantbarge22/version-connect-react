import { useHistory } from "react-router-dom";
import Signupnavbar from "./signup_navbar";
import Companyfooter from "./company_footer"
import "./footerstyles"


import "../css/signup.css";

function SignUp(){
    const history = useHistory();
  
    function handleClicklk() {
      history.push("/farmer/signup");
    }
    function handleClicklp() {
        history.push("/company/signup");
      }
    return( <>
        <div>
        <Signupnavbar/>
        <div class="container-65">
            <div class="soil">
                <p>Sign Up</p>
            </div>
            <div className="advertisment-34">
            <div class="card-46" style={{width:"25%" }} >
            
            <div class="card-body">
                <h2>For Companies</h2>
                <p class="card-text">We are the market–leading agriculture
                rental platform to connect and help farmers with the right technology and machinary.</p>
                <button class="button-124 button222" onClick={handleClicklp}>Sign Up </button>
                
            </div>
            <div class="box-8">
                   <p class="card-poi">Already have an account? Login</p>
                   </div>
            
            
            </div>
            <div class="card-46" style={{width:"25%"}} >
            
            <div class="card-body">
                <h2>For Farmers</h2>
                <p class="card-text">Join over 1 lakh farmers,
                   using our services and providing 1.5 billion people with food.Connect with our company.</p>
                   <button class="button-124 button222" onClick={handleClicklk}>Sign Up</button>
                  
                   
            </div>
            <div class="box-8">
                   <p class="card-poi">Already have an account? Login</p>
                   </div>
            
            
            </div>
            
            </div>

        </div>
        </div>
        <Companyfooter></Companyfooter></>

    )

}
export default SignUp;