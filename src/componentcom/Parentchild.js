import react from "react"
import { useState } from "react";
import { Button } from "@mui/material";
import Child from "./Child";

const Parentchild=()=>{
    
        const[data,setData]=useState('');
        const parentToChild = (datas) => {
            setData(datas);
          }
          let name="Hello Henry"
  
    return(
        <div>
        <h3>Comunicatin into Parent</h3>
        {data}
        <div>
        </div>
        <Child passData={parentToChild} son={name}/>
         </div>       
  )


}

 
export default Parentchild