import "bootstrap/dist/js/bootstrap.bundle";
import "../css/welcome_navbar.css";
import "../css/company_navbar1.css";
import logoPicture from "../assests/vision upkaran_logo.png";
import { useHistory } from "react-router";


function Farmernavbar(){
  
  const history = useHistory();
  
  function handleClickqq(){
    history.push("/")
}
  
  function handleClickg() {
    history.push("/companyty");
  }
  function handleClick() {
    history.push("/aboutus");
  }
  function handleClickAs() {
    history.push("/store");
  }
  function handleClickr(){
    history.push("/contactus");
  }
  function handleClickw(){
    history.push("/");
  }
    return(
      <div>
      <div class="slack">
 
      
    <div class="header">
    <div className="logoheader">
            <img src={logoPicture} alt="v=VS vision upkaran" style={{width:"35vh"}}/>
          </div>
    <div className="menuheader">
    

<div class="header-right">
<a class="active" href="#home" onClick={handleClickw}>Home</a>
<a href="#patnership">Partnerships</a>
<a href="#contact" onClick={handleClickr}>Contact</a>
<a href="#about"  onClick={handleClick}>About-Us</a>

      
      

       
  </div>
  <button class="button-666 button-5" onClick={handleClickqq}>Logout</button>
  </div>
  </div>
  </div>
  </div>
    
    )
}
export default Farmernavbar;
