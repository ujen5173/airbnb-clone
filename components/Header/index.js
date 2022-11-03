import { useEffect, useState } from "react";
import { classNames } from "../../utils/datePickerUtils";
import { SemiHeader, HeaderSearchLayoutOne, HeaderSearchLayoutTwo } from "../";
import useLabeling from "../../hooks/useLabeling";
import { guestsData } from "../../utils/miniData";
import Logo from "../../public/_svgs/Logo";
import Link from "next/link";
import Hamburger from "../../public/_svgs/Hamburger";
import LogoIcon from "../../public/_svgs/LogoIcon";

let hasRendered = false; // for removing the animation of line 120.

const Header = ({
  width = "container",
  setOverlay,
  selection,
  setSelection,
  headerSearch,
  setHeaderSearch,
  defaultInfos,
  header = "sticky",
}) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectEnd, setSelectEnd] = useState(null);
  const [guests, setGuests] = useState(guestsData);
  const [headerMenu, setHeaderMenu] = useState(false);

  useEffect(() => {
    if (defaultInfos?.checkin && defaultInfos?.checkin) {
      if (
        defaultInfos?.checkin !== "null" &&
        defaultInfos?.checkin !== "null"
      ) {
        setSelectedDay(
          new Date(
            new Date(defaultInfos.checkin).toLocaleDateString() + ", 00:00:00"
          )
        );
        setSelectEnd(
          new Date(
            new Date(defaultInfos.checkout).toLocaleDateString() + ", 00:00:00"
          )
        );
      }
    }
    if (defaultInfos?.numberOfAdults) {
      setGuests({
        adults: { ...guests.adults, value: +defaultInfos.numberOfAdults },
        children: { ...guests.children, value: +defaultInfos.numberOfChildren },
        infants: { ...guests.infants, value: +defaultInfos.numberOfInfants },
        pets: { ...guests.pets, value: +defaultInfos.numberOfPets },
      });
    }
  }, [defaultInfos]);

  // null, destination, check-in, check-out, guests
  const [destination, setDestination] = useState(""); // input value
  const result = useLabeling(guests);

  useEffect(() => {
    if (headerSearch) {
      hasRendered = true;
    }
  }, [headerSearch]);

  return (
    <header
      className={`border-b border-[#e6e6e6] ${header} top-0 left-0 z-40 bg-white px-4 block`}
    >
      <div
        className={`w-full xl:${width} relative mx-auto py-2 md:py-5 flex items-center justify-between`}
      >
        <div>
          <a href="/">
            <>
              <div className="cursor-pointer hidden xl:block">
                <Logo />
              </div>
              <div className="cursor-pointer block xl:hidden">
                <LogoIcon />
              </div>
            </>
          </a>
        </div>

        <SemiHeader headerSearch={headerSearch} />

        <div
          className="absolute z-30 hidden lg:block w-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <HeaderSearchLayoutOne
            setSelection={setSelection}
            setHeaderSearch={setHeaderSearch}
            selectedDay={selectedDay}
            selectEnd={selectEnd}
            headerSearch={headerSearch}
            destination={destination}
            setDestination={setDestination}
            result={result}
            setOverlay={setOverlay}
            guests={guests}
          />
          <HeaderSearchLayoutTwo
            setSelection={setSelection}
            selection={selection}
            selectedDay={selectedDay}
            selectEnd={selectEnd}
            guests={guests}
            headerSearch={headerSearch}
            setGuests={setGuests}
            setSelectedDay={setSelectedDay}
            setSelectEnd={setSelectEnd}
            destination={destination}
            setDestination={setDestination}
            setHeaderSearch={setHeaderSearch}
            setOverlay={setOverlay}
            result={result}
          />
        </div>

        <div className="flex gap-2 items-center min-w-fit">
          <div className="rounded-full px-4 py-2 hidden md:block">
            Become a Host
          </div>
          <div
            onClick={() => setHeaderMenu((prev) => !prev)}
            className={`flex items-center gap-3 border border-borderColor select-none rounded-full pr-2 pl-4 py-1 cursor-pointer relative ${
              headerMenu ? "custom-shadow" : ""
            }`}
          >
            <Hamburger />
            <div>
              <img
                src="/images/default_image.png"
                className="w-8 h-8 rounded-full object-cover"
                alt="Default User"
              />
            </div>
            {headerMenu && <HeaderMenu />}
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setSelection(null);
        }}
        className={classNames(
          `bg-white w-full absolute top-full left-0 z-20 white-box ${
            headerSearch ? "animation-on" : hasRendered && "animation-off"
          }`
        )}
      ></div>
    </header>
  );
};
export default Header;

const HeaderMenu = () => {
  return (
    <div className="w-64 rounded-md bg-white z-30 absolute top-full mt-4 right-0 shadow-xl border border-borderColor">
      <ul className="border-b border-borderColor py-2">
        <Link href="/messages">
          <li className="px-4 py-2 text-md hover:bg-gray-100">
            <span className="block">Messages</span>
          </li>
        </Link>
        <Link href="/wishlists">
          <li className="px-4 py-2 text-md hover:bg-gray-100">
            <span className="block">Wishlists</span>
          </li>
        </Link>
        <Link href="/trips">
          <li className="px-4 py-2 text-md hover:bg-gray-100">
            <span className="block">Trips</span>
          </li>
        </Link>
      </ul>
      <ul className="border-b border-borderColor py-2">
        <li className="px-4 py-2 text-md hover:bg-gray-100">Host your home</li>
        <li className="px-4 py-2 text-md hover:bg-gray-100">Account</li>
      </ul>
      <ul className="py-2">
        <li className="px-4 py-2 text-md hover:bg-gray-100">Help</li>
        <li className="px-4 py-2 text-md hover:bg-gray-100">Log out</li>
      </ul>
    </div>
  );
};
