import { TextField, Button, Grid ,Paper} from "@mui/material";
import Box from '@mui/material/Box';
import React, { useState ,useReducer} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Post = (props) => {
    const[state,dispatch]=useReducer("") 
    const [data, setdata] = useState({
        Id:Date.now(),
        Name: "",
        Age: "",
        Gender: ""
    })
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
        console.log(data)
    }     
    const PostCreat=()=>{
        axios.post("http://localhost:3006/Users",data)
        .then((res)=>{
        res.push()
         console.log(res,"post")
         dispatch({type:"POST",payload:res.data})})   
        .catch((error)=>{
        console.log(error,"error");
    })
    } 
    return (
        <>
            <h1>Create User</h1>
                <Box  container  >
                    <Paper>
                    <Grid container direction="column"  justifyContent="center"  alignItems="center"className="Sign" >
                         
                        <Grid  xs={2}></Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <TextField label="Name" value={data.Name} onChange={handleChange} name="Name" />
                                    <TextField label="Age" value={data.Age} onChange={handleChange} name="Age" />  
                                    <TextField label="Gender" value={data.Gender} onChange={handleChange} name="Gender" />                          
                        
                                   </Grid>             
                                    <Button  onClick={PostCreat} variant="contained"><Link to="./Api">Create</Link></Button>
                               
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                        </Paper>
                    </Box>

        </>
    )
}
export default Post