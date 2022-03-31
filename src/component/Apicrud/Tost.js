import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import "bootstrap/dist/css/bootstrap.css";

const Tost=()=>{
    const [showToast, setShowToast] = useState(true);
    const toggleShowToast = () => setShowToast(!showToast);

 return(
  

    <div>
      <Toast show={showToast} onClose={toggleShowToast}>
        <Toast.Header>
          <strong className="mr-auto">Error Message.</strong>
          <small>Just mins ago</small>
        </Toast.Header>
        <Toast.Body>
            <stong>Your calling user not Found..!!!</stong>
        </Toast.Body>
      </Toast>
      <Button onClick={toggleShowToast}>Tost</Button>
    </div>
    )
}
export default Tost