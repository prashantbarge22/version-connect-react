import Compnavbar from "./company_navbar1"
import services from "../services/services";
import { useHistory } from "react-router-dom";
import "../css/company_home.css"
import Companyfooter from "./company_footer"
import "./footerstyles"
import { useEffect, useState } from "react";
function CompanyHome(){
    const history = useHistory();
    function handleClickyy(){
        history.push("/next");
      }
      
    
    const[categories, setCategories ] = useState([]);
    
    useEffect(() => {
      services.Categories().then(result=>{
         console.log(result.data)
         setCategories(result.data);
        })
        console.log("hello a")
      
    },[]);
  
    return(<>
        <div>
           <Compnavbar/>
           
           <div className="slide-show">
           <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <img src="https://c4.wallpaperflare.com/wallpaper/67/164/35/terrace-farming-agriculture-8k-4k-wallpaper-preview.jpg" class="d-block w-10" alt="..." style={{height:"70vh"}}/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.pexels.com/photos/1459339/pexels-photo-1459339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="d-block w-10" alt="..." style={{height:"70vh"}}/>
                <div class="carousel-caption d-none d-md-block" >
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div>
                </div>
                <div class="carousel-item">
                <img src="https://images.pexels.com/photos/4207906/pexels-photo-4207906.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" class="d-block w-10" alt="..." style={{height:"70vh"}}/>
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
            
            <div className="advertisment-45">
            <div >
               {categories?.map(result=>{
                   return(
                   <div class="column-88">
                   <div class="card-89" style={{width:"25%" }}>
                   
                   <img src="https://image.freepik.com/free-vector/agricultural-robots-isometric-composition-with-automated-remote-controlled-combine-harvester-threshers-working-wheat-field_1284-32410.jpg" class="card-img-top" alt="..."   />
            <div class="card-body" >
            <p onClick={handleClickyy}>{result._id}</p>
            
            </div>
                   
                   
                   </div>
                   </div>)
               })}
           </div>
           
            </div>
           
           
           
            
             
            <Companyfooter></Companyfooter>
            </div> 
        </div>
        </>
    )

}

export default CompanyHome;
