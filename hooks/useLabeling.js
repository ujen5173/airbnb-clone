import { useEffect, useState } from "react";

const useLabeling = (guests) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    // adding label in guests
    if (guests.adults.value || guests.children.value) {
      setResult(`${guests.adults.value + guests.children.value} guests`);
    } else {
      setResult(null);
    }

    if (guests.infants.value) {
      setResult(
        `${guests.adults.value + guests.children.value} guests, ${
          guests.infants.value
        } infants`
      );
    } else if (guests.infants.value === 0 && guests.adults.value) {
      setResult(`${guests.adults.value + guests.children.value} guests`);
    }

    if (guests.pets.value && guests.infants.value === 0) {
      setResult(
        `${guests.adults.value + guests.children.value} guests, ${
          guests.pets.value
        } pets`
      );
    } else if (guests.pets.value) {
      setResult(
        `${guests.adults.value + guests.children.value} guests, ${
          guests.infants.value
        } infants, ${guests.pets.value} pets`
      );
    }
  }, [guests]);

  return result;
};

export default useLabeling;
