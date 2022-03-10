import Navbar from "./farmer_navbar1";
import services from "../services/services";
import { useHistory } from "react-router-dom";
import "../css/farmer_home.css";
import Farmerfooter from "./farmer_footer";
import { useEffect, useState } from "react";
function FarmerHome(){
    const history = useHistory();
    function handleClicku(nextpage) {
        history.push("/next?category="+nextpage);
      }

    

    const[categories, setCategories ] = useState([]);
    
    useEffect(() => {
      services.Categories().then(result=>{
         console.log(result.data)
         setCategories(result.data);
        })
        console.log("hello a")
      
    },[]);
    return(
        <div>
           <Navbar/>
           <div className="slide-show-13">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://ccafs.cgiar.org/sites/default/files/styles/image_full/public/blog/pictures/35606601480_d983bdb7ef_o.jpg?itok=EA62FQb0" class="d-block w-11" alt="..." style={{height:"70vh"}}/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://contecglobal.com/wp-content/uploads/2019/04/agro.png" class="d-block w-11" alt="..." style={{height:"70vh"}}/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://media.istockphoto.com/photos/tractor-cultivating-field-at-spring-picture-id543212762?k=20&m=543212762&s=612x612&w=0&h=3x8yNlzSApOGoZyPZl4cx_ioPLAna-AXt8SvkildxRo=" class="d-block w-11" alt="..." style={{height:"70vh"}}/>
                
                <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>
            <div className="advertisment-12">
            <div >
               {categories.map(result=>{
                   return(
                   <div class="column-88">
                   <div class="card-89" style={{width:"25%" }}>
                   
                   <img src="https://image.freepik.com/free-vector/agrimotor-works-farm-composition_1284-19511.jpg" class="card-img-top" alt="..."   />
            <div class="card-body" >
            <p onClick={()=>{handleClicku(result._id)}}>{result._id}</p>
            
            </div>
                   
                   
                   </div>
                   </div>)
               })}
           </div>
          
          

            
            </div>
            <Farmerfooter></Farmerfooter>
            
           </div>
        </div>
    )

}

export default FarmerHome;