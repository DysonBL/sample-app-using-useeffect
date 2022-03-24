import { Label } from "@mui/icons-material";
import React from "react";
import {Button,Modal} from "react-bootstrap";

 const Models=()=>{
  return (
    <>
     <Modal>
        <Modal.Header>
          <Modal.Title>FirstName:</Modal.Title>
          <Label type="text" variant="outline"></Label>
        </Modal.Header>
        <Modal.Body>SecondName:</Modal.Body>
        <Label type="text" variant="outline"></Label>
        <Modal.Footer>
          <Button variant="Primary"> Save</Button>
          <Button variant="Primary"> Cancsel</Button>
        </Modal.Footer>
        </Modal>
    </>
  )
}
export default Models