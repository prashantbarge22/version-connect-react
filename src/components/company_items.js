/*import { useHistory } from "react-router-dom";
import "../css/company_items.css"
import services from "../services/services";

function Company_Items(){
    let history = useHistory();

    const onSubmit= (props)=>{
        props.preventDefault();
        const items ={
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
        services.companyItems(items).then(result=>{
           if(result.data.error){
               alert(result.data.data);
           }/*else{
               history.push("/farmer/login")
           }
        }).catch(err=>{
            console.log(err);
        })
     }

     return(
        <div className="container-fluid background">
          <div className="box-double">
                <div className="container box-1">
                <form className="form" onSubmit={(props)=>{onSubmit(props)}}>
                <div className="name">
                <div className="mb-3">
                        <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First-Name"/>
                </div>
                <div className="mb-3">
                        <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last-Name"/>
                </div>
                </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="E-mail"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="box-2"></div>
          </div>
        </div>

     )
     
 

}
export default Company_Items;
*/
