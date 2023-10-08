import Welcomenavbar from "./welcome_navbar";
import"../css/about_us.css"

import Companyfooter from "./company_footer"
import "./footerstyles"

function AboutUs(){
    return(<>
    
      <div classname="container90">
    <Welcomenavbar/>
    <div class="header-50">
  <p>About Us</p>
</div>

<div class="row">
  <div class="leftcolumn">
    <div class="card-IJ">
      <h2>We're on a mission.</h2>
      
      <div class="fakeimg" style={{height:"200px"}}>A mission is a common thing for a business to have, 
but an uncommon thing to really live out each day. SiGx team works hard to ensure that we fulfill our mission daily.</div>
      <p class="hj">SiGx exists to:</p>
    </div>
    <div class="card-tk">
     
      <div class="fakeimg" style={{height:"60vh"}}>
      <h2>1      Bring Success to Our Clients</h2>
      <p class="poty">
Your success is, quite literally, our success. We help ensure our clients’ success by selling only the services that will actually be beneficial—providing everything you need and nothing you don’t. We’re intentional about measuring the success of our efforts and reporting results back to our clients.</p>
<h2>2       Be a Great Place to Work for Our Team</h2>
<p class="poty">Our clients can’t be successful without an incredible team behind the scenes. That’s why, alongside strong professional standards, we’re intentional about promoting productivity, play, and rest for maximum performance. Happy clients + happy team = everybody wins!</p>
<h2>3       Provide Benefit to our Community</h2>
<p class="poty">Our community environment influences everything, from our personal lives to our companies. The Engenius Team believes that concern for the community is a natural part of doing business, so we aim to make our community better by both being a great business and supporting community initiatives. </p>
      </div>
     
  </div>
  </div>
  <div class="rightcolumn">
    <div class="card-PO">
      
      <div class="fakeimg8">
        <img src="https://image.freepik.com/free-vector/business-team-discussing-ideas-startup_74855-4380.jpg"class="card-img-top1"/>
        Image
      </div>
      
    </div>
    <div class="card-PO">
      
      <div class="fakeimg8">
        <img src="https://image.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg" class="card-img-top1"/>Image
        </div>
      
    </div>
  </div>
  <div class="tyu">
  <h2>Our Core Values</h2><p>It’s more than what you do; it’s how you do it. This is what makes SiGx.</p>
  </div>
  <div class="row7">
    
  <div class="column77">
    <div class="card77"><h2>Be Thoughtful</h2>
We care for others: our teammates, our clients, and anyone we meet. We exhibit this by showing consideration for the needs of other people.</div>
  </div>
  <div class="column77">
    <div class="card77"><h2>Be Vulnerable</h2>Strong relationships can survive conflict and wounding—and they are strong due to opening ourselves to other people and being transparent in how we work.</div>
  </div>
  <div class="column77">
    <div class="card77"><h2>Be Proactive</h2>We seek out problems before they become problems; then we do something to make it less of a problem before it happens.</div>
    
  </div>
  <div class="column77">
    <div class="card77"><h2>Be Dependable</h2>Everyone needs people they can trust and rely upon. We are those people. We follow through in our commitments and work.</div>
  </div>
</div>


<p class= "snack">Meet Our Dreamers, Thinkers & Doers</p>
<div class="row">

  <div class="column">
    <div class="card" >
      <img src="https://media-exp1.licdn.com/dms/image/C5603AQFfm4r2AOWidw/profile-displayphoto-shrink_800_800/0/1637327377504?e=1642636800&v=beta&t=74j1gmXVmg3HvHknzg2KQsfuLY2cWse1cQ1vAMruoEc" alt="Soumya" style={{width:"55vh"}}/>
      <div class="container-90">
        <h2>Soumya Jha</h2>
        <p class="title5">CEO & Founder</p>
        <p class="cat">Some text that describes me lorem ipsum ipsum lorem.</p>
        <p class="cat">soumya.jha.0501@gmail.com</p>
        
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card" >
      <img src="https://media-exp1.licdn.com/dms/image/C4E03AQFP46kRwlxDEQ/profile-displayphoto-shrink_800_800/0/1637436643905?e=1643846400&v=beta&t=i_KNo9T7LEpv-w6eQva_5Z90DvEzmaFEqB8NXdarf-U" alt="Nancy"  style={{width:"55vh"}}/>
           <div class="container-90">
            <h2>Nancy Thakur</h2>
            <p class="title5">Co-CEO</p>
            <p class="cat">Some text that describes me lorem ipsum ipsum lorem.</p>
            <p class="cat">nancythakur1109@gmail.com</p>
            <p><button class="button">Contact</button></p>
           </div>
    </div>
  </div>

  
</div>


</div>

</div>
<Companyfooter></Companyfooter>
</>
               

    )
}
export default AboutUs;