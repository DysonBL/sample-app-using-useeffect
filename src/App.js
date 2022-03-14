import BasicTable from './Components/BasicTable'
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const[row,setData]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json().then((res)=>setData(res)))
    },[])
    console.log("login")
return (
    <div>
        <h1>Basic Table</h1>
        {row &&<BasicTable data={row}/>}

       
    </div>
)
}


export default App;