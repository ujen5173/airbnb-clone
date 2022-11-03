import React from "react";

const RoomsAndBed = ({ filters, setFilters }) => {
  return (
    <div className="pb-6 border-b border-borderColor w-full px-6">
      <h1 className="text-xl font-semibold mb-4">Rooms and Bed.</h1>
      <div className="w-full">
        <NumberChoose
          filters={filters}
          setFilters={setFilters}
          title={"Bedrooms"}
        />
        <NumberChoose
          filters={filters}
          setFilters={setFilters}
          title={"Beds"}
        />
        <NumberChoose
          filters={filters}
          setFilters={setFilters}
          title={"Bathrooms"}
        />
      </div>
    </div>
  );
};

export default RoomsAndBed;

const NumberChoose = ({ filters, setFilters, title }) => {
  const values = ["Any", "1", "2", "3", "4", "5", "6", "7", "8+"];

  return (
    <div className="w-full my-4">
      <h1 className="text-xl font-medium mb-4">{title}</h1>
      <div className="flex gap-4 items-center w-full flex-wrap">
        {values.map((value) => {
          return (
            <button
              onClick={() =>
                setFilters({
                  ...filters,
                  rooms: { ...filters.rooms, [title.toLowerCase()]: value },
                })
              }
              className={`${
                filters.rooms[title.toLowerCase()] === value
                  ? "btn-tertiary"
                  : "btn-tertiary-normal"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};
