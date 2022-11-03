const LeftArrow = ({ color }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      arialabel="Back"
      role="img"
      focusable="false"
      className={`block w-[16px] h-[16px] fill-none ${
        color ? `stroke-${color}` : "stroke-black"
      } stroke-[3] overflow-visible`}
    >
      <g fill="none">
        <path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
      </g>
    </svg>
  );
};

export default LeftArrow;
