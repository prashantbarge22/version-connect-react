import { useHistory } from "react-router-dom";
import "../css/farmer_login.css"
import service from "../services/services"
function FarmerLogin(){

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

    return(
        <div className="container-fluid box">
            <div className="login-form">
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
export default FarmerLogin;