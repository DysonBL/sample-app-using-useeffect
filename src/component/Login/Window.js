import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import "./Window.css"
import { Table } from "@mui/material";
import { useReducer } from "react";
import { Button } from "@mui/material";

const Reducer = (state, action) => {
    console.log("hii",action)
    switch (action.type) {
        case "add":
            return
             [...state, ...action.payload]
            
        case "del":
            return state.filter(state=>state.newDatas!==action.payload.id)
        default :
        return state
    } 
    
} 
   const Window = () => {
        const [state, dispatch] = useReducer(Reducer, [])
        const [Name, setName] = ('')
        useEffect(() => {
            let Data = localStorage.getItem("data")
            let newDatas = JSON.parse(Data);
            dispatch({ type:"add",payload:newDatas})
        }, [])

const handleSubmit=(value)=>{
    dispatch({type:"del",payload:value.id})
}

        return (
            <>
                <h2>Wellcome User</h2>
                <Paper>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Second Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {state.map((value) => {
                                return (
                                    <><tr>
                                        <td>{value.Fname}</td>
                                        <td>{value.Sname}</td>
                                        <td>{value.Email}</td>

                                        <td><Button className={"del"} onClick={()=>handleSubmit(value)}> DEL</Button></td>
                                        <td><Button className={"edit"} onClick={onsubmit}> EDIT</Button></td>
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