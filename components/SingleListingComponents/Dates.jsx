import { differenceInDays, format } from "date-fns";
import DatePicker from "../Pickers/DatePicker";
import CheckinCheckOut from "./CheckinCheckout";

const Dates = ({
  selection,
  setSelection,
  selectedDay,
  setSelectedDay,
  selectEnd,
  setSelectEnd,
}) => {
  return (
    <>
      <CheckinCheckOut
        setSelection={setSelection}
        rounded={false}
        selectedDay={selectedDay}
        selectEnd={selectEnd}
      />

      {selection === "date" && (
        <div className="absolute z-20 -top-8 -right-8 w-[48rem] bg-white p-6 rounded-xl shadow-custom border border-borderColor pt-32">
          <div className="absolute top-8 right-8 rounded-lg border border-b-0 border-darkBorderColor flex w-[22.1rem]">
            <CheckinCheckOut
              setSelection={setSelection}
              rounded={true}
              selectedDay={selectedDay}
              selectEnd={selectEnd}
            />
          </div>

          <div className="absolute top-8 left-8">
            <h1 className="text-xl font-semibold">
              {(selectedDay &&
                selectEnd &&
                differenceInDays(selectEnd, selectedDay) + " nights") ||
                "Select dates"}
            </h1>
            <p className="text-sm mt-1 text-lightTextColor font-normal">
              {(selectedDay &&
                selectEnd &&
                format(selectedDay, "MMM-dd,yyyy") +
                  " - " +
                  format(selectEnd, "MMM-dd,yyyy")) ||
                "Add your travel dates for exact pricing"}
            </p>
          </div>
          <DatePicker
            selectedDay={selectedDay}
            setSelectedDay={setSelectedDay}
            selectEnd={selectEnd}
            setSelectEnd={setSelectEnd}
            css={"bg-white"}
            footer={true}
            datePickerFunction={() => setSelection(null)}
          />
        </div>
      )}
    </>
  );
};

export default Dates;
