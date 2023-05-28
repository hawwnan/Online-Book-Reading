import React from "react";
import Navb from "./Navb";
import Footer from "./Footer";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import Download from "./Download";
import { Row, Container, Col } from "react-bootstrap";

function Downloads() {
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
      <Row data-aos="fade-right">
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
                return (
                  <Download key={book._id} book={book} onDelete={getBooks} />
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

export default Downloads;
