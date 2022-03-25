import { Paper } from "@mui/material";
import React, { useEffect, useState, useReducer } from "react";
import "./Window.css"
import { Table } from "@mui/material";
import { Button } from "@mui/material";
import Pop from './Pop';

const Reducer = (state, action) => {
    console.log("state--==>",state)
    switch (action.type) {
        case "add":
            console.log(action,"d1")
            return [...state, ...action.payload]
            
        case "del":
            console.log(state,"d2")
            return state.filter(user => user.id !== action.payload)
            
        case "edit":
            console.log(state,"d3")
             let index=state.findIndex(user=>user.Id ===action.payload.Id)
             state.splice(index,1,action.payload)  
              
          return state 

        default:
            return state
    }

}

const Window = () => {
    const [state, dispatch] = useReducer(Reducer, [])
    const [Name, setName] = useState('')
    const [newDatas,setnewDatas] = useState({})
    const [userDetail,setUserDetail] = useState("")
    console.log("userDetail",userDetail)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let Data = localStorage.getItem("data")
        let newDatas = JSON.parse(Data);
        console.log(state,"d4")   
        dispatch({ type: "add", payload: newDatas })
    }, [])
 
    const handleSubmit = (newDatas) => {
        console.log(state,"d5")   
        dispatch({ type: "del", payload: newDatas.id })
    }
    
    const onsubmit = (e) => {
        console.log("testfore",e)
        handleShow()    
        setUserDetail(e)              
    }
const handleEdit=()=>{
    dispatch({ type: "edit", payload:newDatas}) 
}
    // const handleSave = (dataR) =>{
    //     console.log("testForDataR",dataR)
    //     setShow(false)
    // }

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
                                    <td><Button className={"del"} onClick={() => handleSubmit(newDatas)}> DEL</Button></td>
                                    <td><Button className={"edit"} onClick={() => onsubmit(newDatas)}>EDIT</Button></td>
                                   
                                    </tr>
                                </>)
                                })}
                    </tbody>
                   
                  </Table>
            </Paper>
            <Pop open={show} close={handleClose} edit={handleEdit} userData={userDetail}/>
        </>
    )
}

export default Window