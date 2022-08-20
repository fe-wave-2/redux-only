import React from "react";
import { Worker } from "@react-pdf-viewer/core";

// import CardTable from "./components/CardTable";
import Uploader from "./components/Uploader";
import Player from "./components/Player";
import ModalImage from "./components/ModalImage";
import Pdf from "./components/Pdf";
import "./App.css";

function App() {
  return (
    // <div className="App">
    //   {/* <Uploader />
    //   <Player />
    //   <ModalImage /> */}
    // </div>
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
      <Pdf />
    </Worker>
  );
}

export default App;
