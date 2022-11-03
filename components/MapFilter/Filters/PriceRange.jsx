const PriceRange = ({ filters, setFilters }) => {
  return (
    <div className="py-8 border-b border-borderColor w-full px-6">
      <h1 className="text-xl font-semibold mb-4">Select a price range.</h1>
      <div className="flex gap-3 items-center">
        <div className="w-1/2 relative">
          <span className="absolute top-2 left-3 select-none text-md">
            min price
          </span>
          <span className="absolute bottom-[9px] left-3 select-none text-md">
            $
          </span>
          <input
            type="text"
            className="w-full pt-8 px-6 pb-2 border border-darkBorderColor rounded-md"
            value={filters.price.min}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: { ...filters.price, min: +e.target.value },
              })
            }
          />
        </div>
        -
        <div className="w-1/2 relative">
          <span className="absolute top-2 left-3 select-none text-md">
            max price
          </span>
          <span className="absolute bottom-[9px] left-3 select-none text-md">
            $
          </span>
          <input
            type="text"
            className="w-full pt-8 px-6 pb-2 border border-darkBorderColor rounded-md"
            value={filters.price.max}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: { ...filters.price, max: +e.target.value },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
