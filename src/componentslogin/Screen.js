import React, { useState } from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';




const Screen = () => {

        const [email, setemail] = useState('')
        const [password, setpassword] = useState('')
        const handleChange = (e) => {
                e.preventDefault();
                let data = localStorage.getItem("data");
                let newData = JSON.parse(data);
                console.log(newData)

                if (email === newData.Email && password === newData.password) {
                        console.log('succsess')

                }
                else if (email === newData.Email && password === '') {
                        console.log('fillpassword')
                }
                else if (email === '' && password === newData.password) {
                        console.log('fillemail')
                }
                else if (email === '' && password === '') {
                        console.log('fillemailandpassword')
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
                                                                        <button type={'button'} onClick={handleChange}>Login</button>

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
}
        export default Screen


