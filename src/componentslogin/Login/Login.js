import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./Login.css"
const Login= () => {
        const [datas, setdata] = useState({
                email:"",
                password:"" })
        const handleChange=(e)=>{
                setdata({...datas,[e.target.name]:e.target.value})
        }
        const handleSubmit = (e) => {
                e.preventDefault();
                let Data = localStorage.getItem("data")
                let newDatas = JSON.parse(Data);
                let newData = newDatas.find((item) => item.Email===datas.email && item.Cpsw===datas.password)
                console.log("1",datas.email,datas.password)
                console.log("2",newData)
                if (newData) {
                        alert("your succes..Enjoy your Browser")
                }
                else {
                        
                        alert("Your Email and Password Miss match")
                }
        }
        return (

                <div className="login">
                        <Box>
                                <h1>Login Page</h1>
                                <Grid container>
                                        <Grid item xs={2}></Grid>
                                        <Grid item xs={8}>
                                                <Grid container direction='column' rowSpacing={4}>
                                                        <Grid item xs={6}>
                                                                <label>E.Mail</label>
                                                                <input type='email' name="email" value={datas.email} onChange={handleChange} placeholder="Enter the Mail" />
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                                <lable>Password</lable>
                                                                <input type='password' name="password"value={datas.password}  onChange={handleChange} placeholder="Enater the password" />
                                                        </Grid>
                                                        <Grid item={6} columnSpacing={4}>
                                                         <Button variant="outLine" ><Link to="/Register">Sign In</Link></Button></Grid>
                                                        
                                                         <Button variant="contained" onClick={handleSubmit}>Login</Button></Grid>
                                                        </Grid>
                                                </Grid>
                                                <Grid item xs={2}></Grid>
                                </Box>
                </div>

        )
}

export default Login


