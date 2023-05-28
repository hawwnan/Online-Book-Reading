import React from "react";
import Container from "react-bootstrap/Container";
import "./login.css";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navb from "./Navb";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              src="https://img.icons8.com/external-xnimrodx-blue-xnimrodx/2x/external-login-freelancer-xnimrodx-blue-xnimrodx.png"
              alt="#"
            ></img>
            <Form data-aos="fade-left">
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
                  e.preventDefault();
                  axios
                    .post("http://localhost:3300/users/login", {
                      email,
                      password,
                    })
                    .then((token) => {
                      localStorage.setItem("token", token.data);
                      navigate("/reads");
                      window.location.reload();
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
                Login
              </Button>
              <p
                style={{
                  marginTop: "10px",
                }}
              >
                Forgot Password?
              </p>
            </Form>
          </Col>
          <Col lg={8} md={6} sm={12}>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="https://java-master.com/wp-content/uploads/2020/05/3567818.jpg"
              alt="#"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Login;
