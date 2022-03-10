import { useHistory } from "react-router-dom";
import "../css/company_signup_page.css"
import services from "../services/services";
function Company_SignUp_Page(){
    function handleClicktt() {
        history.push("/company/signup");
      }
      function handleClickyy() {
        history.push("/company/login");
      }
    let history = useHistory();

   const onSubmit= (props)=>{
       props.preventDefault();
    const formData = new FormData();
    formData.append("user_name",props.target.user_name.value);
    formData.append("company_name",props.target.company_name.value);
    formData.append("email",props.target.email.value);
    formData.append("phone",props.target.phone.value);
    formData.append("company_registration",props.target.company_registration.value);
    formData.append("located_based",props.target.located_based.value);
    formData.append("password",props.target.password.value);
    formData.append("file",props.target.file.files[0]);

    //    const company ={
    //        user_name:props.target.user_name.value,
    //        company_name:props.target.company_name.value,
    //        email:props.target.email.value,
    //        phone:props.target.phone.value,
    //        company_registration:props.target.company_registration.value,
    //        located_based:props.target.located_based.value,
    //        password:props.target.password.value,
    //        file:props.target.file.files[0]
    //    }

       console.log(formData);
       services.companySignUp(formData).then(result=>{
           console.log(result);
          if(result.data.error){
              alert(result.data.data);
          }else{
              history.push("/company/login")
          }
       }).catch(err=>{
           console.log(err);
       })
    }

    return(
        <div className="wrapper-9">
             <div class="blp">
            <p class="bnm">Vision Upkaran</p>
            <p class="man">For Companies</p>
            <p>Rent out machinary and tools.</p>
            </div>
          
                
                <form className="form-wrapper-9" onSubmit={(props)=>{onSubmit(props)}}>
                <div class="god">
                <button class="button-998 button340" onClick={handleClicktt}>Sign Up</button>
                <button class="button-998 button341" onClick={handleClickyy} >Log In</button>
                </div>
                
                <div className="user_name">
                <label htmlfor="user_name">User Name</label>
                        <input type="user_name"  id="user_name" name="user_name" placeholder="User-Name"/>
                </div>
                <div className="company_name">
                <label htmlfor="company_name">Company Name</label>
                        <input type="company_name"  id="company_name" name="company_name" placeholder="Company-Name"/>
                </div>
                
                    <div className="email">
                    <label htmlfor="email">Email</label>
                        <input type="email"  id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="phone">
                    <label htmlfor="phone">Mobile Number</label>
                        <input type="numbber"  id="phone" name="phone" placeholder="Mobile Number"/>
                    </div>
                    <div className="company_registration">
                    <label htmlfor="company_registration">Company Registration</label>
                        <input type="company_registration" id="company_registration" name="company_registration" placeholder="Company Registration"/>
                    </div>

                    
                    

                    <div className="located_based">
                    <label htmlfor="located_based">Located Based</label>
                        <input type="located_based" id="located_based" name="located_based" placeholder="Location"/>

                    </div>


                    <div className="mbb-3">
                             <input id="inputGroupFile01" type="file" id="file"  name="file"className="custom-file-input" />
                              
                    </div>

                    <div className="password">
                    <label htmlfor="password">Password</label>
                        <input type="password" autoComplete="false"  id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>

                    <div className="confirm-password">
                    <label htmlfor="confirm-password">Confirm Password</label>
                        <input type="password" autoComplete="false" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>

                    


                    <div className="createAccount">
              <button type="submit">Sign Up</button>
              
            </div>
                    </form>
                    <div class="terms">
            <p>By signing up you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
                
          </div>
       
    )
}

export default  Company_SignUp_Page;