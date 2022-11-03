import House from "../../../public/images/house.jpg";
import Apartment from "../../../public/images/apartment.jpg";
import Guest from "../../../public/images/guset.jpg";
import Hotel from "../../../public/images/hotel.jpg";

const PropertyType = ({ filters, setFilters }) => {
  return (
    <div className="pb-6 border-b border-borderColor w-full px-6">
      <h1 className="text-xl font-semibold mb-4">Property Type</h1>
      <div className="flex gap-4 items-center flex-wrap">
        <button
          onClick={() => setFilters({ ...filters, type: "house" })}
          className={`font-medium text-lg text-left p-4 rounded-3xl w-[calc(100%/4-8px)] ${
            filters.type === "house"
              ? "border-[2.5px] border-blackColor"
              : "border border-darkBorderColor"
          }`}
        >
          <img src={House.src} className="w-8 h-8 mb-8" alt="" />
          House
        </button>
        <button
          onClick={() => setFilters({ ...filters, type: "apartment" })}
          className={`font-medium text-lg text-left p-4 rounded-3xl w-[calc(100%/4-8px)] ${
            filters.type === "apartment"
              ? "border-[2.5px] border-blackColor"
              : "border border-darkBorderColor"
          }`}
        >
          <img src={Apartment.src} className="w-8 h-8 mb-8" alt="" />
          Apartment
        </button>
        <button
          onClick={() => setFilters({ ...filters, type: "guest" })}
          className={`font-medium text-lg text-left p-4 rounded-3xl w-[calc(100%/4-8px)] ${
            filters.type === "guest"
              ? "border-[2.5px] border-blackColor"
              : "border border-darkBorderColor"
          }`}
        >
          <img src={Guest.src} className="w-8 h-8 mb-8" alt="" />
          Guest house
        </button>
        <button
          onClick={() => setFilters({ ...filters, type: "hotel" })}
          className={`font-medium text-lg text-left p-4 rounded-3xl w-[calc(100%/4-8px)] ${
            filters.type === "hotel"
              ? "border-[2.5px] border-blackColor"
              : "border border-darkBorderColor"
          }`}
        >
          <img src={Hotel.src} className="w-8 h-8 mb-8" alt="" />
          Hotel
        </button>
      </div>
    </div>
  );
};

export default PropertyType;
