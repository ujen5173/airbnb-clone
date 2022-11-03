import React from "react";

const RightArrow = ({ color }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      arialhidden="true"
      role="presentation"
      focusable="false"
      className={`block fill-none h-3 w-3 stroke-${color} stroke-[5.3333]`}
    >
      <g fill="none">
        <path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path>
      </g>
    </svg>
  );
};

export default RightArrow;
