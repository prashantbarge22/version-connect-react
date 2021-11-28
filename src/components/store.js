import Compnavbar from "./company_navbar"
import { useHistory } from "react-router-dom";
import "../css/company_store.css"

import Companyfooter from "./company_footer"
import "./footerstyles"
function Store(){
    const history = useHistory();
   

    return(<>
    <Compnavbar/>
    <div>
    <div class="tere">
    <h2>ITEMS in STORE</h2>
<div class="myBtnContainer555">
  <button class="btn-555 active" onclick="filterSelection('all')"> Show all</button>
  <button class="btn-555" onclick="filterSelection('nature')"> Nature</button>
  <button class="btn-555" onclick="filterSelection('cars')"> Cars</button>
  <button class="btn-555" onclick="filterSelection('people')"> People</button>
</div>
</div>


<div class="row-555">
  <div class="column-555 nature">
    <div class="card-555" >
<img src="https://image.freepik.com/free-vector/   halftone-background-with-circles_23-2148907689.jpg"  alt="Nature" 
  style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Mountains</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
      
    </div>
  </div>
  <div class="column-555 nature">
    <div class="card-555" >
 <img src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg" alt="Nature" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Lights</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>
  <div class="column-555 nature" >
    <div class="card-555" >
    <img src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg"  alt="Nature" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Forest</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>

  <div class="column-555 cars" >
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg"  alt="Car" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Retro</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>
  <div class="column-555 cars" >
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/halftone-background-with-circles_23-2148907689.jpg" alt="Car" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Fast</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>
  <div class="column-555 cars" >
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769632.jpg"  alt="Car" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Classic</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>

  <div class="column-555 people">
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769632.jpg" alt="People" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Girl</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>
  <div class="column-555 people">
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769632.jpg" alt="People" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Man</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>
  <div class="column-555 people">
    <div class="card-555" >
      <img src="https://image.freepik.com/free-vector/abstract-colorful-shapes-background_23-2148769632.jpg" alt="People" style={{width:"40vh"}}/>
      <div class="card-body">
      <h4>Woman</h4>
      <p>Lorem ipsum dolor..</p>
      </div>
    </div>
  </div>

</div>
</div></>

)
}
export default Store;