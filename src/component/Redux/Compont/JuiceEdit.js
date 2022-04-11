import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { PUT_JUICE } from "../Action/JuiceAction";

const JuiceEdit = () => {
  const dispatch = useDispatch();

  const [Put, setPut] = useState();
  console.log(Put, "Putdata");

  const [Data, setData] = useState({
    Name: "",
    Price: "",
    url: "",
  });

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
    console.log(Data, "Initial Data");
  };
  console.log("Edit parems");
  let { Id } = useParams();
  console.log("newid", Id);

  useEffect(() => {
    const GET_PRODUCTS = (Data) => {
      axios
        .get(`http://localhost:3005/Juice/${Id}`, Data)
        .then((res) => {
          console.log(res, "editdata==>");
          setPut(res.data, "gettt");
        })
        .catch((error) => {
          console.log(error, "error in get");
        });
    };
    GET_PRODUCTS();
  }, [Id]);
  useEffect(() => {
    if (Put) {
      setData(Put);
    }
  }, [Put]);

  const handleCreate = (e) => {
    e.preventDefault();
    console.log(Data, "edderdxhjfjkg");
    dispatch(PUT_JUICE(Data, Id));
  };
  return (
    <>
      <div className=" row-6 row-md-6">
        <div className="col-8">
          <Card style={{ width: "48rem" }} className="bg-dark text-white">
            <Card.Img src=" https://image.shutterstock.com/image-photo/fresh-juice-pours-fruit-vegetables-260nw-532002529.jpg" />
            <Card.ImgOverlay>
              <Card.Title>
                <h1>EDIT FRESH JUICE..</h1>
              </Card.Title>
              <Card.Text style={{ margin: "7rem" }}>
                <div>
                  {" "}
                  <TextField
                    label="Name"
                    value={Data.Name}
                    onChange={handleChange}
                    name="Name"
                  />
                </div>
                <div>
                  {" "}
                  <TextField
                    label="Price"
                    value={Data.Price}
                    onChange={handleChange}
                    name="Price"
                  />{" "}
                </div>
                <div>
                  {" "}
                  <TextField
                    label="url"
                    value={Data.url}
                    onChange={handleChange}
                    name="url"
                  />
                </div>
              </Card.Text>
              <Card.Text></Card.Text>
            </Card.ImgOverlay>
            <Button
              className="text-white"
              onClick={handleCreate}
              variant="primary"
            >
              <Link to="/Uiscreen">SAVE EDIT</Link>
            </Button>
          </Card>
        </div>
      </div>
    </>
  );
};
export default JuiceEdit;
