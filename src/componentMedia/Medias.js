import React from "react"
import "../componentMedia/media.css"
const Medias=()=>{
    return(
        <>
        <div className="hedder">
        <h1>Learn  CSS Media Quries</h1>
        </div>  
   <div className="nav"><ul className="par">
       <li>Home</li>
       <li>About</li>
       <li>User</li>
       <li>Help</li>
   </ul>
   </div> 
   <div className="par">
   <div className="left"><h2>Title I</h2>
       <p>This is a CSS media query hook for React. 
           It listens for matches to a CSS media query. It allows
            the rendering of components based on whether the query ...</p>
       </div>
   <div className="main"> </div>

   <div className="right"><h2>Title II</h2>
   <p>This is a CSS media query hook for React. 
           It listens for matches to a CSS media query. It allows
            the rendering of components based on whether the query ...</p>
    </div>
  </div>
   <div className="fooder">About</div>
        </>
    )
}


export default Medias