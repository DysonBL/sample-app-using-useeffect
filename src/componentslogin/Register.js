import { TextField, FormControlLabel, Checkbox, Button, Grid } from "@mui/material";
import Box from '@mui/material/Box';
import Screen from "./Screen";
import React, { useState } from "react";
import './Sign.css'
let arry=[]

const Register = () => {
    console.log('register form')

    // const [Fname, setFname] = useState('')
    // const [Sname, setSname] = useState('')
    // const [Email, setEmail] = useState('')
    // const [Npsw, setNpsw] = useState('')
    // const [Cpsw, setCpsw] = useState('')
    const [Sign, setSign] = useState('')
    const [showReg,setShowReg]=useState(true)
    const [data,setdata]=useState({
        Fname:"",
        Sname:"",
        Email:"",
        Npsw:"",
        Cpsw:"", })
      const handleChange=(e)=>{
            setdata({...data,[e.target.name]:e.target.value})
        }    

    // const handleChange = (e) => {
    //     console.log([Fname])
    //     setFname(e.target.value)
    // }
    // const handleChange1 = (e) => {
    //     setSname(e.target.value)
    // }
    // const handleChange2 = (e) => {
    //     setEmail(e.target.value)
    // }
    // const handleChange3 = (e) => {
    //     setNpsw(e.target.value)
    // }
    // const handleChange4 = (e) => {
    //     setCpsw(e.target.value)
    // }
    const onClick=()=>{
        setShowReg=(true)
    }
    const handleSubmit = () => {
        // const obj = {
        //     firstname:data.Fname,
        //     secondname:data.Sname,
        //     mailid:data.Email,
        //     password:data.Cpsw,
        // }
        // console.log(obj)

        // window.sessionStorage.setItem("firstname","Fname");
        // window.sessionStorage.getItem("firstname");

        // window.sessionStorage.setItem('data',JSON.stringify(data));
        // window.sessionStorage.getItem('data')
        arry.push(data);
        console.log("hiui",arry)
        localStorage.setItem('data',JSON.stringify(arry));
        
        const datas= JSON.parse(localStorage.getItem('data'));
       
        setShowReg(false)
        console.log(datas.Fname, datas.Sname, datas.Email, datas.Npsw, datas.Cpsw)

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
                                        <TextField label="First Name" value={data.Fname} onChange={handleChange} name="Fname" />
                                        <TextField label="Second Name" value={data.Sname} onChange={handleChange} name="Sname"/>
                                    </div>
    
                                    <div>
                                        <TextField fullWidth label="Email Id" value={data.Email} onChange={handleChange} name="Email"id="fullWidth" sx={{ width: 470, }} />
                                    </div>
                                    <div>
                                        <TextField label="New Password" value={data.Npsw} onChange={handleChange} name="Npsw"/>
                                        <TextField label="Conform Password" value={data.Cpsw} onChange={handleChange} name="Cpsw" />
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
            ):(<Screen pass={setShowReg}/>)
        }
        </>
    )
}
export default Register