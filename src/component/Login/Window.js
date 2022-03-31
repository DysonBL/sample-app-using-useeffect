import { Paper } from "@mui/material";
import React, { useEffect, useState, useReducer,createContext } from "react";
import "./Window.css"
import { Table } from "@mui/material";
import { Button } from "@mui/material";
import Pop from './Pop';
export const UserContext = createContext({});

const Reducer = (state, action) => {
    console.log(state,"state data")
    switch (action.type) {
        case "add":
            console.log(action,"add data")
            return [...state, ...action.payload]
            
        case "del":
            console.log(state,"delete")
            return state.filter(user => user.id !== action.payload)
            
        case "edit":
            console.log(state,"state")
            let index=state.findIndex(user=>user.id ===action.payload.id)
            state.splice(index,1,action.payload)  
              
          return state 

        default:
            return state
    }

}

const Window = () => {
    const [state, dispatch] = useReducer(Reducer, [])
    const [userDetail,setUserDetail] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        let Data = localStorage.getItem("data")
        let newDatas = JSON.parse(Data);
        console.log(newDatas,"local data")   
       dispatch({ type: "add", payload: newDatas })
    }, [])
 
    const handleDel = (newDatas) => {
        console.log(state,"d5")   
        dispatch({ type: "del", payload: newDatas.id })
    }
    const handleEdit=(e)=>{  
        handleShow() 
        console.log("edit",e)
        setUserDetail(e)   
    }    
    
    const handleSave = (newDatas) => {
        console.log('incoming data',newDatas) 
         dispatch({ type: "edit", payload:newDatas}) 
         setShow(false)
         console.log('edit data',state)       
             
    }

    return (
        <>
          <UserContext.Provider value={{userData:userDetail}}>
           <h2>Wellcome User</h2>
            <Paper>
                <Table className="Table">
                    <thead>
                        <tr>
                            <th>Id.No</th>
                            <th>First Name</th>
                            <th>Second Name</th>
                            <th className="email">Email</th>
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
                                    <td><Button className={"del"}  onClick={() => handleDel(newDatas)}> DEL</Button></td>
                                    <td><Button className={"edit"} onClick={() => handleEdit(newDatas)}>EDIT</Button></td>
                                    </tr>
                                </>)
                                })}
                    </tbody>
                   
                  </Table>
            </Paper>
            <Pop open={show} close={handleClose} edit={handleSave} />
            </UserContext.Provider>
        </>
    )
}

export default Window