import React from "react";
import Navb from "./Navb";
import Footer from "./Footer";
import { Row, Col, Container, Button } from "react-bootstrap";

function DownOption({ book }) {
  return (
    <>
      <Navb />
      <Container>
        <Row>
          <Col lg={4} md={8} sm={12}>
            <h2> Download Link Here</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <a
              href="https://books-library.net/files/books-library.online-12230111Ib9C3.pdf"
              download
            >
              <Button
                className="btn-danger"
                style={{
                  borderRadius: "25px",
                  width: "40%",
                }}
              >
                <i
                  style={{
                    marginRight: "3px",
                  }}
                  class="fa-solid fa-download"
                ></i>
                Download
              </Button>
            </a>
          </Col>
          <Col lg={8} md={8} sm={12}>
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?w=2000"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default DownOption;
