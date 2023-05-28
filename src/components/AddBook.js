import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navb from "./Navb";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Container from "react-bootstrap/Container";

function AddBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailability] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });
  return (
    <>
      <Navb />
      <Container fluid className="mt-5">
        <Row>
          <Col lg={4} md={8} sm={12} className="text-center">
            <img
              src="https://img.icons8.com/officel/2x/elective.png"
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
                  value={author}
                  placeholder="Enter Author name"
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
                    setPrice(e.target.value);
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

              <Form.Group className="mb-3" controlId="formBasicLink">
                <Form.Control
                  type="text"
                  value={link}
                  placeholder="Enter Link Source"
                  onChange={(e) => {
                    setLink(e.target.value);
                  }}
                />
              </Form.Group>

              <Button
                onClick={(e) => {
                  axios
                    .post("http://localhost:3300/books", {
                      name,
                      author,
                      description,
                      price,
                      image,
                      link,
                    })
                    .then((res) => {
                      console.log(res.data);
                      navigate("/books");
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                className="btn-danger"
                style={{
                  width: "100%",
                }}
              >
                Add Book
              </Button>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://cuculi.com/assets/images/Home_Business.png"
              alt="#"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default AddBook;
