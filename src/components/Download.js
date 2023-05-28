import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import DownOption from "./DownOption";
import { useNavigate } from "react-router-dom";

function Download({ book, onDelete }) {
  const navigate = useNavigate();

  function handleDownload() {
    <DownOption key={book._id} book={book} />;
    navigate("/download");
  }

  const id = Math.floor(Math.random() * 10);
  return (
    <>
      <Card
        style={{
          width: "12rem",
          borderStyle: "none",
        }}
      >
        <Card.Img
          style={{
            height: "300px",
          }}
          variant="top"
          src={book.image}
        />
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text
            style={{
              height: "150px",
            }}
          >
            {book.description}
          </Card.Text>
          <a href="/down">
            <Button
              onClick={handleDownload}
              style={{
                width: "100%",
              }}
              variant="danger"
            >
              Download
            </Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
}

export default Download;
