import { Paper } from "@mui/material";
import React, { useEffect, useState ,useReducer} from "react";
import "./Window.css"
import { Table } from "@mui/material";
import { Button } from "@mui/material";
import Pop from './Pop';

const Reducer = (state, action) => {
    console.log("data",action)
    switch (action.type) {
        case "add":
            return [...state, ...action.payload]
            
        case "del":
            return state.filter(user=>user.id!==action.payload)
        case "edit":
            return 
        default :
        return state
    } 
    
} 

   const Window = () => {
        const [state, dispatch]=useReducer(Reducer, [])
        const [Name, setName]=useState('')

        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        useEffect(() => {
            let Data = localStorage.getItem("data")
            let newDatas = JSON.parse(Data);
            dispatch({ type:"add",payload:newDatas})
        }, [])
       

const handleSubmit=(newDatas)=>{
    dispatch({type:"del",payload:newDatas.id})
}
const onsubmit=()=>{
    handleShow()
}
      return (
            <>
                <h2>Wellcome User</h2>
                <Paper>
                    <Table>
                        <thead>
                            <tr>
                                <th>Id.No</th>
                                <th>First Name</th>
                                <th>Second Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((newDatas) => {
                                return (
                                    <><tr>
                                        <td>{newDatas.id}</td>
                                        <td>{newDatas.Fname}</td>
                                        <td>{newDatas.Sname}</td>
                                        <td>{newDatas.Email}</td>
                                        <td><Button className={"del"} onClick={()=>handleSubmit(newDatas)}> DEL</Button></td>
                                        <td><Button className={"edit"} onClick={onsubmit}>EDIT</Button></td>
                                        <Pop open={show} close={handleClose}/>
                                    </tr>
                                    </>)
                            })}
                        </tbody>
                    </Table>
                </Paper>
            </>
        )
    }
    export default Window