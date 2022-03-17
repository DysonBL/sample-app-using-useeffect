import { TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useState } from "react";
import Screen from "./Screen";


const Register = () => {
    console.log('register form')

    const [Fname, setFname] = useState('')
    const [Sname, setSname] = useState('')
    const [Email, setEmail] = useState('')
    const [Npsw, setNpsw] = useState('')
    const [Cpsw, setCpsw] = useState('')
    const [Sign, setSign] = useState('')

    const [showReg,setShowReg]=useState(true)

    const handleChange = (e) => {
        console.log([Fname])
        setFname(e.target.value)
    }
    const handleChange1 = (e) => {
        setSname(e.target.value)
    }
    const handleChange2 = (e) => {
        setEmail(e.target.value)
    }
    const handleChange3 = (e) => {
        setNpsw(e.target.value)
    }
    const handleChange4 = (e) => {
        setCpsw(e.target.value)
    }
    const handleSubmit = () => {
        const obj = {
            firstname:Fname,
            secondname:Sname,
            mailid:Email,
            password:Cpsw,
        }
        console.log(obj)

        // window.sessionStorage.setItem("firstname","Fname");
        // window.sessionStorage.getItem("firstname");

        window.sessionStorage.setItem('data',JSON.stringify(obj));
        window.sessionStorage.getItem('data')
    
        localStorage.setItem('data',JSON.stringify(obj));
        const data= JSON.parse(localStorage.getItem('data'));
        setShowReg(false)
        console.log([Fname, Sname, Email, Npsw, Cpsw])


    }
    // localStorage.getItem("data");
    //  localStorage.clear();

    return (
        <>
        {
            showReg ? (
                <div className="Sign"><h1>Sign In</h1>
                <p>Please fill .To create a account</p>
                <Box>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={3}>
                                </Grid>
                                <Grid item xs={6}>
                                    <div>
                                        <TextField label="First Name" value={Fname} onChange={handleChange} />
                                        <TextField label="Second Name" value={Sname} onChange={handleChange1} />
                                    </div>
    
                                    <div>
                                        <TextField fullWidth label="Email Id" value={Email} onChange={handleChange2} id="fullWidth" sx={{ width: 470, }} />
                                    </div>
                                    <div>
                                        <TextField label="New Password" value={Npsw} onChange={handleChange3} />
                                        <TextField label="Conform Password" value={Cpsw} onChange={handleChange4} />
                                    </div>
                                    <div>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="I accept the Terms of Use" />
                                    </div>
                                    <div>
                                        <Button variant="contained" value={Sign} onClick={handleSubmit}>SignIN</Button>
                                    </div>
                                </Grid>
                                <Grid item xs={3}>
    
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
            ):(<Screen/>)
        }
        </>
    )
}
export default Register