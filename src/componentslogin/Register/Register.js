import { TextField, FormControlLabel, Checkbox, Button, Grid ,Paper} from "@mui/material";
import Box from '@mui/material/Box';
import React, { useState } from "react";
import './Sign.css'
import { Link } from "react-router-dom";
import Login from "../Login/Login";

const Register = () => {
    const [data, setdata] = useState({
        Fname: "",
        Sname: "",
        Email: "",
        Npsw: "",
        Cpsw: "",
    })
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = () => {

        let localdata = localStorage.getItem("data")

        if (localdata) {

            let local = JSON.parse(localdata)
            local.push(data)
            localStorage.setItem("data", JSON.stringify(local))
        }
        else {
            localStorage.setItem("data", JSON.stringify([data]))
        }
    }
    return (
        <>
            <h1>Sign In</h1>
                <Box  container  >
                    <Paper>
                    <Grid container direction="column"  justifyContent="center"  alignItems="center"className="Sign" >
                         
                        <Grid  xs={2}></Grid>
                            <Grid item xs={8}>
                                <Grid>
                                    <TextField label="First Name" value={data.Fname} onChange={handleChange} name="Fname" />
                                    <TextField label="Second Name" value={data.Sname} onChange={handleChange} name="Sname" />
                            
                                <Grid gridAutoRows={4} >
                                    <TextField fullWidth label="Email Id" value={data.Email} onChange={handleChange} name="Email" />
                                </Grid>
                                
                                
                                    <TextField label="New Password" type="password" value={data.Npsw} onChange={handleChange} name="Npsw" />
                                    <TextField label="Conform Password" type="password" value={data.Cpsw} onChange={handleChange} name="Cpsw" />
                                </Grid>
                                
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the Terms of Use" />
                               
                                    <Button variant="contained" onClick={handleSubmit} >  <Link to="/Login">SignIN </Link></Button>
                               
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                        </Paper>
                    </Box>

        </>
    )
}
export default Register