import { useHistory } from "react-router-dom";
import "../css/company_login.css"
import service, { companyLogin } from "../services/services"
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

    return(
        <div className="container-fluid cbox1">
            <div className="clogin-form">
            <form onSubmit={(e)=>{login(e)}}>
            <div className="mb-3">
                <label htmlfor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlfor="exampleInputPassword1"  className="form-label">Password</label>
                <input type="password" className="form-control" name="password" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        </div>
    )

}
export default CompanyLogin;