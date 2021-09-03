
import {Link} from "react-router-dom";
import "../css/welcome.css"

function Welcome(){
    return(
        

        
        <div className = "back">
            <div className = "boxx1">

            </div>

            <div className = "boxx2">
                <div className = "text">
                    VISION 
                </div>
                <div className = "text">
                    upkaran
                </div>

            </div>
            <div className = "boxx3">
                <div className ="menu">
                    <div>
                    <Link to="/farmer/signup">Farmer SIgnup    </Link>
                    </div>
                    <div>
                    <Link to="/company/signup">Company SIgnup  </Link>
                    </div>
                    <div>
                    <Link to="/company/login">Company Login  </Link>
                    </div>
                    <div>
                    <Link to="/farmer/login">Farmer Login  </Link>
                    </div>

                </div>

            </div>


        </div>
        
        
    )
}

export default Welcome;