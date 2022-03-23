import { Button, Modal } from "@mui/material";
import React, { useState } from "react";
import  ReactDOM from "react-dom";
import "./Portal.css"

const Modals=({ message, isOpen, onClose})=> {
        if (!isOpen){
        return null;
        }
        
    return ReactDOM.createPortal(
       <div className="modals">
       <h1>{message}</h1>
        <Button onClick={onClose}>CLOSE</Button>
       </div>
      ,document.getElementById("model-root"));
    }

const Portals=()=>{
    const[ open,setopen]=useState(false)

    return(
        <div className="sample">
        <h1>Learn Portals</h1>
        <Button onClick={()=> setopen(true)}>OPEN </Button>
        <Modals message="Implement Portal form" isOpen={open} onClose={() => setopen(false)}/>

        </div>
    )
}
export default Portals