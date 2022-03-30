import React, { createContext, useContext, useState } from "react";
import { useEffect,useReducer} from "react";
import { Paper,Table,Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Api.css";
import axios from "axios";
import EditPop from "./Editpop";

const Reducer=(state,action)=>{
    switch(action.type){
     case "GET":
        console.log(state,"Getdata")
     return [...state,...action.payload]
     
  
     case "POST":
     return state
      
     case "EDIT": 
     return 

     case "DELETE": 
           console.log("payload",action.payload)
     return state.filter(user=>user.id !== action.payload) 
}
}

const Api = () => {
   const[state,dispatch]=useReducer(Reducer,[]) 
 const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
    
    useEffect(()=>{
       axios.get("http://localhost:3006/Users")
       .then((res)=>{
           console.log(res,"Get")
        dispatch({type:"GET",payload:res.data})
    })   
        .catch((error)=>{
            console.log(error,"error");
        })
    },[]);

    const DelUser=(delId)=>{
        console.log(delId,"del")
        axios.delete(`http://localhost:3006/Users/${delId}`)
        .then((res)=>{
         dispatch({type:"DELETE",payload:res})
         console.log(res,"Delete")
     })   
         .catch((error)=>{
             console.log(error,"error");
         })
            
        }  
    const EditUser=(e)=>{  
            handleShow() 
            console.log("edit",e)
        }    
    const handleSave=()=>{

    }
   
    return (
        <>
        <div className="body">
           <nav>
          <h2> User Details</h2>
          <Button variant="primary"><Link to="/Post">Create</Link></Button>
          </nav>
          <Paper>
                <Table>
                    <thead>
                        <tr>
                            <th>Id.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gen</th>
                            </tr>
                    </thead>
                    <tbody>
                        {state&&state.map((res)=>{ 
                            return (
                                <><tr>
                                    <td>{res.id}</td>
                                    <td>{res.Name}</td>
                                    <td>{res.Age}</td>
                                    <td>{res.Gender}</td>
                                    <td><Button className={"del"} onClick={()=>DelUser(res.id)}> DEL</Button></td>
                                    <td><Button className={"edit"} onClick={()=>EditUser()}>EDIT</Button></td>
                                   
                                    </tr>
                                </>)
                                })}
                    </tbody>
                   
                  </Table>
            </Paper>
            <EditPop open={show} close={handleClose} edit={handleSave} />
         </div>
           </>
    )
    } 

export default Api