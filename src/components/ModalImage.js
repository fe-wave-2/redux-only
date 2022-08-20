import React from "react";
import ModalFoto from "react-modal-image";

const ModalImage = () => {
  return (
    <div>
      <ModalFoto
        small={
          "https://aautio.github.io/react-modal-image/example_img_small.jpg"
        }
        large={
          "https://aautio.github.io/react-modal-image/example_img_small.jpg"
        }
        alt="Hello World"
      />
    </div>
  );
};

export default ModalImage;
