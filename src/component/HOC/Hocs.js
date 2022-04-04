import React, { useState } from "react";
import "./Hoc.css";

 const Hocs=Duplicate=>{
    
    function NewComponent(){
       
        const [data,setData]=useState({
            Name:"@..DORUSTREE.IN",
        })
        return(
            <>
            <Duplicate Name={data.Name}/>
            <h2 className="head">Learn about Higher Order Components</h2>
             <h2>Employe Details:</h2>
             <h2>Company Details:</h2>
           
   
            </>
        )
    }
    return NewComponent
 }
 export default Hocs