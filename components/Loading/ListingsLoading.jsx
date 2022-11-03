const ListingsLoading = ({ divider = 5, css = "w-[calc(100%/2-25px)]" }) => {
  return (
    <div
      className={`${
        divider === 5
          ? "w-full sm:w-[calc(100%/2-15px)] lg:w-[calc(100%/3-25px)] xl:w-[calc(100%/4-1.2rem)] 2xl:w-[calc(100%/5-1.2rem)]"
          : css
      }`}
    >
      <div className="rounded xl bg-borderColor w-full min-h-[250px] h-[calc(50vh/5+10px)] mb-4"></div>
      <div className="mb-1 flex items-center justify-between">
        <div className="h-6 rounded w-7/12 bg-borderColor"></div>
        <div className="h-6 rounded w-16 bg-borderColor"></div>
      </div>
      <div className="mb-1 h-6 rounded w-5/12 bg-borderColor"></div>
      <div className="mb-1 h-6 rounded w-4/12 bg-borderColor"></div>
      <div className="mb-1 h-6 rounded w-2/12 bg-borderColor"></div>
    </div>
  );
};

export default ListingsLoading;
