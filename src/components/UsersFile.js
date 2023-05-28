import React from "react";
import Navb from "./Navb";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import UserFile from "./UserFile";
import { Row, Container, Col } from "react-bootstrap";

function UsersFile() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    axios
      .get("http://localhost:3300/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getUsers, []);

  return (
    <>
      <Navb />
      <Row>
        <Col lg={12} md={12} sm={12}>
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "20px",
            }}
          >
            {loading ? (
              <h1>loading</h1>
            ) : (
              user.map((user) => {
                return (
                  <UserFile key={user._id} user={user} onDelete={getUsers} />
                );
              })
            )}
          </ul>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default UsersFile;
