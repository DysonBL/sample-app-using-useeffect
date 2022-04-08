import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { TextField, Button} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams} from "react-router-dom";
import {GET_PRODUCTS, PUT_PRODUCT} from "../Action/Action";
import axios from "axios";
import { editProduct } from "../Action/Action";
import { useDispatch } from "react-redux";



const EditButton = () => {
    

    const dispatch=useDispatch();
   
    const [Put,setPut]=useState()
    console.log(Put,"Putdata")
    const [ids,setId]=useState(null)
    
    
    const [Data, setData] = useState({
        Name:"",
        Price:"",
        url:""
    })
    
    const handleChange = (e) => {
        setData({ ...Data, [e.target.name]: e.target.value })
        console.log(Data)
    } 
    console.log("Edit parems")
    let {Id}=useParams()
    console.log("newid",Id)
   
    useEffect(()=>{
       
        const GET_PRODUCTS=()=>{    
            axios          
            .get(`http://localhost:3004/user/${Id}`)
            .then((res)=>{
                console.log(res,"editdata==>")
                setPut(res.data,"gettt")
            })
            .catch((error)=>{
                console.log(error,"error in get")
            }) 
            }
        GET_PRODUCTS()

    },[])
    useEffect(() => {
        if (Put) {
            setData(Put)
        }
    },[Put])


    
   
    const handleCreate=(e)=>{
        e.preventDefault()
        console.log(Data,"edderdxhjfjkg")
        dispatch(PUT_PRODUCT(Data,Id)) 
      }
    return (
        <>
            <div className=" row-6 row-md-6">
                <div className="col-6">
                    <Card style={{ width: '33rem' }} className="bg-dark text-white">
                        <Card.Img src=" https://us.123rf.com/450wm/djvstock/djvstock2008/djvstock200817641/153944760-seller-woman-farm-products-market-facade-fruits-vector-illustration.jpg?ver=6" />
                        <Card.ImgOverlay>
                            <Card.Title><h1>EDIT MY PRODUCT</h1></Card.Title>
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
export default EditButton