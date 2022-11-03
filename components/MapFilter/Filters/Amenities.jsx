import React from "react";

const Amenities = ({ filters, setFilters }) => {
  const data = [
    "Wifi",
    "Kitchen",
    "Air conditioning",
    "Washer",
    "Iron",
    "Free parking",
    "Dryer",
    "Heating",
    "Dedicated workspace",
    "TV",
    "Hair dryer",
    "Pool",
    "Hot tub",
    "EV charger",
    "Crib",
    "Gym",
    "BBQ grill",
    "Breakfast",
    "Indoor fireplace",
    "Smoking allowed",
    "Waterfront",
    "Smoke alarm",
    "Carbon monoxide alarm",
  ];

  const changeCheckbox = (event, value) => {
    if (event.target.checked) {
      const d = [...filters.amenities, value];
      setFilters({ ...filters, amenities: [...new Set(d)] });
    } else {
      const d = [...filters.amenities].filter((e) => e !== value);
      setFilters({ ...filters, amenities: [...new Set(d)] });
    }
  };

  return (
    <div className="pb-6 border-b border-borderColor w-full px-6">
      <h1 className="text-xl font-semibold mb-4">Amenities</h1>
      <div className="flex flex-wrap gap-4 w-full">
        {data.map((e) => (
          <div className="w-[calc(100%/2-8px)] flex items-center gap-4">
            <input
              type="checkbox"
              onChange={(event) => changeCheckbox(event, e)}
              className="text-2xl w-4 h-4"
              name={e}
              id={e}
            />
            <label htmlFor={e} className="text-xl select-none">
              {e}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
