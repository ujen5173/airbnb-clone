import { useState } from "react";
import Times from "../../../public/_svgs/Times";
import Amenities from "./Amenities";
import HostLanguage from "./HostLanguage";
import PriceRange from "./PriceRange";
import PropertyType from "./PropertyType";
import RoomsAndBed from "./RoomsAndBed";

const FilterModal = ({ setFilterModal }) => {
  const [filters, setFilters] = useState({
    price: {
      min: 10,
      max: 1000,
    },
    rooms: {
      bedrooms: "Any",
      beds: "Any",
      bathrooms: "Any",
    },
    type: "Any",
    amenities: [],
    host_language: [],
  });

  const applyFilters = async () => {
    // do something
  };

  return (
    <section className="fixed top-0 left-0 z-50 w-screen h-screen flex items-center justify-center">
      <div className="overlay" onClick={() => setFilterModal(false)}></div>
      <div className="rounded-2xl bg-white custom-shadow relative z-50 max-w-[35%] min-w-[35rem] overflow-hidden animation_primary">
        <header className="border-b border-borderColor text-center relative px-4 py-6">
          <button
            onClick={() => setFilterModal(false)}
            className="absolute left-7 top-1/2 -translate-y-1/2"
          >
            <Times />
          </button>
          <span className="font-semibold text-xl">Filters</span>
        </header>
        <div className="overflow-auto hidden-scroll-bar w-full max-h-[calc(80vh)] h-full">
          <div className="flex flex-wrap gap-6 w-full h-full">
            <PriceRange filters={filters} setFilters={setFilters} />
            <RoomsAndBed filters={filters} setFilters={setFilters} />
            <PropertyType filters={filters} setFilters={setFilters} />
            <Amenities filters={filters} setFilters={setFilters} />
            <HostLanguage filters={filters} setFilters={setFilters} />
          </div>
        </div>
        <footer className="border border-borderColor flex items-center justify-between p-4">
          <button className="btn-link">Clear All</button>
          <button applyFilters={applyFilters} className="btn-secondary">
            Show All Results
          </button>
        </footer>
      </div>
    </section>
  );
};

export default FilterModal;
