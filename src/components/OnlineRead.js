import React from "react";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Check from "./Check";

function OnlineRead({ book, onDelete }) {
  return (
    <>
      <Card style={{ width: "12rem", borderStyle: "none" }}>
        <a href="/reading">
          <Card.Img
            style={{
              height: "90%",
            }}
            variant="top"
            src={book.image}
          />
        </a>
        <Card.Body>
          <Card.Title>{book.name}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>
      <p>{book.story}</p>
    </>
  );
}

export default OnlineRead;
