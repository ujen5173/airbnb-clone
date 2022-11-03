import {
  format,
  getDay,
  isAfter,
  isBefore,
  isEqual,
  isPast,
  isToday,
} from "date-fns";

const colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const classNameInit = ({
  hoveredDate,
  selectEnd,
  selectedDay,
  day,
  dayIdx,
}) => {
  return classNames(
    hoveredDate !== null &&
      selectEnd === null &&
      selectedDay !== null &&
      (isEqual(selectedDay, day) || isAfter(day, selectedDay)) &&
      isAfter(hoveredDate, day) &&
      "bg-zinc-100",

    isEqual(selectedDay, day) && "date-gradient-start",
    isEqual(selectEnd, day) && "date-gradient-end",

    selectedDay && !selectEnd && isEqual(day, hoveredDate) && "bg-zinc-100",

    selectedDay &&
      (isEqual(day, selectedDay) || isAfter(day, selectedDay)) &&
      selectEnd &&
      (isEqual(day, selectEnd) || isBefore(day, selectEnd)) &&
      "bg-zinc-100",

    dayIdx === 0 && colStartClasses[getDay(day)],
    "my-[1.5px]"
  );
};

export const Button = ({
  selectedDay,
  setSelectedDay,
  selectEnd,
  setSelectEnd,
  day,
  dayIdx,
  hoveredDate,
  setHoveredDate,
}) => {
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
        onMouseEnter={() => {
          setHoveredDate(day);
        }}
        onMouseLeave={() => {
          setHoveredDate(null);
        }}
        disabled={isPast(day) && !isToday(day) ? true : false}
        onClick={() => {
          selectedDay === null && setSelectedDay(day);

          if (isBefore(day, selectedDay)) {
            setSelectedDay(day);
            setSelectEnd(null);
          } else {
            if (selectedDay && !isEqual(day, selectedDay)) {
              setSelectEnd(day);
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

export const days = ["S", "M", "T", "W", "T", "F", "S"];
