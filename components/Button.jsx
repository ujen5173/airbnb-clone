import { classNameInit, classNames } from "../utils/datePickerUtils";
import { format, isBefore, isEqual, isPast, isToday } from "date-fns";
import { memo, useMemo } from "react";

const Button = ({
  selectedDay,
  setSelectedDay,
  selectEnd,
  setSelectEnd,
  day,
  dayIdx,
  hoveredDate,
  setHoveredDate,
  // setButtonClicked,
}) => {
  console.log("Re-rendered");
  return (
    <div
      key={day.toString()}
      className={classNameInit({
        hoveredDate,
        selectEnd,
        selectedDay,
        day,
        dayIdx,
      })}
    >
      <button
        type="button"
        onMouseMove={() => setHoveredDate(day)}
        disabled={isPast(day) && !isToday(day) ? true : false}
        onClick={async () => {
          // setButtonClicked((Math.random() * 999).toFixed(2));
          selectedDay === null && setSelectedDay(day);

          if (isBefore(day, selectedDay)) {
            await setSelectedDay(day);
            await setSelectEnd(null);
          } else {
            if (selectedDay && !isEqual(day, selectedDay)) {
              await setSelectEnd(day);
            }
          }
        }}
        className={classNames(
          selectEnd !== null &&
            isEqual(day, selectEnd) &&
            "text-white bg-black",

          isPast(day) && !isToday(day) && "text-gray-300",

          isEqual(day, selectedDay) && "bg-black text-white",

          !isEqual(day, selectedDay) && isToday(day) && "text-black",

          "flex w-[2.8rem] h-[2.8rem] mx-auto items-center hover:border hover:border-black justify-center rounded-full transition-none"
        )}
        style={{ transition: "none!important" }}
      >
        <time dateTime={format(day, "yyyy-MM-dd")}>{format(day, "d")}</time>
      </button>
    </div>
  );
};

export default memo(Button);
