import "bootstrap/dist/js/bootstrap.bundle"
import "../css/company_navbar.css"
function Compnavbar(){
    return(
        <div className="">
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand brand-name" href="#">VISION-UPKARAN</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active link-name" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-name" href="#">About us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link link-name" href="#">Partnerships</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link  link-name dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Inventory
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div>
        <button className="btn btn-danger" onClick={()=>{console.log("i am clicked")}}>Logout</button>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Compnavbar;