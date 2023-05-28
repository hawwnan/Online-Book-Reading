import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Cards() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  });

  return (
    <div
      data-aos="fade-left"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Card style={{ width: "12rem", borderStyle: "none" }}>
        <a href="https://www.waterstones.com/help/frequently-asked-questions/2554">
          <Card.Img
            variant="top"
            style={{
              height: "70%",
            }}
            src="https://cdn.waterstones.com/images/00180130-545x601.png"
          />
        </a>
      </Card>
      <Card style={{ width: "12rem", borderStyle: "none" }}>
        <a href="https://www.waterstones.com/help/gift-cards-and-vouchers/32#faqs">
          <Card.Img
            style={{
              height: "70%",
            }}
            variant="top"
            src="https://cdn.waterstones.com/images/00181346-548x601.png"
          />
        </a>
      </Card>
      <Card style={{ width: "12rem", borderStyle: "none" }}>
        <a href="https://www.waterstones.com/help/gift-cards-and-vouchers/32#other-gift-cards">
          <Card.Img
            variant="top"
            style={{
              height: "70%",
            }}
            src="https://cdn.waterstones.com/images/00181345-548x601.png"
          />
        </a>
      </Card>
    </div>
  );
}

export default Cards;
