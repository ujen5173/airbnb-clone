import { format } from "date-fns";
import Search from "../../public/_svgs/Search";
import { textResizer } from "../../utils/handlers";
import { useRouter } from "next/router";
import BtnPrimary from "../Button/BtnPrimary";

const HeaderSearchLayoutOne = ({
  setSelection,
  selectedDay,
  selectEnd,
  headerSearch,
  destination,
  result,
  setHeaderSearch,
  guests,
  setOverlay,
}) => {
  const router = useRouter();

  return (
    <div
      style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      className={`${
        headerSearch
          ? "header_search_layout_one_active"
          : "header_search_layout_one_inactive"
      } absolute w-max bg-white border border-borderColor rounded-full shadow px-2 flex items-center justify-center mx-auto`}
    >
      <div
        className="h-full px-3 py-1 flex gap-1 items-center"
        onClick={() => {
          setOverlay(true);
          setSelection("destination");
          setHeaderSearch((prev) => !prev);
        }}
      >
        <span className="block text-sm text-gray-700 font-semibold cursor-pointer">
          {destination || "Anywhere"}
        </span>
      </div>
      <div className="h-[20px] w-1 block border-r border-borderColor"></div>
      <div
        className="h-full px-3 py-1"
        onClick={() => {
          setOverlay(true);
          setSelection("check-in");
          setHeaderSearch((prev) => !prev);
        }}
      >
        <button>
          <span className="block text-sm text-gray-700 font-semibold">
            {selectedDay && selectEnd
              ? `${format(selectedDay, "MMM dd")} - ${format(
                  selectEnd,
                  "MMM dd"
                )}`
              : "Any week"}
          </span>
        </button>
      </div>
      <div className="h-[20px] w-1 block border-r border-borderColor"></div>

      <div className="h-full pl-3 py-1 flex gap-2 items-center justify-center">
        <span
          onClick={() => {
            setOverlay(true);
            setSelection("guests");
            setHeaderSearch((prev) => !prev);
          }}
          className="block text-sm font-semibold text-black cursor-pointer"
        >
          {textResizer(result, 12) || "Any Guest"}
        </span>

        <BtnPrimary
          rounded={true}
          style={{
            padding: "12px",
            background: "#ff385c",
            backgroundImage: "none!important",
          }}
          dark={false}
          onClick={() => {
            router.push(
              `/s/${destination || "_"}?numberOfAdults=${
                guests.adults.value
              }&numberOfChildren=${guests.children.value}&numberOfInfants=${
                guests.infants.value
              }&numberOfPets=${guests.pets.value}&checkin=${
                selectedDay ? format(selectedDay, "yyyy-MM-dd") : null
              }&checkout=${
                selectedDay ? format(selectEnd, "yyyy-MM-dd") : null
              }`
            );

            setHeaderSearch(false);
            setOverlay(false);
            setSelection(null);
          }}
        >
          <Search />
        </BtnPrimary>
      </div>
    </div>
  );
};
export default HeaderSearchLayoutOne;
