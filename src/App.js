import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./component/Login/Login"
import Register from "./component/Register/Register"
import Portals from "./component/Portal/Portals"
import Medias from "./component/Media/Medias";
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

         <Route path="/Portals" element={<Portals/>}/>
         <Route path="/Medias" element={<Medias/>}/>
         <Route path="/Register" element={<Register/>}/>
         <Route path="/Login" element={<Login/>}/> 

         {/* <Route path="/Routerss" element={<Routerss/>}/>
         <Route path="/Home" element={<Home/>}/>
         <Route path="/About" element={<About/>}/>
         <Route path="/User" element={<User/>}/> */}
         
         
         </Routes>  
       </BrowserRouter>
     
       </>
        
  )
  }


export default App;