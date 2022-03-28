import React, { useEffect, useState ,useContext} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import { Input } from '@mui/material';
import "./Window.css"
import { UserContext } from './Window';

const Pop=(props)=>{
  const user =useContext(UserContext);
  const [data,setdata]=useState({
      id :"",
      Fname :"",
      Sname :"",
      Email :"",
  })
  
  const handleChange=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
    
  }

  useEffect (()=>{
      if(user.userData){
     setdata(user.userData) 
      }
  },[user.userData]);
  
  const handleSubmit=()=>{
     props.edit(data)
     console.log("datas--==>",data)
     
   }

 return (
    <>
      <Modal show={props.open} onHide={props.close}>
        <Modal.Header className='head' closeButton>
          <Modal.Title>userData User..</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
         <div><Input type="text" placeholder='Enter First name' onChange={handleChange} value={data.Fname} name='Fname'>First Name</Input></div>
         <div> <Input type="text" placeholder='Enter Second name'onChange={handleChange} value={data.Sname} name='Sname'>Second Name</Input></div>
         <div> <Input type="text" placeholder='Enter Email ID'   onChange={handleChange} value={data.Email} name='Email'>Email</Input></div>
        </Modal.Body>
        <Modal.Footer className='foote'>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save User
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Pop;