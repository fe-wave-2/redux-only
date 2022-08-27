import React from "react";
import { Worker } from "@react-pdf-viewer/core";

// import CardTable from "./components/CardTable";
import Uploader from "./components/Uploader";
import Player from "./components/Player";
import ModalImage from "./components/ModalImage";
import Pdf from "./components/Pdf";
import Hoc from "./components/Hoc";
import BarChart from "./components/BarChart";
import WebStorage from "./components/WebStorage";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Uploader />
      <Player />
      <ModalImage /> */}
      {/* <Hoc /> */}
      {/* <BarChart /> */}
      <WebStorage />
    </div>
    /* <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
       <Pdf />
		</Worker> */
  );
}

export default App;
