import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { Input } from '@mui/material';


const Pop=(props)=>{


const[Name,setName]=useState({
  FirstName:"",
  SecondName:"",
  Email :""
})
  return (
    <>
      <Modal show={props.open} onHide={props.close}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User..</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
          <div><Input type="text" placeholder='Enater First name'>First Name</Input></div>
         <div> <Input type="text" placeholder='Enater Second name'>Second Name</Input></div>
         <div> <Input type="text" placeholder='Enater Email ID'>Email</Input></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={props.close}>
            Save User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Pop