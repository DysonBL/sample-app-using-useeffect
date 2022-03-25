import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { Input } from '@mui/material';

const Pop=(props)=>{
  console.log("testforpropss",props)
  const [data,setdata]=useState({
      id :"",
      Fname :"",
      Sname :"",
      Email :"",
  })
   console.log(data,"iddata")
   console.log(props,"datasss")

  const handleChange=(e)=>{
    console.log(data,"p1") 
    setdata({...data,[e.target.name]:e.target.value})
    
  }

  useEffect (()=>{
      if(props.userData){
     setdata(props.userData) 
      }
  },[props.userData]);
  
  const handleSave=()=>{
     props.edit(data)
     console.log("datas--==>",data)
   }

 return (
    <>
      <Modal show={props.open} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>userData User..</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
         <div><Input type="text" placeholder='Enter First name' onChange={handleChange} value={data.Fname} name='Fname'>First Name</Input></div>
         <div> <Input type="text" placeholder='Enter Second name'onChange={handleChange} value={data.Sname} name='Sname'>Second Name</Input></div>
         <div> <Input type="text" placeholder='Enter Email ID'   onChange={handleChange} value={data.Email} name='Email'>Email</Input></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Pop;