import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Slide() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            style={{
              height: "50%",
              width: "100%",
              display: "inline-block",
            }}
            src="https://img.indiefolio.com/fit-in/1100x0/filters:format(webp):fill(transparent)/project/body/image_614d1445519245.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            style={{
              height: "50%",
              width: "100%",
              display: "inline-block",
            }}
            src="https://cdn.sortiraparis.com/images/80/97495/733508-used-book-cafe-les-photos.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            style={{
              height: "50%",
              width: "100%",
              display: "inline-block",
            }}
            src="https://sgp1.digitaloceanspaces.com/tz-mag-ph/wp-content/uploads/2022/02/080802024545/library-cafes-in-metro-manila.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Slide;
