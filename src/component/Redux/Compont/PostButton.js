import { TextField, Button, Grid, Paper } from "@mui/material";
import Box from '@mui/material/Box';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { POST_PRODUCT } from "../Action/Action";

const PostButton = () => {

    let navigate = useNavigate()
    const dispatch = useDispatch();
    const [datas, setdatas] = useState({
        Name: "",
        Price: "",
        url: ""
    })
    const handleChange = (e) => {
        setdatas({ ...datas, [e.target.name]: e.target.value })
        console.log(datas, "datas==>")
    }
    const PostCreat = (e) => {
        e.preventDefault()
        console.log("==>post", datas)
        dispatch(POST_PRODUCT(datas))
        navigate("/Uiscreen/")
    }

    return (
        <>
            <h1>PostT Prodects</h1>
            <Box container >
                <Paper>
                    <Grid container direction="column" justifyContent="center" alignItems="center" className="Sign" >

                        <Grid xs={2}></Grid>
                        <Grid item xs={8}>
                            <Grid>
                                <div> <TextField label="Name" value={datas.Name} onChange={handleChange} name="Name" /></div>
                                <div> <TextField label="Price" value={datas.Price} onChange={handleChange} name="Price" />  </div>
                                <div> <TextField label="url" value={datas.url} onChange={handleChange} name="url" /></div>

                            </Grid>
                            <Button onClick={PostCreat} variant="contained">Create POST</Button>

                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </Paper>
            </Box>

        </>
    )
}
export default PostButton