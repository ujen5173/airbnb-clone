import React from "react";
import Star from "../../public/_svgs/star";
import Dates from "../SingleListingComponents/Dates";
import Guests from "../SingleListingComponents/Guests";
import { format } from "date-fns";
import BtnPrimary from "../Button/BtnPrimary";
import { useRouter } from "next/router";

const Date_GuestsPickerCard = React.forwardRef(
  (
    {
      selection,
      setSelection,
      selectedDay,
      selectEnd,
      setSelectedDay,
      setSelectEnd,
      result,
      guests,
      setGuests,
      listing,
    },
    ref
  ) => {
    const router = useRouter();
    console.count("Card");

    return (
      <div className="sticky top-28 left-0 min-w-[25rem]">
        <div className="rounded-xl shadow border border-lightBorderColor p-5">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-md font-normal">
              <span className="font-medium text-2xl">{listing?.price}</span>
              /night
            </h1>
            <span className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Star />
                {listing?.rating}
              </span>
              <span>·</span>
              <span className="underline">
                {listing?.reviews?.length} reviews
              </span>
            </span>
          </div>

          <div className="rounded-lg border border-darkBorderColor mb-6 relative">
            <Dates
              selection={selection}
              setSelection={setSelection}
              selectedDay={selectedDay}
              selectEnd={selectEnd}
              setSelectedDay={setSelectedDay}
              setSelectEnd={setSelectEnd}
            />
            <Guests
              selection={selection}
              setSelection={setSelection}
              result={result}
              guests={guests}
              setGuests={setGuests}
            />
          </div>

          <div ref={ref}>
            <BtnPrimary
              onClick={() => {
                router.push(
                  `/book/${listing?._id}?numberOfAdults=${
                    guests.adults.value
                  }&numberOfChildren=${guests.children.value}&numberOfInfants=${
                    guests.infants.value
                  }&numberOfPets=${guests.pets.value}&checkin=${format(
                    selectedDay,
                    "yyyy-MM-dd"
                  )}&checkout=${format(selectEnd, "yyyy-MM-dd")}`
                );
              }}
            >
              Reserve
            </BtnPrimary>
          </div>
        </div>
      </div>
    );
  }
);

export default Date_GuestsPickerCard;
