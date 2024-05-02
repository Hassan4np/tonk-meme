import { Col, Container, Row } from "react-bootstrap";
import CommonTitle from "./CommonTitle";
import Cards from "./Cards";

export default function HowToBuy() {
  const cards = [
    {
      "title":"Start @wallet bot on telegram"
    },
    {
      "title":"Purchase TON",
    },
    {
      "title":"Swap TON to buy TONK",
    },
  ]
  return (
    <div className='howTo-buy common-padding'>
      <Container>
        <Row className="justify-content-center  " >
          <Col xs={12} md={12} className="text-text-center ">
            <CommonTitle title="How to buy Tonk Coin?" des="To buy Tonk Coin, you would generally follow these steps" />
          </Col>
        </Row>
        <Row>
          {cards.map((item,idx)=>(<Cards key={idx} item={item} idx={idx}/>))}
        </Row>
      </Container>
    </div>
  )
}
