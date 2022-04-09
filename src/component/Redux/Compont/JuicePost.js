import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { TextField, Button} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { POST_JUICE } from "../Action/JuiceAction";
import { Link } from "react-router-dom";



const JuicePost = () => {
    const dispatch=useDispatch();
    const [Data, setData] = useState({
        Name:"",
        Price:"",
        url:""
    })
    
    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
        console.log(Data)
    } 
  
    const handleCreate=(e)=>{
        e.preventDefault()
        dispatch(POST_JUICE(Data))   
      }
    return (
        <>
            <div className=" row-6 row-md-6">
                <div className="col-6">
                    <Card style={{ width: '33rem' }} className="bg-dark text-white">
                        <Card.Img src=" https://lmbsweets.com/wp-content/uploads/2021/07/fresh-juice-.jpg" />
                        <Card.ImgOverlay>
                            <Card.Title><h1>EDIT JUICE VARAITYS</h1></Card.Title>
                            <Card.Text style={{ margin:'5rem' }} >
                                <div> <TextField label="Name" value={Data.Name} onChange={handleChange} name="Name" /></div>
                                <div> <TextField label="Price" value={Data.Price} onChange={handleChange} name="Price" />  </div>
                                <div> <TextField label="url" value={Data.url} onChange={handleChange} name="url" /></div>


                            </Card.Text>
                            <Card.Text></Card.Text>
                        </Card.ImgOverlay>
                        <Button className="text-white" onClick={handleCreate} variant="primary"><Link to="/Uiscreen">SAVE</Link></Button>

                    </Card>
                </div>
            </div>
        </>
    )
}
export default JuicePost