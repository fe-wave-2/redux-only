import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import Person from "./Person";

const PersonContainer = (props) => {
  const createCard = (personProps) => (
    <Col xs={4}>
      <Person {...personProps} />
    </Col>
  );

  const createRow = (rows) => (
    <Row key={`${Math.random()}-${Date.now()}`}>
      {rows.map((i) => createCard(Object.assign(i, { key: i.id })))}
    </Row>
  );

  const { data } = props;
  const contents = [];

  for (let i = 0; i < data.length; i += 3) {
    contents.push(data.slice(i, i + 3));
  }

  return <Container>{contents.map((i) => createRow(i))}</Container>;
};

const mapStateToProps = (state) => ({
  data: state.persons,
});

export default connect(mapStateToProps)(PersonContainer);
