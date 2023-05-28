import React from "react";
import Container from "react-bootstrap/Container";
import "./login.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navb from "./Navb";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  return (
    <>
      <Navb />
      <Container fluid className="mt-5">
        <Row
          style={{
            marginBottom: "40px",
          }}
        >
          <Col lg={7} md={6} sm={12}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://extension.technology/wp-content/uploads/2020/09/contact-us-4.png"
              alt="#"
            />
          </Col>
          <Col lg={4} md={8} sm={12} className="text-center">
            <img
              src="https://img.icons8.com/external-fauzidea-blue-fauzidea/2x/external-feedback-e-commerce-fauzidea-blue-fauzidea.png"
              alt="#"
            ></img>
            <Form data-aos="fade-left">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={{
                    borderRadius: "15px",
                  }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  style={{
                    borderRadius: "15px",
                  }}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control
                  style={{
                    borderRadius: "15px",
                    height: "200px",
                    textAlign: "start",
                  }}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  type="text"
                  placeholder="Message"
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  axios
                    .post("http://localhost:3300/comment", {
                      name,
                      email,
                      message,
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
                  borderRadius: "15px",
                }}
              >
                Send
              </Button>
              <p
                style={{
                  marginTop: "10px",
                }}
              ></p>
            </Form>
          </Col>
        </Row>
        <div
          style={{
            textAlign: "right",
          }}
          className="text-center"
        >
          <a href="https://about.facebook.com/">
            <img
              style={{
                margin: "auto",
              }}
              src="https://img.icons8.com/ios/2x/facebook-circled--v3.gif"
            />
          </a>
          <a href="https://www.instagram.com/?hl=en">
            <img
              style={{
                margin: "auto",
              }}
              src="https://img.icons8.com/ios/2x/instagram-new--v3.gif"
            />
          </a>
          <a href="https://twitter.com/i/flow/login">
            <img
              style={{
                margin: "auto",
              }}
              src="https://img.icons8.com/ios/2x/twitter--v2.gif"
            />
          </a>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
