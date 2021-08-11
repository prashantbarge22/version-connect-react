import "../css/signupform.css"
function SignUpPageForm(){
    return(
        <div className="container">
          <form>
          <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                <input type="text" className="form-control" id="firstname" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                <input type="text" className="form-control" id="lastname" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="number" className="form-control" id="phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="pwd"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" id="cnfpwd" />
            </div>
            <div className="container subdiv">

            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">City</label>
                <input type="text" className="form-control" id="city" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">District</label>
                <input type="text" className="form-control" id="district" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">State</label>
                <input type="text" className="form-control" id="state" />
            </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Aadhar Verification Number</label>
                <input type="text" className="form-control" id="aadharnum" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUpPageForm;