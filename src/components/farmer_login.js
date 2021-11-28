import { useHistory } from "react-router-dom";
import "../css/farmer_login.css"
import service from "../services/services"
import Welcomenavbar from "./welcome_navbar";
function FarmerLogin(){
    function handleClicklk() {
        history.push("/farmer/signup");
      }
      function handleClickd() {
        history.push("/farmer/login");
      }


    let history = useHistory();

   function login(event){
        event.preventDefault();
        const user = {
            email:event.target.email.value,
            password:event.target.password.value,
        }
        service.farmerLogin(user).then(result=>{
            if(result.data.length>0){
                history.push("/farmer")
            }else{
                alert("User not Registered")
            }
           
        })
    }

    return(<>
        <Welcomenavbar/>

        <div className="wrapper1">
        <div class="blp">
            <p class="bnm">Vision Upkaran</p>
            <p class="man">For Farmers</p>
            <p>Rent machinary and tools.</p>
            </div>
        <div className="form-wrapper1">
        <div class="god">
                <button class="button-129 button223" onClick={handleClicklk}>Sign Up</button>
                <button class="button-129 button229" onClick={handleClickd}>Log In</button>
                </div>
        
        <form onSubmit={(e)=>{login(e)}}>
        <div className="email1">
            <label htmlfor="email" >Email</label>

            <input
             placeholder="Email"
             type="email" 
             name="email" />
            
        </div>
        <div className="password1">
            <label htmlfor="password"  >Password</label>
            <input
             placeholder="Password"
             type="password" 
             name="password" 

            />
        </div>
        <div className="createAccount1">
          <button type="submit">Login</button>
          
        </div>
        </form>
        </div>
    </div></>

    
    )


}
export default FarmerLogin;