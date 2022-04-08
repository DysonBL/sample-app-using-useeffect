import React, { useEffect, useState } from "react";
import "./Index.css";
import { Button ,Nav,Navbar} from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCTS, REMOVE_PRODUCT } from "./Action/Action";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import EditButton from "./Compont/EditButton";


const Uiscreen = () => {
    
    const Products = useSelector((state) => state.allproducts.Products);
    const dispatch = useDispatch();
  let navigate=useNavigate()
    useEffect(() => {
        dispatch(GET_PRODUCTS())
    }, []);
     console.log("PRODUCT", Products)
   
    const clickEdit = (e,data) => {
        navigate(`/EditButton/${data}`) 
       
        console.log("editdataaa",data)
    }

    const clickRemove = (e, data) => {
        console.log("hai")
        e.preventDefault()
        console.log("remove", data)
        dispatch((REMOVE_PRODUCT(data)))
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
               
                 <span className="navbar-toggler-icon">hi</span>
                </Button>
           
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
                                                            <Button style={{ margin: "2px" }} variant="primary" onClick={(e) => clickEdit(e,data.id)}>EDIT</Button>
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
                        <div className=" row-6 row-md-6">
                            <div className="col-6" style={{padding:'4rem'}}>
                                <Card style={{ width: '35rem' ,marg:'3rem',padding:'5rem' }} className="bg-whitw text-dark">
                                    <Card.Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYcR6NujL5QIVgGfF7aPENJ0gQZ7s-k6WRfA&usqp=CAU" alt="Card image" />
                                    <Card.ImgOverlay>
                                        <Card.Title>WELLCOME BACK</Card.Title>
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