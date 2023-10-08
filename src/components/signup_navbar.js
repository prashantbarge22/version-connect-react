import { useHistory } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle"
import "../css/welcome_navbar.css"
import logoPicture from "../assests/vision upkaran_logo.png";

function Signupnavbar(){
  const history = useHistory();
  
    function handleClick() {
      history.push("/aboutus");
    }
    function handleClickw(){
      history.push("/");
    }
    function handleClickr(){
      history.push("/contactus");
    }
    function handleClick3(){
      history.push("/login");
    }
    function handleClick8(){
      history.push("/signup");
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
<a href="#news">News</a>
<a href="#contact" onClick={handleClickr}>Contact</a>
<a href="#about"  onClick={handleClick}>About</a>

</div>


<button class="button-123 button4" onClick={handleClick3}>Login</button>
  </div>
  </div>
  </div>
  </div>
    
    )
}
export default Signupnavbar;
