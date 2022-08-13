import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import API from "../actions/person";
import Person from "./Person";

const PersonContainer = (props) => {
  useEffect(() => {
    props.getAllPerson();
  }, []);

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

const mapDispatchToProps = {
  getAllPerson: API.getAllPerson,
  addPerson: API.addPerson,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonContainer);
