export const guestsHandler = (operation, type, guests, setGuests) => {
  switch (operation) {
    case "add":
      if (type !== "adults" && guests.adults.value === 0) {
        setGuests((prev) => ({
          ...prev,
          adults: {
            ...prev.adults,
            value: prev.adults.value + 1,
          },
        }));
      }
      setGuests((prev) => ({
        ...prev,
        [type]: {
          ...prev[type],
          value: prev[type].value + 1,
        },
      }));
      break;
    case "minus":
      if (type !== "adults") {
        setGuests((prev) => ({
          ...prev,
          [type]: {
            ...prev[type],
            value: prev[type].value - 1,
          },
        }));
      } else {
        if (
          (!guests.children.value &&
            !guests.infants.value &&
            !guests.pets.value) ||
          guests.adults.value > 1
        ) {
          setGuests((prev) => ({
            ...prev,
            [type]: {
              ...prev[type],
              value: prev[type].value - 1,
            },
          }));
        }
      }
      break;
    default:
      return;
  }
};
