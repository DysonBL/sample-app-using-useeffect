import React from "react";
import { Link } from "react-router-dom";

const Routerss=()=>{

    return(
        <div className="Router">
        <h2>Learning Router</h2>
        <ul>
        <li><Link to="/Home" >Home</Link></li>
        <li><Link to="/About"  > About</Link></li>
        <li><Link to="/User"  > User</Link> </li>
        </ul>
        </div>
    )
}

export default Routerss