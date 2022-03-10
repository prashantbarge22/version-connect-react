import { useHistory } from "react-router-dom";
import Loginnavbar from "./login_navbar";
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
        <Loginnavbar/>
        <div class="container-68">
            <div class="soil6">
                Login
            </div>
            <div className="advertisment-34">
            <div class="card-46" style={{width:"25%" }} >
            
            <div class="card-body">
                <h2>For Institutions</h2>
                <p class="card-text">We are the market–leading alumni-tracking platform to help connect alumni with their institutions.</p>
                <button class="button-144 button222" onClick={handleClickx}>LogIn</button>
                
            </div>
            <div class="box-8">
                   <p class="card-poi">Don't have an account? Sign up</p>
                   </div>
            
            
            </div>
            <div class="card-46" style={{width:"25%"}} >
            
            <div class="card-body">
                <h2>For Alumni</h2>
                <p class="card-text">Join your ex-batchmates, rebuild your bonds and relish your memories and reconnect with your institution.</p>
                   <button class="button-144 button222" onClick={handleClickd}>LogIn</button>
                  
                   
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