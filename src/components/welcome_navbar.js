import { useHistory } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle"
import "../css/welcome_navbar.css"

function Welcomenavbar(){
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
        
      <div class="header">
        <div class="das">
      <a href="#default" class="logo">VISION UPKARAN</a> 
      </div>
  <div class="header-right">
  
  <a class="active" href="#home" onClick={handleClickw}>Home</a>
  <a href="#news">News</a>
  <a href="#contact" onClick={handleClickr}>Contact</a>
  <a href="#about"  onClick={handleClick}>About</a>
  
</div>
<button class="button-123 button3" onClick={handleClick8}>SIGNUP</button>
  <button class="button-123 button4" onClick={handleClick3}>LOGIN</button>
    </div>
    
    )
}
export default Welcomenavbar;
