import React, { useEffect, useState, useReducer } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import "./Dynamic.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";


const Edit = () => {
    let navigate=useNavigate()

    const [state, dispatch] = useReducer()
    const[Edit,setEdit]=useState("")
    console.log(Edit,"edit")
    const [data, setdata] = useState({
        Name:Edit.Name,
        Age: Edit.Age,
        Gender:Edit.Gender
    })
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }

let {id}=useParams()
    console.log(id,"id")
    useEffect(() => {
        axios.get(`http://localhost:3006/Users/${id}`)
            .then((res) => {
                setEdit(res.data)
                console.log(res, "res")
            })
            .catch(() => {
            })
    },[])
    useEffect(() => {
        if (Edit) {
            setdata(Edit)
        }
    },[Edit])
    console.log(Edit,"Eidt Value")

    const handleCreate = () => {
        axios.put(`http://localhost:3006/Users/${id}`,data)
            .then((res) => {
            console.log(res,"ress")
                // dispatch({type:"EDIT",payload:user})
            })
            navigate("/Api") 
            console.log(data,"dataaaaaa")
            .catch(() => {
            })
           
    }


    return (
        <>
            <h1>Edit User</h1>
            <Box container  >
                <Paper>
                    <Grid container direction="column" justifyContent="center" alignItems="center" className="Sign" >

                        <Grid xs={2}></Grid>
                        <Grid item xs={8}>
                            <Grid>
                                <div> <TextField label="Name" value={data.Name} onChange={handleChange} name="Name" /></div>
                                <div> <TextField label="Age" value={data.Age} onChange={handleChange} name="Age" />  </div>
                                <div> <TextField label="Gender" value={data.Gender} onChange={handleChange} name="Gender" /></div>

                            </Grid>
                            <Button onClick={handleCreate} variant="contained">Create</Button>

                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Paper>
            </Box>

        </>
    )
}
export default Edit