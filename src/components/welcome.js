
import {Link} from "react-router-dom";

function Welcome(){
    return(
        <div>
            <h1>Welcome To Vision UPKARAN</h1>
            <div>
            <Link to="/farmer/signup">Farmer SIgnup</Link>
            </div>
            
            
            <div>
            <Link to="/company/signup">Company SIgnup</Link>
            </div>
            
            
        </div>
    )
}

export default Welcome;