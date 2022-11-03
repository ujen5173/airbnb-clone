import { guestsHandler } from "../../utils/guestPickerUtils";
import GuestCard from "../GuestPickerCard";

const GuestsPicker = ({ css, guests, setGuests }) => {
  return (
    <div
      className={`${
        css ||
        "w-full rounded-3xl bg-white relative z-10 px-8 py-2 shadow border border-borderColor"
      }`}
    >
      <div className="flex items-center justify-between my-6">
        <div>
          <h6 className="text-md font-medium">Adults</h6>
          <p className="text-sm font-normal text-gray-600 mt-1">
            Ages 13 or above
          </p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"minus"}
            type={"adults"}
            guests={guests}
            setGuests={setGuests}
          />
          <p className="text-gray-700 font-semibold">{guests.adults.value}</p>
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"add"}
            type={"adults"}
            guests={guests}
            setGuests={setGuests}
          />
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div>
          <h6 className="text-md font-medium">Children</h6>
          <p className="text-sm font-normal text-gray-600 mt-1">Ages 2-12</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"minus"}
            type={"children"}
            guests={guests}
            setGuests={setGuests}
          />
          <p className="text-gray-700 font-semibold">{guests.children.value}</p>
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"add"}
            type={"children"}
            guests={guests}
            setGuests={setGuests}
          />
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div>
          <h6 className="text-md font-medium">Infants</h6>
          <p className="text-sm font-normal text-gray-600 mt-1">Under 2</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"minus"}
            type={"infants"}
            guests={guests}
            setGuests={setGuests}
          />
          <p className="text-gray-700 font-semibold">{guests.infants.value}</p>
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"add"}
            type={"infants"}
            guests={guests}
            setGuests={setGuests}
          />
        </div>
      </div>
      <div className="flex items-center justify-between my-6">
        <div>
          <h6 className="text-md font-medium">Pets</h6>
        </div>
        <div className="flex items-center justify-between gap-3">
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"minus"}
            type={"pets"}
            guests={guests}
            setGuests={setGuests}
          />
          <p className="text-gray-700 font-semibold">{guests.pets.value}</p>
          <GuestCard
            guestsHandler={guestsHandler}
            operation={"add"}
            type={"pets"}
            guests={guests}
            setGuests={setGuests}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestsPicker;
