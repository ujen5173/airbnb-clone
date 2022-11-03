const Heart = ({ css = "h-[23px] w-[23px] stroke-current" }) => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      arialhidden="true"
      role="presentation"
      focusable="false"
      className={`block fill-none stroke-2 overflow-visible ${css}`}
    >
      <path
        className="h-[23px] w-[23px]"
        d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
      ></path>
    </svg>
  );
};

export default Heart;
