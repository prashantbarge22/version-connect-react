import { useHistory } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle"
import "../css/farmer_navbar.css"
function Navbar(){
  const history = useHistory();
  function handleClickw(){
    history.push("/");
  }
    return(
        <div className="">
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand brand-name" href="#" onClick={handleClickw}>VISION-UPKARAN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About us</a>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Setting
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>

      <a href="#" class="btn1 btn-info btn-lg">
          <span class="glyphicon glyphicon-log-out"></span> Log out
        </a>



        <div class="md-form mt-0">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search"/>
</div>






    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar;