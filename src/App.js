import React from "react";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./component/Login/Login"
import Register from "./component/Register/Register"
import Window from "./component/Login/Window";
import Portals from "./component/Portal/Portals"
import Medias from "./component/Media/Medias";
import Models from "./component/Login/Models";
import Pop from "./component/Login/Pop";
import Api from "./component/Apicrud/Api";

const App = () => {
    // useEffect(()=>{
    //     fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json().then((res)=>setData(res)))
    // },[])
    // console.log("login")
  return (
       <>
       <BrowserRouter>
     <Routes>
         <Route path="/Api" element={<Api/>}/>
         <Route path="/Pop" element={<Pop/>}/>

         <Route path="/Register" element={<Register/>}/>
         <Route path="/Login" element={<Login/>}/> 
         <Route path="/Window" element={<Window/>}/>

         <Route path="/Portals" element={<Portals/>}/>
         <Route path="/Medias" element={<Medias/>}/>
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