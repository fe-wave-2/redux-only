import React from "react";
import { Col, Card } from "react-bootstrap";

const CardComponent = (props) => {
  const { name, description, setState } = props;
  return (
    <Col xs="12" sm="4">
      <Card>
        <h1>{name}</h1>
        <h2>{description}</h2>
        <button onClick={() => setState("Coba kamu sudah ditekan!!")}>
          Coba!!
        </button>{" "}
        <button onClick={() => setState("Coba kamu kirim!!!")}>Coba!!</button>
      </Card>
    </Col>
  );
};

export default CardComponent;
