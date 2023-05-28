import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navb from "./Navb";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

function EditBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [availability, setAvailability] = useState("");
  const [image, setImage] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:3300/books/" + id)
      .then((res) => {
        setName(res.data.name);
        setAuthor(res.data.author);
        setDescription(res.data.description);
        setPrice(res.data.price);
        setAvailability(res.data.availability);
        setImage(res.data.image);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  const saveData = () => {
    axios
      .put("http://localhost:3300/books/" + id, {
        name,
        author,
        description,
        price,
        image,
      })
      .then((response) => {
        console.log("Book Updated");
        navigate("/books");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Navb />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={4} md={8} sm={12} className="text-center">
            <img
              src="https://www.shareicon.net/data/2016/06/27/623443_book_256x256.png"
              alt="#"
            ></img>
            <Form data-aos="fade-left">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  value={name}
                  placeholder="Enter Book name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Control
                  type="text"
                  placeholder="Enter Author name"
                  value={author}
                  onChange={(e) => {
                    setAuthor(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicDescription">
                <Form.Control
                  type="text"
                  value={description}
                  placeholder="Enter Description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Control
                  type="number"
                  value={price}
                  placeholder="Enter Price"
                  onChange={(e) => {
                    setPrice(e.target.valueAsNumber);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicImage">
                <Form.Control
                  type="text"
                  value={image}
                  placeholder="Enter Image Source"
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                onClick={saveData}
                className="btn-danger"
                style={{
                  width: "100%",
                }}
              >
                Save changes
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://img.freepik.com/free-vector/flat-design-world-book-day-concept_52683-35711.jpg?w=2000"
              alt="#"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default EditBook;
