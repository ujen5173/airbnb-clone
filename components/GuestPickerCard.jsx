import Minus from "../public/_svgs/Minus";
import Plus from "../public/_svgs/Plus";

const GuestCard = ({ guestsHandler, operation, type, guests, setGuests }) => {
  const getDisabledGuest = () => {
    let total = 0;

    Object.entries(guests).forEach((guest) => {
      if (type === "children" || type === "adults") {
        total += guest[1].value;
      }
    });

    if (total >= 16 && operation === "add") {
      return true;
    } else {
      if (operation === "add") {
        if (guests[type].value <= guests[type].max - 1) {
          return false;
        } else {
          return true;
        }
      } else {
        if (guests[type].value >= guests[type].min + 1) {
          return false;
        } else {
          return true;
        }
      }
    }
  };

  return (
    <button
      className={`p-2 rounded-full border border-borderColor flex items-center justify-center ${
        getDisabledGuest() ? "opacity-40" : "opacity-100"
      }
      `}
      onClick={() => guestsHandler(operation, type, guests, setGuests)}
      disabled={getDisabledGuest()}
    >
      {operation === "add" ? <Plus /> : <Minus />}
    </button>
  );
};

export default GuestCard;
