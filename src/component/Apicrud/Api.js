import React, { useState } from "react";
import { useEffect, useReducer } from "react";
import { Paper, Table, Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Api.css";
import axios from "axios";
import EditPop from "./Editpop";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router";



const Reducer = (state, action) => {
    switch (action.type) {
        case "GET":
            console.log(state, "Getdata")
            return [...action.payload]


        case "POST":
            return state

        case "EDIT":
            console.log(state, "state")
            let index = state.findIndex(user => user.id === action.payload.id)
            state.splice(index, 1, action.payload)
            return state

        case "DELETE":
            console.log("payload", action.payload)
            return state.filter(user => user.id !== action.payload)
    }
}

const Api = () => {
    const [state, dispatch] = useReducer(Reducer, [])
    let navigate=useNavigate()
    const [showToast, setShowToast] = useState(true);
    // const [show, setShow] = useState(false);    //Edit Popup
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    const [Update, setUpdate] = useState([])
    const [Edit, setEdit] = useState([])
    const [Error,setError]=useState([])

    useEffect(() => {
        if (state.length > 1) {
            setEdit(state)
        }
    }, [state])

    useEffect(() => {
        axios.get("http://localhost:3006/Users")
            .then((res) => {
                setError("")
                console.log(res, "Get")
                dispatch({ type: "GET", payload: res.data })
            })
            .catch((Error) => {
                toast.error("Your calling user API not Found..!!!")
                setError(Error)
                console.log(Error, "error");
            })
    }, []);
    const DelUser = (delId) => {
        console.log(delId, "del")
        axios.delete(`http://localhost:3006/Users/${delId}`)
            .then((res) => {
                dispatch({ type: "DELETE", payload: delId })
                console.log(res, "Delete")
            })
            .catch((error) => {
                toast.error("Your DELETE calling user API not Found..!!!")
                console.log(error, "error");
            })
    }
    const EditUser = (res) => {
        // handleShow()
        setUpdate(res)
        navigate(`/Edit/${res}`)
        console.log("edit", res)
    }

    const refresh = () => {
        axios.get("http://localhost:3006/Users")
            .then((res) => {
                console.log(res, "Get")
                dispatch({ type: "GET", payload: res.data })
            })
            .catch((error) => {
                toast.error("Your GET calling user API not Found..!!!")
                console.log(error, "error");
            })
    }

    const handleSave = (user) => {
        axios.put(`http://localhost:3006/Users/${user.id}`, user)
            .then((res) => {
                console.log(res, "Edit")
                refresh()
                dispatch({type:"EDIT",payload:user})
            })
            .catch((error) => {
                toast.error("Your EDIT calling user API not Found..!!!")
                console.log(error, "error");
            })
        // setShow(false)
    }
    const User = (data) => {
        handleSave(data)
    }


    return (
        <>
            <div className="body">
                <ToastContainer/>
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
                            {state && state.map((res) => {
                                return (
                                    <><tr>
                                        <td>{res.id}</td>
                                        <td>{res.Name}</td>
                                        <td>{res.Age}</td>
                                        <td>{res.Gender}</td>
                                        <td><Button className={"del"}  variant="danger"onClick={() => DelUser(res.id)}> DEL</Button></td>
                                        <td><Button className={"edit"}  variant="danger" onClick={() => EditUser(res.id)}>EDIT</Button></td>

                                    </tr>
                                    </>)
                            })}
                        </tbody>

                    </Table>
                </Paper>
                <EditPop /*open={show}*/close={handleSave} userdata={User} change={Update} />
            </div>
        </>
    )
}

export default Api