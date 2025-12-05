import { useState } from "react"
import profileicon from "./profileicon.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Sidebar() {
    
    let [ loggedIn , LogIn ] = useState(0);
    let [ details, setDetails ] = useState("--------")
    let [ name, setName ] = useState("");
    let [ show, setShow ] = useState(false);

    let handleClick = () => {
        if (loggedIn){
            LogIn(0);
            setName("");
            setDetails("--------")
        }
        else{
            setShow(true);
        }
    }
    let handleClose = () => setShow(false);
    let getName = () => name || "Guest";
    let getStatus = () => (loggedIn) ? "Log Out" : "Sign In";
    let handleSave = (event) => {
        event.preventDefault();
        setName(event.currentTarget[0].value);
        setDetails(event.currentTarget[1].value);
        setShow(0);
        LogIn(1);
    }

    return(
    <div className="border text-center rounded-3" style={{position:"sticky",width:"17vw", marginLeft:"2vw", height:"50vh", backgroundColor:"rgba(1,1,12,0.6)", left:0, top:"25vh",marginTop:"8rem"}}>

        <img src={profileicon} alt="profile image" height={"80px"}/>

        <div>
                <div className="fs-2 text-light">{getName()}</div>
                <div className="fs-5 text-light">{details}</div>
        </div>

        <button className="btn btn-primary rounded text-light m-4" onClick={handleClick}>
            {getStatus()}
        </button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSave}>
              <Form.Group className="mb-3" id="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  autoFocus
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" id="details">
                <Form.Label>Details</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your details"
                  autoFocus
                  required
                />
              </Form.Group>
            <div className="text-center">
                <Button variant="primary" type="submit">
                  Save Changes
                </Button>
            </div>
            </Form>
          </Modal.Body>
        </Modal>
    </div>
    )
}
