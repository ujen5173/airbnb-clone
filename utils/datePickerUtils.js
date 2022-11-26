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

export const days = ["S", "M", "T", "W", "T", "F", "S"];
