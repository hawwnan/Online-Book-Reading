import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserFile({ user, onDelete }) {
  const navigate = useNavigate();

  function handleDelete() {
    axios
      .delete("http://localhost:3300/users/" + user._id)
      .then((res) => {
        console.log(res.data);
        onDelete();
      })
      .catch((err) => {
        console.log(err);
      });
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
            height: "100%",
            width: "100%",
          }}
          variant="top"
          src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
        />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text
            style={{
              height: "30px",
            }}
          >
            {user.email}
          </Card.Text>
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

export default UserFile;
