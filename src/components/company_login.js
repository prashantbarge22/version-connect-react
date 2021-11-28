import { useHistory } from "react-router-dom";
import "../css/company_login.css"
import service from "../services/services"
import Welcomenavbar from "./welcome_navbar";

function CompanyLogin(){

    let history = useHistory();

   function login(event){
        event.preventDefault();
        const company = {
            email:event.target.email.value,
            password:event.target.password.value,
        }
        service.companyLogin(company).then(result=>{
            if(result.data.length>0){
                history.push("/company")
            }else{
                alert("Company not Registered")
            }
           
        })
    }

    return(<>
        <Welcomenavbar/>
        <div className="wrapper">
        <div class="blp">
            <p class="bnm">Vision Upkaran</p>
            <p class="man">For Companies</p>
            <p>Rent out machinary and tools.</p>
            </div>
            <div className="form-wrapper">
            <div class="god">
                <button class="button-129 button222" >Sign Up</button>
                <button class="button-129 button228" >Log In</button>
                </div>
            <form onSubmit={(e)=>{login(e)}}>
            <div className="email">
                <label htmlfor="email" >Email</label>

                <input
                 placeholder="Email"
                 type="email" 
                 name="email" />
                
            </div>
            <div className="password">
                <label htmlfor="password"  >Password</label>
                <input 
                 placeholder="Password"
                 type="password" 
                 name="password" 

                />
            </div>
            <div className="createAccount">
              <button type="submit">Login</button>
              
            </div>
            </form>
            </div>
        </div></>
    )

}
export default CompanyLogin;