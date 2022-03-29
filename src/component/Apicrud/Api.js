import React from "react";
import { useEffect,useReducer} from "react";
import { Paper,Table,Button } from "@mui/material";

import "./Api.css";
import { Delete } from "@mui/icons-material";
 
const Reducer=(state,action)=>{
    switch(action.type){
    case "GetApi":
        console.log(state,"statevalue")
    return [...state,...action.payload]
  
    case "EditApi":
        let index=state.findIndex(user=>user.Id ===action.payload.Id)
        state.splice(index,1,action.payload)  
    return state

    case "DelApi":
    return  state.filter(user => user.Id !== action.payload)
    console.log()
}
}

const Api = () => {
   const[state,dispatch]=useReducer(Reducer,[])
    
   
    
    useEffect(()=>{
     fetch("http://localhost:3006/users")
        .then((response)=>response.json())
        .then((res)=>{
            console.log(res,"fetch")
         dispatch({type:"GetApi",payload:res})
        })
         .catch((error =>{
        console.log(error,"error")}))
    },[]);
    
    const DelUser=(res)=>{
            fetch("http://localhost:3006/users"+Id,{
               method:"Delete",
            })
            .then((response)=>response.json())
            .then((res)=>{
            dispatch({type:"DelApi",payload:res.Id })  
            console.log(res,"del")
            })
        
        }  
//     const DelUser=(res)=>{
//         let user={'Id':res.Id}
    //     fetch("http://localhost:3006/users",{
//         method:"DELETE",
//         headers:{'Content-Type': 'application/json',},
//         body:JSON.stringify()
//     })
//     .then((response)=>response.json())
//     console.log(res,"data")
// }

    const EditUser=()=>{
      

    }

    return (
        <>
        <div className="body">
           <nav>
          <h2> User Details</h2>
          </nav>
          <Paper>
                <Table>
                    <thead>
                        <tr>
                            <th>Id.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            </tr>
                    </thead>
                    <tbody>
                        {state && state.map((res)=>{ 
                            return (
                                <><tr>
                                    <td>{res.Id}</td>
                                    <td>{res.Name}</td>
                                    <td>{res.Age}</td>
                                    <td><Button className={"del"} onClick={()=>DelUser(res.Id)}> DEL</Button></td>
                                    <td><Button className={"edit"} onClick={()=>EditUser()}>EDIT</Button></td>
                                   
                                    </tr>
                                </>)
                                })}
                    </tbody>
                   
                  </Table>
            </Paper>
         </div>
           </>
    )
    } 

export default Api