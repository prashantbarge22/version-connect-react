import "../css/farmer_signup_page.css"
function Farmer_SignUp_Page(){
    return(
        <div className="container-fluid background">
          <div className="box-double">
                <div className="container box-1">
                <form>
                <div className="name">
                <div class="mb-3">
                        <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First-Name"/>
                </div>
                <div class="mb-3">
                        <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last-Name"/>
                </div>
                </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="emailHelp" placeholder="E-mail"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <input type="number" class="form-control" id="phone" name="phone" placeholder="Mobile Number"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="aadharno." name="aadhar" placeholder="Aadhar Number"/>
                    </div>
                    <div className="location">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="state" name="state" placeholder="State"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="district" name="district" placeholder="District" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" id="City" name="City" placeholder="City" />
                    </div>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password"/>
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" id="confirmpwd" name="confirmpwd" placeholder="Confirm-Password"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="box-2"></div>
          </div>
        </div>
    )
}

export default  Farmer_SignUp_Page;