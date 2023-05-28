import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/esm/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import { checkUser, getLoggedInUser, checkAdmin } from "./Check";
import Slide from "./Slide";
import Cards from "./Cards";
import Footer from "./Footer";
import Aos from "aos";
import "aos/dist/aos.css";
import "./fonts.css";
import { useEffect } from "react";
import Navb from "./Navb";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  });
  return (
    <>
      <Navb />
      <Container
        fluid
        style={{
          backgroundColor: "#89CFF0",
          marginBottom: "50px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            verticalAlign: "top",
            backgroundColor: "#89CFF0",
          }}
        >
          <img
            src="https://img.freepik.com/free-vector/book-store-location_53876-16944.jpg?w=2000"
            alt="#"
            className="img-fluid shadow-4"
            style={{
              height: "400px",
              width: "600px",
              marginBottom: "40px",
            }}
          />
        </div>
        <div
          style={{
            display: "inline-block",
          }}
        >
          <h2
            className="motoPara"
            style={{
              marginTop: "150px",
              marginLeft: "150px",
              backgroundColor: "#89CFF0",
            }}
          >
            We Share Knowledge |
          </h2>
          <p
            className="headerMoto"
            style={{
              marginLeft: "150px",
              backgroundColor: "#89CFF0",
            }}
          >
            Learning Never Ends
          </p>
          {!checkUser() ? (
            <a href="/login">
              <Button
                style={{
                  width: "30%",
                  marginLeft: "150px",
                  borderRadius: "20px",
                  backgroundColor: "#00509D",
                  fontFamily: "Arapey, serif",
                  color: "white",
                }}
              >
                Online Reads
                <i
                  style={{
                    marginLeft: "5px",
                  }}
                  class="fa-solid fa-earth-americas"
                ></i>
              </Button>
            </a>
          ) : (
            <a href="/reads">
              <Button
                style={{
                  width: "30%",
                  marginLeft: "150px",
                  marginBottom: "20px",
                  borderRadius: "20px",
                  fontFamily: "Arapey, serif",
                  backgroundColor: "#00509D",
                  color: "white",
                }}
              >
                Online Reads
                <i
                  style={{
                    marginLeft: "5px",
                  }}
                  class="fa-solid fa-earth-americas"
                ></i>
              </Button>
            </a>
          )}
        </div>
      </Container>
      <Container data-aos="fade-in">
        <h3
          className="startPara"
          style={{
            textAlign: "left",
            marginBottom: "25px",
          }}
        >
          The Book Cafe
        </h3>
        <p
          className="start"
          style={{
            marginBottom: "70px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <hr
          style={{
            borderBlockColor: "#81d4fa",
            color: "#81d4fa",
            opacity: "1",
            width: "300px",
            margin: "auto",
            marginBottom: "50px",
            height: "2px",
          }}
        />
      </Container>
      <Container>
        <h4
          className="readerSection"
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Our Readers
        </h4>
        <h2
          className="writerName"
          style={{
            textAlign: "center",
          }}
        >
          Peace Of Mind
        </h2>
        <img
          className="center img-fluid shadow-4"
          src="https://www.nicepng.com/png/detail/391-3911046_quote-marks-quotation-mark.png"
          alt="#"
          style={{
            height: "15px",
            width: "30px",
            backgroundColor: "white",
          }}
        />
        <p
          className="readerPara"
          style={{
            marginBottom: "60px",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img
          className="center2 img-fluid shadow-4"
          src="https://www.nicepng.com/png/detail/391-3911046_quote-marks-quotation-mark.png"
          alt="#"
          style={{
            height: "15px",
            width: "30px",
            backgroundColor: "white",
          }}
        />
        <hr className="hr" />
        <h2
          className="writerName"
          style={{
            textAlign: "center",
          }}
        >
          The Best Out There
        </h2>
        <img
          className="center img-fluid shadow-4"
          src="https://www.nicepng.com/png/detail/391-3911046_quote-marks-quotation-mark.png"
          alt="#"
          style={{
            height: "15px",
            width: "30px",
            backgroundColor: "white",
          }}
        />
        <p className="readerPara">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <img
          className="center2 img-fluid shadow-4"
          src="https://www.nicepng.com/png/detail/391-3911046_quote-marks-quotation-mark.png"
          alt="#"
          style={{
            height: "15px",
            width: "30px",
            backgroundColor: "white",
          }}
        />
        <hr className="hr" />
      </Container>
      <Container>
        <Slide />
      </Container>
      <Container>
        <h4
          className="readerSection"
          style={{
            textAlign: "center",
            marginBlock: "20px",
          }}
        >
          Affiliated Writers
        </h4>
        <h2
          className="writerName"
          data-aos="fade-left"
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Stephen King
        </h2>
        <div>
          <img
            className="img-fluid shadow-4"
            data-aos="fade-left"
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="https://w0.peakpx.com/wallpaper/471/25/HD-wallpaper-stephen-king-horror-scifi-writer.jpg"
            alt="#"
          />
        </div>
        <Container>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <p
              className="readerPara"
              data-aos="fade-left"
              style={{
                marginTop: "20px",
                marginBottom: "50px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <hr className="hr" />
        </Container>
        <h2
          className="writerName"
          data-aos="fade-right"
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          J K Rowling
        </h2>
        <div>
          <img
            className="img-fluid shadow-4"
            data-aos="fade-right"
            style={{
              height: "150px",
              width: "150px",
              borderRadius: "50%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="https://www.teahub.io/photos/full/115-1153514_be-inspired-with-these-rags-to-riches-stories.jpg"
            alt="#"
          />
        </div>
        <Container>
          <div
            style={{
              display: "inline-block",
            }}
          >
            <p
              className="readerPara"
              data-aos="fade-right"
              style={{
                marginTop: "20px",
                marginBottom: "50px",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
          <hr className="hr" />
        </Container>
      </Container>
      <Container
        style={{
          backgroundColor: "#81d4fa",
        }}
      ></Container>
      <Container
        style={{
          marginBottom: "50px",
        }}
      >
        <Cards />
      </Container>
      <img
        className="img-fluid shadow-4"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/83945f28621035.55c9d2d300ed3.jpg"
        alt="#"
        style={{
          display: "block",
          width: "100%",
          height: "15%",
          opacity: "0.8",
        }}
      />
      <Footer />
    </>
  );
}

export default Header;
