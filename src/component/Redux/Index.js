import React from "react";
import "./Index.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";


const Index = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Sweets Stall </a>

                <form className="d-flex">
                    <input className="form-control ml-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</Button>
                </form>
                <Button className="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Button>

            </nav>
            <div>
                <div className="row h-100">

                    <div className="menu col-6 col-md-4">
                       
                        <div className="row-3">
                        <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/cadbury-dairy-milk-bar-chocolate-214341204.jpg" />
                                    <Card.Body>
                                        <Card.Title>Dairy Milk</Card.Title>
                                        <Card.Text>
                                            card's content.
                                        </Card.Text>
                                        <div className="d-flex">
                                            <Button style={{ margin: "2px" }} variant="primary">Edit</Button>
                                            <Button style={{ margin: "2px" }} variant="primary">Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                               
                                <div className="row-6">
                        <Card style={{ width: '10rem' }}>
                                    <Card.Img variant="top" src="https://content3.jdmagicbox.com/comp/amravati/j5/9999px721.x721.140221225010.k8j5/catalogue/snaks-center-warud-amravati-9lbtx.jpg" />
                                    <Card.Body>
                                        <Card.Title>Dairy Milk</Card.Title>
                                        <Card.Text>
                                            card's content.
                                        </Card.Text>
                                        <div className="d-flex">
                                            <Button style={{ margin: "2px" }} variant="primary">Edit</Button>
                                            <Button style={{ margin: "2px" }} variant="primary">Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                </div>
                         </div>      
                    <div className=" bill col-12 col-sm-6 col-md-8">billing</div>
                </div>
            </div>


        </>
    )
}
export default Index;