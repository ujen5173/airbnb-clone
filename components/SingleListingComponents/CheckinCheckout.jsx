import { format } from "date-fns";
import { useEffect, useState } from "react";

const CheckinCheckOut = ({ setSelection, rounded, selectedDay, selectEnd }) => {
  const [dates, setDates] = useState({
    selectedDay: null,
    selectEnd: null,
  });

  useEffect(() => {
    if (selectedDay && selectEnd) {
      setDates({ selectedDay, selectEnd });
      setDates({
        selectedDay: format(selectedDay, "MM/dd/yyyy"),
        selectEnd: format(selectEnd, "MM/dd/yyyy"),
      });
    }
  }, [selectedDay, selectEnd]);

  return (
    <div
      className={`flex border-b border-darkBorderColor w-full ${
        rounded ? "rounded-lg" : ""
      }`}
    >
      <div
        className={`w-1/2 p-3 relative z-10 select-none cursor-pointer border-r border-darkBorderColor`}
        onClick={() =>
          setSelection((prev) => (prev === "date" ? null : "date"))
        }
      >
        <span className="block text-xs font-semibold">CHECKIN</span>
        <span className="block font-medium mt-1">
          {dates.selectedDay || "Add dates"}
        </span>
      </div>
      <div
        className={`w-1/2 p-3 relative z-10 select-none cursor-pointer`}
        onClick={() =>
          setSelection((prev) => (prev === "date" ? null : "date"))
        }
      >
        <span className="block text-xs font-semibold">CHECKOUT</span>
        <span className="block font-medium mt-1">
          {dates.selectEnd || "Add dates"}
        </span>
      </div>
    </div>
  );
};

export default CheckinCheckOut;
