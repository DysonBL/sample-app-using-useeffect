import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import Register from "../Register/Register";
import "./Login.css"
const Screen = (props) => {

        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
       
       
        const handleChange = (e) => {
                e.preventDefault();
                let Data = localStorage.getItem("data")
                let newDatas = JSON.parse(Data);
                console.log("NEW OK==>",newDatas)
                console.log(email,password)
                let newData = newDatas.find((item)=>item.Email===email && item.Cpsw===password)
                
                 console.log(newData)
                
                if (newData) {
                      console.log('sucsses')
                      alert("your login succes..Enjoy your Browser")
                }
                else{
                        alert("Your Email and Password Miss")
                }
              
        }
        const signinClick=(e)=>{
                e.preventDefault()
             

        }
                return (

                        <div className="login">
                                <Box sx={{ width: '80%' }}>
                                        <h1>Login Page</h1>
                                        <Grid container>
                                                <Grid item xs={3}>

                                                </Grid>
                                                <Grid item xs={6}>
                                                        <Grid container direction={'column'}>
                                                                <Grid item xs={6}>
                                                                        <label>E.Mail</label>
                                                                        <input type={'email'} value={email} onChange={e => setemail(e.target.value)} placeholder="Enter the Mail" />
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                        <lable>Password</lable>
                                                                        <input type={'password'} value={password} onChange={e => setpassword(e.target.value)} placeholder="Enater the password" />
                                                                </Grid>
                                                                <Grid item={6}>
                                                                        <Grid><Button  onClick={signinClick}><Link to="/Register">Sign In</Link></Button></Grid>
                                                                        <Grid><Button  onClick={handleChange}>Login</Button></Grid>
                                                                </Grid>
                                                                
                                                        </Grid>

                                                </Grid>
                                                <Grid item xs={3}>
                                              
                                                </Grid>
                                        </Grid>
                                </Box>
                        </div>

                )
        }

        export default Screen


