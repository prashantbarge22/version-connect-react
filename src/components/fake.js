import { useHistory } from "react-router-dom";
import "../css/company_signup_page.css"
import services from "../services/services";
import SignUp from "./signup";
function Company_SignUp_Page(){

    let history = useHistory();

    const onSubmit= (props)=>{
        props.preventDefault();
    const signup ={
    user_name:props.target.user_name.value,
    company_name:props.target.company_name.value,
    email:props.target.email.value,
    phone:props.target.phone.value,
    company_registration:props.target.company_registration.value,
    located_based:props.target.located_based.value,
    password:props.target.password.value,
    file:props.target.filename.file[0],
    }

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

    console.log(signup);
    services.companySignUp(signup).then(result=>{
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

    return(<>
        <div className="wrapper-9">
        <div class="blp-9">
            <p class="bnm">Vision Upkaran</p>
            <p class="man">For Companies</p>
            <p>Rent out machinary and tools.</p>
            </div>
            <form className="form-wrapper-9"  onSubmit={(props)=>{onSubmit(props)}}>
            
            
                <div className="user_name">
                    <label htmlfor="user_name">User Name</label>

                    <input
                    placeholder="User-Name"
                    type="user_name"
                    name="user_name"/>
                </div>    
                <div className="company_name">
                    <label htmlfor="company_name">Company Name</label>

                    <input
                    placeholder="Company-Name"
                    type="company_name"
                    name="company_name"/>
                </div>  
            <div className="email">
                <label htmlfor="email" >Email</label>

                <input
                 placeholder="Email"
                 type="email" 
                 name="email" />
                
            </div>
            <div className="phone">
                <label htmlfor="phone" >Phone</label>

                <input
                 placeholder="Phone"
                 type="number" 
                 name="phone" />
                
            </div>
            <div className="company_registration">
                <label htmlfor="company_registration" >Company-Registration</label>

                <input
                 placeholder="Company-Registration"
                 type="company_registration" 
                 name="company_registration" />
                
            </div>
            <div className="located_based">
                <label htmlfor="located_based" >Location-Based</label>

                <input
                 placeholder="Located-Based"
                 type="located_based" 
                 name="located_based" />
                
            </div>
            <div className="custom-file-input">
                <label htmlfor="file" >Choose-File</label>

                <input
                 placeholder="file"
                 type="file" 
                 id="inputGroupFile01"
                 name="file" />
                
            </div>
            <div className="password">
                <label htmlfor="password"  >Password</label>
                <input 
                 placeholder="Password"
                 type="password" 
                 name="password" 
                 autoComplete="false"

                />
            </div>
            <div className="confirm-password">
                <label htmlfor="password"  > Confirm-Password</label>
                <input 
                 placeholder="Confirm-Password"
                 type="password" 
                 name="confirmpwd" 
                 id="confirmpwd"
                 autoComplete="false"

                />
            </div>
            <button type="submit" id="submit"className="btn btn-primary">Submit</button>
            </form>
            
            <div class="terms">
            <p>By signing up you agree to our Terms of Service and Privacy Policy
                </p>
            </div>
        </div></>
       
    )
}

export default  Company_SignUp_Page;