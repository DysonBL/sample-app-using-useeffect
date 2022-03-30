import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button ,} from "react-bootstrap";
import { Input } from '@mui/material';

const EditPop=()=>{
  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        click modal
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>EDIT USER...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div><Input type="text" placeholder='Enter First name'   name='Fname'>First Name</Input></div>
         <div> <Input type="text" placeholder='Enter Second name'  name='Sname'>Second Name</Input></div>
         <div> <Input type="text" placeholder='Enter Email ID'    name='Email'>Email</Input></div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
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