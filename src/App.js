import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Routerss from "./ComponentRouter/Router/Routerss";
import Home  from "./ComponentRouter/Home/Home";
import About from "./ComponentRouter/About/About";
import User from "./ComponentRouter/User/User";
import Register from "./componentslogin/Register/Register";
import Screen from "./componentslogin/Login/Screen";


const App = () => {
    // const[row,setData]=useState([])
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json().then((res)=>setData(res)))
    // },[])
    // console.log("login")
  return (
       <>
       <BrowserRouter>
     <Routes>
         <Route path="/Register" element={<Register/>}/>
         <Route path="/Screen" element={<Screen/>}/>
         <Route path="/Routerss" element={<Routerss/>}/>
         <Route path="/Home" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/User" element={<User/>}/>
         
         
         </Routes>  
       </BrowserRouter>
     
       </>
        
  )
  }


export default App;