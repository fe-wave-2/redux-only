import React, { useState } from "react";
import { Row } from "react-bootstrap";
import CardComponent from "./CardComponent";

// arrow function -> es (ecmascript) 2016
const CardTable = () => {
  const [result, setResult] = useState("");
  const data = [
    {
      id: 1,
      name: "Hai!!",
      desc: "Lorem Ipsum",
    },
    {
      id: 2,
      name: "Halo!!",
      desc: "Lorem Ipsum",
    },
    {
      id: 3,
      name: "Hola!!",
      desc: "Lorem Ipsum",
    },
  ];

  return (
    <Row>
      {data.map((c) => {
        return (
          <CardComponent
            name={c.name}
            description={c.desc}
            setState={setResult}
          />
        );
      })}
      <h1>{result}</h1>
      <a></a>
    </Row>
  );
};

export default CardTable;
