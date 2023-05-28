import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book({ book, onDelete }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete("http://localhost:3300/books/" + book._id)
      .then((res) => {
        console.log(res.data);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function updateBook() {
    navigate("/edit/" + book._id);
  }

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
          <Button
            onClick={updateBook}
            style={{
              width: "100%",
              marginBottom: "5px",
            }}
            variant="primary"
          >
            Edit
          </Button>
          <Button
            onClick={handleDelete}
            style={{
              width: "100%",
            }}
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default Book;
