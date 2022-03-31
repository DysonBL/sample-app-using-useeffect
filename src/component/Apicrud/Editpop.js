import React, { useEffect, useState,} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button ,} from "react-bootstrap";
import { Input } from '@mui/material';

const EditPop=(props)=>{
  const initial={
    Name:props.change.Name,
    Age:props.change.Age,
    Gender:props.change.Gender}

  const [data,setdata]=useState({initial})
 
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
  useEffect(()=>{
    if(props.change)
    setdata(props.change)
    },[props.change])

  const handleClose=()=>{
    props.userdata(data)
    console.log(data,"saveButton")
  }
  
  return (
    <>
      <Modal show={props.open} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT USER...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div><Input type="text" placeholder='Enter Name'onChange={handleChange} value={data.Name}   name="Name">Name</Input></div>
         <div> <Input type="text" placeholder='Enter Age'onChange={handleChange} value={data.Age}  name="Age">Age</Input></div>
         <div> <Input type="text" placeholder='Enter Gender'onChange={handleChange} value={data.Gender} name="Gender">Gender</Input></div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EditPop;