
import {Link} from "react-router-dom";

function Welcome(){
    return(
        <div>
            <h1>Welcome To Vision UPKARAN</h1>
            <Link to="/farmer/signup">Farmer SIgnup</Link>
            
        </div>
    )
}

export default Welcome;