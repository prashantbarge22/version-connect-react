import { useHistory } from "react-router-dom";
import Welcomenavbar from "./welcome_navbar";
import"../css/contact_us.css"
import services from "../services/services";

import Companyfooter from "./company_footer"
import "./footerstyles"



function ContactUs(){
  let history = useHistory();

  const onSubmit= (props)=>{
      props.preventDefault();
   const contactus ={
     firstname:props.target.firstname.value,
     lastname:props.target.lastname.value,
     country:props.target.country.value,
     subject:props.target.subject.value,
     issue:props.target.issue.value,
     
   }
  //title:req.body.title,
  //category:req.body.category,
  //duration:req.body.duration,
  //discounted_amount:req.body.discounted_amount,
  //actual_amount:req.body.actual_amount,
  //max_time:req.body.max_time,
  //filename:req.file.filename,
  //file_path:req.file.path,
  //description:req.body.description,
  console.log(contactus);
 services.contactUs(contactus).then(result=>{
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
    return( <>
    <div>
    <Welcomenavbar/>
    
    <div class="container1">
    <div class="nack">
    <p>Contact Us</p>
    <p>Swing by for a cup of coffee, or leave us a message:</p>
  </div>
  <div class="row">
    <div class="column">
      <img src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"  style5={{height:"60vh"}}style={{width:"80vh"}}/>
    </div>
    <div class="column">
      <form  className="form" onSubmit={(props)=>{onSubmit(props)}}>
        <label for="firstname">First Name</label>
        <input type="text" id="firstname" name="firstname" placeholder="Your name.."/>
        <label for="lastname">Last Name</label>
        <input type="text" id="lastname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
       
          <label for="subject">Subject</label>
                        <input type="text"  id="subject" name="subject" placeholder="Write something here"/>
         <label for="issue">Issue</label>
                        <input type="text"  id="issue" name="issue" placeholder="Explain your issue"/>
        <button type="submit" id="submit"className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
  </div>
  </div>

<Companyfooter></Companyfooter></>

)
}

export default ContactUs;