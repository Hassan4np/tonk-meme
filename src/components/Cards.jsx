import Aos from "aos";
import { useEffect } from "react";
import { Col } from "react-bootstrap";

const Cards = ({ item, idx }) => {
  useEffect(() => {
    Aos.init({
      duration:1600
    })
  },[])
  return (
    <Col xs={12} md={6} lg={4} className="d-flex justify-content-center align-items-center mb-4 mb-lg-0">
      <div className="howTo-work-cards text-center">
        <div className="title mx-auto d-flex justify-content-center align-items-center mb-4" data-aos="fade-up" data-aos-duration="">
          {idx + 1}
        </div>
        <h4 className="mb-3" data-aos="fade-up" data-aos-duration="1800">{item.title}</h4>
        <p data-aos="fade-up" data-aos-duration="2000">{item.dec}</p>
      </div>
    </Col>
  );
};

export default Cards;
