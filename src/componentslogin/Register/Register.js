import { TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Screen from "../Login/Screen";
import React, { useState } from "react";
import './Sign.css'
import { Link } from "react-router-dom";

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
            <div className="Sign"><h1>Sign In</h1>
                <Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <TextField label="First Name" value={data.Fname} onChange={handleChange} name="Fname" />
                                        <TextField label="Second Name" value={data.Sname} onChange={handleChange} name="Sname" />
                                    </div>

                                    <div>
                                        <TextField fullWidth label="Email Id" value={data.Email} onChange={handleChange} name="Email" id="fullWidth" sx={{ width: 470, }} />
                                    </div>
                                    <div>
                                        <TextField label="New Password" value={data.Npsw} onChange={handleChange} name="Npsw" />
                                        <TextField label="Conform Password" value={data.Cpsw} onChange={handleChange} name="Cpsw" />
                                    </div>
                                    <div>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the Terms of Use" />
                                    </div>
                                    <div>
                                        <Button variant="contained" onClick={handleSubmit} >  <Link to="/Screen">SignIN </Link></Button>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}
export default Register