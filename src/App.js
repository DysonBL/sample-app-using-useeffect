import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Login from "./component/Login/Login"
import Register from "./component/Register/Register"
import Window from "./component/Login/Window";
import Portals from "./component/Portal/Portals"
import Medias from "./component/Media/Medias";
import Models from "./component/Login/Models";
import Pop from "./component/Login/Pop";
import Api from "./component/Apicrud/Api";
import Post from "./component/Apicrud/Post";
import Dynamic from "./component/Routing/Dynamic";
import Edit from "./component/Routing/Edit";
import EditPop from "./component/Apicrud/Editpop";
import Tost from "./component/Apicrud/Tost";
import Employelist from "./component/HOC/Employelist";
import Companylist from "./component/HOC/Compaylist";
import Uiscreen from "./component/Redux/Uiscreen";
import PostButton from "./component/Redux/Compont/PostButton";

// const Employee=Hocs(Employelist)
// const Company=Hocs(Companylist)

const App = () => {
    
  return (
       <>
       <BrowserRouter>
     <Routes>
         <Route path="/Uiscreen" element={<Uiscreen/>}/>
         <Route path="/PostButton" element={<PostButton/>}/>

         {/* <Route path="/Employelist" element={<Employelist/>}/>
         <Route path="/Companylist" element={<Companylist/>}/> */}

         <Route path="/Dynamic" element={<Dynamic/>}/>
         <Route path="/Edit/:id" element={<Edit/>}/>

         {/* <Route path="/Api" element={<Api/>}/>
         <Route path="/Post" element={<Post/>}/>
         <Route path="/Tost" element={<Tost/>}/> 
         <Route path="/EditPop" element={<EditPop/>}/>  */}

         {/* <Route path="/Pop" element={<Pop/>}/>
         <Route path="/Register" element={<Register/>}/>
         <Route path="/Login" element={<Login/>}/> 
         <Route path="/Window" element={<Window/>}/> */}

         {/* <Route path="/Portals" element={<Portals/>}/>
         <Route path="/Medias" element={<Medias/>}/> */}

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