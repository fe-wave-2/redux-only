import React, { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

export default function Link({ page, children }) {
  const [status, seStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    seStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    seStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
