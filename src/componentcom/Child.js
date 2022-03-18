import react from "react";
import { Button } from "@mui/material";
const Child=(props)=>{

const handleSubmit=(e)=>{
    e.preventDefault()
    props.passData("hai henry")
}

    return(
        <div>
        <h3>Child Comunicatin</h3>
        <h2>{props.son}</h2>

        <Button variant="contained" onClick={handleSubmit}>Send</Button>
        </div>
        

    )
}

export default Child 