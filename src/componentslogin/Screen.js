import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Button} from "@mui/material";
import "./Login.css"




const Screen = (props) => {

        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
       
       const onClick=()=>{
               console.log("login")
       }
        const handleChange = (e) => {
                e.preventDefault();
                let datas= localStorage.getItem("data");
                let newData = JSON.parse(datas);
                console.log("hai",newData)
                console.log(newData.Fnmae)
                console.log(newData.Sname)
                console.log(newData.Email)
                console.log(newData.Npsw)
                if (email===newData.Email && password===newData.Cpsw) {
                      console.log('sucsses')
                      alert("your login succes..Enjoy your Browser")
                }
                else{
                        alert("Your Email and Password Miss")
                }
              
        }
        const signinClick=(e)=>{
                e.preventDefault()
                props.pass(true)

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
                                                                        {/* <button  onClick={handleChange}>Login</button> */}
                                                                        <Button type={'button'} variant="contained" onClick={handleChange}>Login</Button>
                                                                        <Grid><Button  onClick={signinClick}>Sign In</Button></Grid>
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


