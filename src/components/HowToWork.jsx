import { Col, Container, Row } from "react-bootstrap";
import CommonTitle from "./CommonTitle";
import Cards from "./Cards";
export default function HowToWork() {
  const cards = [
    {
      "title":"Join the Party",
      "dec" :"Rocket into our official Tonk Coin Telegram channel."
    },
    {
      "title":"Interact, Meme, Repeat",
      "dec" :"Interact with messages sent in the channel. The more you do, the more you earn!"
    },
    {
      "title":"Collect Your Coin",
      "dec" :"Impressions turn into expressions of payment. Watch your digital wallet grow as you keep the vibes high."
    },
  ]
  return (
    <div className="howTo-work common-padding">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={12} lg={10} className="text-text-center">
            <CommonTitle title="How You Tonk With Us"
             des="Tonk Coin and Telegram are like peanut butter and jelly—a match made in meme heaven. Here’s how you can turn your chats into cheddar" />
          </Col>
        </Row>
        <Row>
        {
          cards.map((item,idx)=>(<Cards item={item} idx={idx} key={idx} />))
        }
        </Row>
      </Container>
    </div>
  );
}
