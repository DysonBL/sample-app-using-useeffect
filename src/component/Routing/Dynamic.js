import axios from "axios";
import React, {useReducer,useEffect} from "react";
import "./Dynamic.css";
import {useNavigate } from "react-router-dom";

const Reducer = (state, action) =>{
    switch(action.type){
    case "Get":
        console.log(action,"action")
    return [...action.payload]

    case "Edit":
     return 
}}

 
const Dynamic =()=>{
    const[state,dispatch]=useReducer(Reducer,[])
    let navigate=useNavigate()
   console.log(state,"syate")
    useEffect(() => {
        axios.get(`http://localhost:3006/Users`)
            .then((res) => {
                console.log(res,"datass")
                dispatch({ type: "Get", payload:res.data})               
            })
            .catch((Error) => {
                console.log(Error, "error");
            })
           
    }, []);
    
    const handileEdit=(res)=>{
        console.log("edit user")
         navigate(`/Edit/}`)
    }
 return(
     <>
     <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
    </tr>
  </thead>
  <tbody>
      {
          state && state.map((res)=>{
              return (
                  <>
                  <tr>
                    <td>{res.id}</td>
                    <td>{res.Name}</td>
                    <td>{res.Age}</td>
                    <td>{res.Gender}</td>
                    <td><button type="button"onClick={()=>{handileEdit(res)}} class="btn btn-warning">DELETE</button></td>

                    <td><button type="button"onClick={()=>{handileEdit(res)}} class="btn btn-warning">EDI</button></td>
                 </tr> 
                  </>

              )
          })
      }
  </tbody>
</table>
     </>
 )   
}
export default Dynamic