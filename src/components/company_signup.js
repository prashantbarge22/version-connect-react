import { useHistory } from "react-router-dom";
import "../css/company_signup_page.css"
import services from "../services/services";
function Company_SignUp_Page(){

    let history = useHistory();

   const onSubmit= (props)=>{
       props.preventDefault();
       const company ={
           user_name:props.target.user_name.value,
           company_name:props.target.company_name.value,
           email:props.target.email.value,
           phone:props.target.phone.value,
           company_registration:props.target.company_registration.value,
           located_based:props.target.located_based.value,
           password:props.target.password.value,

       }
       services.companySignUp(company).then(result=>{
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
        <div className="container-fluid Cbackground">
          <div className="Cbox-double">
                <div className="container Cbox-1">
                <form className="form" onSubmit={(props)=>{onSubmit(props)}}>
                
                <div className="mb-3">
                        <input type="text" className="form-control" id="user_name" name="user_name" placeholder="User-name"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="company_name" name="company_name" placeholder="Company-Name"/>
                </div>
                
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="form-control" id="phone" name="phone" placeholder="Mobile Number"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="company_registration" name="company_registration" placeholder="Company Registration"/>
                    </div>

                    
                    

                    <div className="mb-3">
                        <input type="text" className="form-control" id="located_based" name="located_based" placeholder="Location"/>

                    </div>


                    <div class="mb-3">
                             <input id="inputGroupFile01" type="file" className="custom-file-input" />
                              <label className="custom-file-label" htmlfor="inputGroupFile01">Choose file</label>
                    </div>

                    <div className="mb-3">
                        <input type="password" autoComplete="false" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>

                    <div className="mb-3">
                        <input type="password" autoComplete="false" className="form-control" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>

                    


                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="Cbox-2"></div>
          </div>
        </div>
    )
}

export default  Company_SignUp_Page;