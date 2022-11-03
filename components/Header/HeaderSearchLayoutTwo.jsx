import { DatePicker, GuestsPicker } from "../";
import { format } from "date-fns";
import React, { useEffect, useRef } from "react";
import { textResizer } from "../../utils/handlers";
import { useRouter } from "next/router";
import BtnPrimary from "../Button/BtnPrimary";

const HeaderSearchLayoutTwo = ({
  setSelection,
  selection,
  selectedDay,
  selectEnd,
  guests,
  headerSearch,
  setGuests,
  setSelectedDay,
  setSelectEnd,
  setOverlay,
  setHeaderSearch,
  result,
  destination,
  setDestination,
}) => {
  // using ref to active focus in input because adding autofocus in input is not working...
  const inputElement = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (inputElement.current && selection === "destination") {
      setTimeout(() => {
        inputElement.current.focus();
      }, 500);
    }
  }, [headerSearch]);

  useEffect(() => {
    if (selection === "destination") inputElement.current.focus();
  }, [selection]);

  const submit = async () => {
    router.push(
      `/s/${destination || "_"}?numberOfAdults=${
        guests.adults.value
      }&numberOfChildren=${guests.children.value}&numberOfInfants=${
        guests.infants.value
      }&numberOfPets=${guests.pets.value}&checkin=${
        selectedDay ? format(selectedDay, "yyyy-MM-dd") : null
      }&checkout=${selectedDay ? format(selectEnd, "yyyy-MM-dd") : null}`
    );
    setHeaderSearch(false);
    setSelection(null);
    setOverlay(false);
  };

  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={`${
        headerSearch
          ? "header_search_layout_two_active"
          : "header_search_layout_two_inactive"
      } header_section_layout_two absolute mb-2 mx-auto flex max-w-[80%] gap-2 rounded-full bg-searchBackground border border-borderColor z-30`}
    >
      <div
        onClick={() => {
          setSelection("destination");
        }}
        className={`rounded-full px-7 flex-4 py-2 w-max cursor-pointer select-none ${
          selection === "destination"
            ? "bg-white shadow-xl"
            : "bg-transparent hover:bg-borderColor"
        }`}
      >
        <label htmlFor="destination" className="text-sm mb-1 font-medium pl-2">
          Where
        </label>
        <input
          type="text"
          ref={inputElement}
          name="destination"
          id="destination"
          autoComplete="off"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          placeholder="Search Destinations"
          className="outline-none w-max block px-2 text-md rounded-full bg-transparent"
        />
      </div>

      <div className="border-r border-borderColor my-auto h-[32px] w-[0.15px]"></div>

      <div
        onClick={() => {
          setSelection((prev) => (prev === "check-in" ? null : "check-in"));
        }}
        className={`rounded-full relative px-7 min-w-[144px] py-2 cursor-pointer select-none flex flex-col justify-start ${
          selection === "check-in"
            ? "bg-white shadow-xl"
            : "bg-transparent hover:bg-borderColor"
        }`}
      >
        <p className="font-medium text-sm mb-1 whitespace-nowrap">Check in</p>
        <p className="text-gray-500 text-md w-max">
          {(selectedDay && format(selectedDay, "MMM dd")) || "Add Dates"}
        </p>
      </div>

      <div className="border-r border-borderColor my-auto h-[32px] w-[0.15px]"></div>

      <div
        onClick={() => {
          setSelection((prev) => (prev === "check-out" ? null : "check-out"));
        }}
        className={`rounded-full relative px-7 min-w-[150px] w-max py-2 cursor-pointer select-none flex flex-col justify-start ${
          selection === "check-out"
            ? "bg-white shadow-xl"
            : " bg-transparent hover:bg-borderColor"
        }`}
      >
        <p className="font-medium text-sm mb-1 whitespace-nowrap">Check out</p>
        <p className="text-gray-500 text-md w-max">
          {(selectEnd && format(selectEnd, "MMM dd")) || "Add Dates"}
        </p>
      </div>

      <div className="border-r border-borderColor my-auto h-[32px] w-[0.15px]"></div>

      <div
        className={`flex items-center justify-between gap-6 rounded-full pr-3 pl-6 flex-2 py-2 cursor-pointer select-none ${
          selection === "guests"
            ? "bg-white shadow-xl"
            : "bg-transparent hover:bg-borderColor"
        }`}
      >
        <div
          className="w-[84px] flex flex-col justify-start"
          onClick={() => {
            setSelection((prev) => (prev === "guests" ? null : "guests"));
          }}
        >
          <p className="text-sm mb-1 font-medium">Who</p>
          <p className="text-gray-500 text-md w-max">
            {textResizer(result, 12) || "Any Guest"}
          </p>
        </div>
        <BtnPrimary onClick={submit} rounded={true} dark={false}>
          Search
        </BtnPrimary>
      </div>

      {selection === "guests" && (
        <div className="max-w-[350px] w-full absolute top-full mt-2 right-0 z-10">
          <GuestsPicker guests={guests} setGuests={setGuests} />
        </div>
      )}

      {/* {datePicker && ( */}
      {(selection === "check-in" || selection === "check-out") && (
        <div className="absolute top-full mt-2 max-w-[900px] w-full -translate-x-1/2 left-1/2">
          <DatePicker
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectEnd={selectEnd}
            setSelectEnd={setSelectEnd}
          />
        </div>
      )}
    </div>
  );
};

export default HeaderSearchLayoutTwo;
