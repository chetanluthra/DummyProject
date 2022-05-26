import React from "react";
import { Card, Button} from "react-bootstrap";
import  "./objectCards.css"
function ObjectCards({ cards,deleteCard }) {
  return (
    <div className="col-lg-3">
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" className="img" src={cards.image} />
        <Card.Body>
          <Card.Title className="title">{cards.title}</Card.Title>
          <Card.Text className="discription">{cards.description}</Card.Text>
          <Button variant="dark" onClick={()=>deleteCard(cards.id)}>Delete</Button>

        </Card.Body>
      </Card>
    </div>
  );
}

export default ObjectCards;
