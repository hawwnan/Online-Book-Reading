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
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              src="https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/2x/external-add-user-social-media-smashingstocks-isometric-smashing-stocks.png"
              alt="#"
            ></img>
            <Form data-aos="fade-left">
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  value={name}
                  type="text"
                  placeholder="Enter name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  value={email}
                  type="email"
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  value={password}
                  type="password"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </Form.Group>
              <Button
                onClick={(e) => {
                  axios
                    .post("http://localhost:3300/users/register", {
                      name,
                      email,
                      password,
                    })
                    .then((res) => {
                      console.log(res.data);
                      navigate("/login");
                      toast.success("Success Notification !", {
                        position: toast.POSITION.TOP_CENTER,
                      });
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
                Sign Up
              </Button>
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
                href="/login"
              >
                <p
                  style={{
                    marginTop: "10px",
                  }}
                >
                  Already registered?
                </p>
              </a>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://www.marcobehler.com/images/guides/undraw_security_o890-e715add1.svg"
              alt="#"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Register;
