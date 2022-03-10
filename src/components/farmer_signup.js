
import Welcomenavbar from "./welcome_navbar";
import { useHistory } from "react-router-dom";
import "../css/farmer_signup_page.css"
import services from "../services/services";
function Farmer_SignUp_Page(){

    let history = useHistory();
    function handleClicklk() {
        history.push("/farmer/signup");
      }
      function handleClickd() {
        history.push("/farmer/login");
      }


  
   const onSubmit= (props)=>{
       props.preventDefault();
       const farmer ={
           firstname:props.target.firstname.value,
           lastname:props.target.lastname.value,
           email:props.target.email.value,
           phone:props.target.phone.value,
           city:props.target.city.value,
           district:props.target.district.value,
           state:props.target.state.value,
           aadharnumber:props.target.aadhar.value,
           password:props.target.password.value
       }
       services.farmerSignUp(farmer).then(result=>{
          if(result.data.error){
              alert(result.data.data);
          }else{
              history.push("/farmer/login")
          }
       }).catch(err=>{
           console.log(err);
       })
    }

    return(<>
        
        <div className="huhu">
        <div class="blk">
            <p class="bnm">Vision Upkaran</p>
            <p class="man">For Farmers</p>
            <p>Rent machinary and tools.</p>
            </div>
          <div className="box-double">
          
                <div className=" box-134">
                <div class="god">
                <button class="button-126 button222" onClick={handleClicklk}>Sign Up</button>
                <button class="button-126 button228" onClick={handleClickd}>Log In</button>
                </div>
              
                <form className="form" onSubmit={(props)=>{onSubmit(props)}}>
                <div className="name">
                <div className="mb-3">
                      
                        <input type="text"  id="firstname" name="firstname" placeholder="First-Name"/>
                </div>
               <div className="mb-3">
                        
                        <input type="text"  id="lastname" name="lastname" placeholder="Last-Name"/>
                </div>
                </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email"  placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="phone" name="phone" placeholder="Mobile Number"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="aadharno." name="aadhar" placeholder="Aadhar Number"/>
                    </div>
                    <div className="location">
                    <div className="mb-3">
                        <input type="text" className="form-control" id="state" name="state" placeholder="State"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="district" name="district" placeholder="District" />
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="city" name="city" placeholder="city" />
                    </div>
                    </div>
                    <div className="mb-3">
                        <input type="password" autoComplete="false" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" autoComplete="false" className="form-control" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>
                    <div className="Submit8">
          <button type="submit">Sign Up</button>
          
        </div>
                    </form>
                </div>
                
          </div>
        </div></>
    )
}

export default  Farmer_SignUp_Page;