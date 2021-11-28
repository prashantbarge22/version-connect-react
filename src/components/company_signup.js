import { useHistory } from "react-router-dom";
import "../css/company_signup_page.css"
import services from "../services/services";
function Company_SignUp_Page(){

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
          
                
                <form className="form-wrapper-9" onSubmit={(props)=>{onSubmit(props)}}>
                
                <div className="user_name">
                <label htmlfor="user_name">User Name</label>
                        <input type="user_name"  id="user_name" name="user_name" placeholder="User-Name"/>
                </div>
                <div className="company_name">
                <label htmlfor="company_name">Company Name</label>
                        <input type="company_name"  id="company_name" name="company_name" placeholder="Company-Name"/>
                </div>
                
                    <div className="email">
                        <input type="email"  id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mbb-3">
                        <input type="numbber" className="form-control" id="phone" name="phone" placeholder="Mobile Numbber"/>
                    </div>
                    <div className="mbb-3">
                        <input type="text" className="form-control" id="company_registration" name="company_registration" placeholder="Company Registration"/>
                    </div>

                    
                    

                    <div className="mbb-3">
                        <input type="text" className="form-control" id="located_based" name="located_based" placeholder="Location"/>

                    </div>


                    <div className="mbb-3">
                             <input id="inputGroupFile01" type="file" id="file"  name="file"className="custom-file-input" />
                              
                    </div>

                    <div className="mbb-3">
                        <input type="password" autoComplete="false" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>

                    <div className="mbb-3">
                        <input type="password" autoComplete="false" className="form-control" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>

                    


                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                
                
          </div>
       
    )
}

export default  Company_SignUp_Page;