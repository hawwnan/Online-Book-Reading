import React from "react";
import Navb from "./Navb";
import Footer from "./Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import OnlineRead from "./OnlineRead";
import { Row, Col } from "react-bootstrap";

function OnlineReads() {
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 3000 });
  });

  const getBooks = () => {
    axios
      .get("http://localhost:3300/books")
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getBooks, []);

  return (
    <>
      <Navb />
      <Row data-aos="fade-in">
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
              book.map((book) => {
                return <OnlineRead key={book._id} book={book} />;
              })
            )}
          </ul>
        </Col>
      </Row>
      <div
        style={{
          textAlign: "center",
          marginTop: "80px",
        }}
      >
        <Button
          onClick={() => {
            navigate("/download");
          }}
          style={{
            width: "30%",
            borderRadius: "15px",
          }}
          variant="danger"
        >
          Go To Downloads
        </Button>
      </div>
      <Footer />
    </>
  );
}

export default OnlineReads;
