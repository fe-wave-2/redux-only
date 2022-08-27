import React, { useState, useEffect } from "react";

const WebStroage = () => {
  const dataGet = localStorage.getItem("data-user");
  const data = ["cara menjadi", "apa saja", "daftar"];

  return (
    <div>
      {dataGet ? (
        <button
          onClick={() => {
            localStorage.removeItem("data-user");
            window.location.reload();
          }}
        >
          Remove
        </button>
      ) : (
        <button
          onClick={() => {
            localStorage.setItem("data-user", JSON.stringify(data));
            window.location.reload();
          }}
        >
          Local Storage
        </button>
      )}
    </div>
  );
};

export default WebStroage;
