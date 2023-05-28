import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import "./fonts.css";
import { checkUser, getLoggedInUser, checkAdmin } from "./Check";
import { useState } from "react";

function Navb() {
  const navigate = useNavigate();
  return (
    <Navbar expand="lg" className="navTop">
      <Container>
        <img
          src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/344/external-bookcase-furniture-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
          alt="#"
        />
        <Navbar.Brand
          className="brand"
          style={{
            color: "#FEFFFF",
            fontSize: "25px",
            float: "left",
          }}
          href="/"
        >
          BookCafe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="Links">
            <Nav className="me-auto">
              {checkAdmin() && (
                <Nav.Link
                  style={{
                    color: "white",
                    fontFamily: "Arapey, serif",
                    fontSize: "18px",
                  }}
                  href="/books"
                >
                  Books
                </Nav.Link>
              )}
              <Nav.Link
                style={{
                  color: "white",
                  fontFamily: "Arapey, serif",
                  fontSize: "18px",
                }}
                href="/contact"
              >
                Contact
              </Nav.Link>
              {checkAdmin() && (
                <Nav.Link
                  style={{
                    color: "white",
                    fontFamily: "Arapey, serif",
                    fontSize: "18px",
                  }}
                  href="/users"
                >
                  Users
                </Nav.Link>
              )}

              {checkAdmin() && (
                <Nav.Link
                  style={{
                    color: "white",
                    fontFamily: "Arapey, serif",
                    fontSize: "18px",
                  }}
                  href="/add"
                >
                  Add
                </Nav.Link>
              )}
            </Nav>
          </div>
          <div
            style={{
              textAlign: "right",
              marginLeft: "50px",
            }}
            className="btn"
          >
            {!checkUser() ? (
              <>
                <a href="/register">
                  <Button
                    variant="outline-info"
                    style={{
                      marginLeft: "190px",
                      borderRadius: "20px",
                      marginBottom: "4px",
                      width: "100px",
                      fontFamily: "Arapey, serif",
                      color: "white",
                    }}
                  >
                    <i
                      style={{
                        marginRight: "2.2px",
                      }}
                      class="fa-solid fa-right-to-bracket"
                    ></i>
                    Sign Up
                  </Button>
                </a>
                <a href="/login">
                  <Button
                    variant="outline-info"
                    style={{
                      marginLeft: "10px",
                      borderRadius: "20px",
                      marginBottom: "4px",
                      fontFamily: "Arapey, serif",
                      width: "100px",
                      color: "black",
                    }}
                  >
                    <i
                      style={{
                        marginRight: "3px",
                      }}
                      class="fa-solid fa-arrow-right-to-bracket"
                    ></i>
                    Login
                  </Button>
                </a>
              </>
            ) : (
              <Button
                onClick={(e) => {
                  localStorage.removeItem("token");
                  navigate("/login");
                }}
                variant="outline-info"
                style={{
                  marginLeft: "290px",
                  borderRadius: "20px",
                  fontFamily: "Arapey, serif",
                  marginBottom: "4px",
                  width: "40%",
                  color: "black",
                }}
              >
                <i
                  style={{
                    marginRight: "3px",
                  }}
                  class="fa-solid fa-power-off"
                ></i>
                Logout {getLoggedInUser().role}
              </Button>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;
