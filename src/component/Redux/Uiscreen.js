import React, { useEffect, useState } from "react";
import "./Index.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, REMOVE_PRODECT } from "./Action/Action";
import { Link } from "react-router-dom";

const Uiscreen = () => {
    const Products = useSelector((state) => state.allproducts.Products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, []);

    console.log("PRODUCT", Products)
    const clickEdit = () => {
        console.log("edit")
    }

    const clickRemove = (e, data) => {
        console.log("hai")
        e.preventDefault()
        console.log("remove", data)
        dispatch((REMOVE_PRODECT(data)))
    }

    return (
        <>
            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">Sweets Stall </a>

                <form className="d-flex">
                    <input className="form-control ml-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</Button>
                </form>
                <Button variant="warning"> <Link to="/PostButton">POST</Link> </Button>


                <Button className="navbar-toggler" type="Button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
               
                 <span className="navbar-toggler-icon"></span>
                </Button>

            </nav>
            <div>

                <div className="row h-100">

                    <div className="menu col-6 col-md-4">
                        <div className="col-12">
                            <div className="row">
                                <nav className=" title navbar navbar-dark bg-warning">HUMYY...YUMMYY...Tasty Sweets</nav>

                                {
                                    Products && Products.map((data) => {
                                        return (
                                            <div className="col-6">
                                                <Card style={{ width: '13rem' }}>
                                                    <Card.Img variant="top" src={data.url} />
                                                    <Card.Body>
                                                        <Card.Title>{data.Name}</Card.Title>
                                                        <Card.Text>
                                                            Price:{data.Price}
                                                        </Card.Text>
                                                        <div className="d-flex">
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={() => clickEdit(data.id)}>Edit </Button>
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => clickRemove(e, data.id)}>Delete</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>)
                                    })
                                }
                              </div>
                    
                        </div>
                    </div>

                    <div className=" bill col-12 col-sm-6 col-md-8">
                        <div className=" row-6 row-md-6">
                            <div className="col-6">
                                <Card style={{ width: '33rem' }} className="bg-dark text-white">
                                    <Card.Img src="https://img.freepik.com/free-vector/sweet-shop-background-illustration_1416-547.jpg" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                           
                                        </Card.Text>
                                        <Card.Text></Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Uiscreen;