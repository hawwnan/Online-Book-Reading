import React from "react";
import "./Footerstyle.css";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <div id="footerdivision">
      <div className="container" id="footerdiv">
        <div className="row">
          <div className="col-md-3">
            <h3>Books</h3>
            <p>We have got books for your every need!</p>
          </div>
          <div className="col-md-3">
            <h3>Quick Links</h3>
            <nav className="footerdivlist">
              <ul>
                <a href="/">
                  <li>Home</li>
                </a>
                <a href="/reads">
                  <li>Books</li>
                </a>
                <a href="/contact">
                  <li>Contact us</li>
                </a>
              </ul>
            </nav>
          </div>
          <div className="col-md-3">
            <h3>Contact Us</h3>
            <p>
              Contact us for books and everything you want to know
              <br />
              Books can change everything!
            </p>
          </div>
          <div className="col-md-3" id="innderfooter">
            <h3>Follow Us</h3>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                style={{
                  color: "white",
                }}
                href="https://about.facebook.com/"
              >
                <i class="fa-brands fa-facebook-f fa-2x"></i>
              </a>
              <a
                style={{
                  color: "white",
                }}
                href="https://twitter.com/login"
              >
                <i class="fa-brands fa-twitter fa-2x"></i>
              </a>
              <a
                style={{
                  color: "white",
                }}
                href="https://www.instagram.com/"
              >
                <i class="fa-brands fa-instagram fa-2x"></i>
              </a>
              <a
                style={{
                  color: "white",
                }}
                href="https://www.linkedin.com/login"
              >
                <i class="fa-brands fa-linkedin-in fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
        }}
      >
        <a href="https://www.apple.com/app-store/">
          <Button
            className="btn-danger"
            style={{
              marginRight: "20px",
              marginBottom: "20px",
              width: "20%",
              borderRadius: "25px",
            }}
          >
            <i
              style={{
                marginRight: "3px",
              }}
              class="fa-brands fa-apple fa-1x"
            ></i>
            AppStore
          </Button>
        </a>
        <a href="https://play.google.com/store/games">
          <Button
            className="btn-danger"
            style={{
              marginBottom: "20px",
              width: "20%",
              borderRadius: "25px",
            }}
          >
            <i
              style={{
                marginRight: "3px",
              }}
              class="fa-brands fa-google-play fa-1x"
            ></i>
            PlayStore
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
