import React, { useEffect, useState } from "react";
import "./Index.css";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, REMOVE_PRODUCT } from "./Action/Action";
import { GET_JUICE, REMOVE_JUICE } from "./Action/JuiceAction";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Uiscreen = () => {

    const Products = useSelector((state) => state.allproducts.Products);
    console.log(Products, "PRODUCT")
    const JUICE = useSelector((state) => state.allJuice.JUICE)
    const dispatch = useDispatch();
    let navigate = useNavigate()
    //Sweets Product
    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, []);
    console.log("PRODUCT", Products)

    const clickEdit = (e, data) => {
        navigate(`/EditButton/${data}`)
        console.log("editdataaa", data)
    }

    const clickRemove = (e, data) => {
        e.preventDefault()
        console.log("remove", data)
        dispatch((REMOVE_PRODUCT(data)))
    }

    // //Juice Product
    useEffect(() => {
        dispatch((GET_JUICE()))
    }, [])
    console.log(JUICE, "JUICE")

    const handleEdit = (e, data) => {
        console.log("JUice edit")
        navigate(`/JuiceEdit/${data}`)
    }
    const handleRemove = (e,data) => {
        console.log("JUice REmove")
        e.preventDefault()
        dispatch((REMOVE_JUICE(data)))
        dispatch(GET_JUICE())

    }
    return (
        <>

            <nav className="navbar navbar-dark bg-primary">
                <a className="navbar-brand" href="#">SWEETS and JUICE STALL</a>

                <form className="d-flex">
                    <input className="form-control ml-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <Button className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</Button>
                </form>
                <Dropdown as={ButtonGroup}>
                    <Dropdown.Toggle id="dropdown-custom-1" variant="danger">POST ALL</Dropdown.Toggle>
                    <Dropdown.Menu className="super-colors">
                        <Dropdown.Item className="super-colors"><Link to="/PostButton"> SWEETS POST</Link></Dropdown.Item>
                        <Dropdown.Item className="super-colors"> <Link to="/JuicePost">JUICE POST</Link></Dropdown.Item>
                   <Dropdown.Divider />
                    </Dropdown.Menu>
                </Dropdown>{' '}
            </nav>
            <div>
                <div className="row h-100 overflow-hide">
                    <div className="menu col-6 col-md-4">
                        <div className="col-12 ">
                            <div className="row ">
                                <nav className=" title navbar navbar-dark bg-warning overflow-auto">HUMYY...YUMMYY...Tasty Sweets</nav>
                                {
                                    Products && Products.map((data) => {
                                        return (
                                            <div className="col-6 overflow-auto" >
                                                <Card style={{ width: '13rem' }}>
                                                    <Card.Img variant="top" src={data.url} />
                                                    <Card.Body>
                                                        <Card.Title>{data.Name}</Card.Title>
                                                        <Card.Text>
                                                            Price:{data.Price}
                                                        </Card.Text>
                                                        <div className="d-flex ">
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => clickEdit(e, data.id)}>EDIT</Button>
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => clickRemove(e, data.id)}>DELETE</Button>
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
                        <div className="col-12 ">
                            <div className="row ">
                                <nav className=" title navbar navbar-dark bg- overflow-auto">COOL..COOL..FRESH JUICE  .....Enjoy the dirnk</nav>
                                {
                                    JUICE && JUICE.map((data) => {
                                        return (
                                            <div className="col-3 overflow-auto" >
                                                <Card style={{ width: '13rem' }}>
                                                    <Card.Img variant="top" src={data.url} />
                                                    <Card.Body>
                                                        <Card.Title>{data.Name}</Card.Title>
                                                        <Card.Text>
                                                            Price:{data.Price}
                                                        </Card.Text>
                                                        <div className="d-flex ">
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => handleEdit(e, data.id)}>EDIT</Button>
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => handleRemove(e, data.id)}>DELETE</Button>
                                                        </div>
                                                    </Card.Body>
                                                </Card>
                                            </div>)
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Uiscreen;