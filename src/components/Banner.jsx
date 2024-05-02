import { Col, Container, Row } from "react-bootstrap";
import icon_1 from '../assets/img/social-icon-1.svg';
import icon_2 from '../assets/img/social-icon-2.svg';
import icon_3 from '../assets/img/social-icon-3.svg';
import bannerImg from '../assets/img/banner-img.png';
import { useEffect } from "react";
import Aos from "aos";

export default function Banner() {
  const social = [
    {
      icon: icon_1,
      name: '',
      url: '/',
    },
    {
      icon: icon_2,
      name: '',
      url: '/',
    },
    {
      icon: icon_3,
      name: '',
      url: '/',
    },
  ];
  useEffect(() => {
    Aos.init({
      duration:'1600'
    })
  },[])
  return (
    <div className="banner position-relative z-3">
      <Container>
        <Row className="justify-content-center justify-content-xxl-between text-center text-md-start">
          <Col xs={12} lg={7} xl={6} xxl={5} >
            <div className="banner-content text-center text-lg-start">
              <h1 data-aos="fade-up" data-aos-duration="">$Tonk</h1>
              <p data-aos="fade-up" data-aos-duration="1800">Welcome to $TONK the mythical and magical addition to the Solana meme coin ecosystem!</p>
              <div data-aos="fade-up" data-aos-duration="2000" className="banner-content-btn flex-wrap d-flex align-items-center justify-content-center justify-content-lg-start gap-4">
                <a href="#" className="btn">Buy Now</a>
                <ul>
                  {social.map((item,index) => (
                    <li key={index}>
                      <a href={item.url} target="_blank">
                        <img src={item.icon} alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={11} md={8} lg={5} xl={6} className="d-flex justify-content-center align-items-center" data-aos="fade-left">
            <div className="banner-img">
              <img src={bannerImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}
