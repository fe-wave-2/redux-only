import React from "react";
import "./Hoc.scss";

const Hoc = () => {
  // jsx -> memungkinkan penggunan bisa menggabungkan antara javascript dan html

  const data = (a, b) => {
    return a + b;
  };

  const name = () => {
    return <h1>Krisna Firdaus</h1>;
  };

  const angka = [1, 2, 3, 5, 10]; // map

  return (
    <div className="header-hoc">
      <h1 className="tag-hoc">{data(1, 2)}</h1>
      {name()}
      {angka.map((i, y) => {
        return <>{angka.length - 1 === y ? `${i * 2}` : `${i * 2}${", "}`}</>;
      })}
    </div>
  );
};

export default Hoc;
