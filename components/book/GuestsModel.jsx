import Times2 from "../../public/_svgs/Times2";
import GuestsPicker from "../Pickers/GuestsPicker";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import { format } from "date-fns";

const GuestsModel = ({ infos, guests, setGuests, setGuestsModel }) => {
  const router = useRouter();
  const sectionRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (sectionRef && overlayRef) {
      let tl = gsap.timeline({
        ease: "linear",
        transition: 0.15,
      });
      tl.fromTo(overlayRef.current, 0.15, { opacity: 0 }, { opacity: 1 });
      let tl2 = gsap.timeline({
        ease: "linear",
      });
      tl2.fromTo(
        sectionRef.current,
        0.25,
        {
          opacity: 0,
          translateY: 120,
        },
        {
          opacity: 1,
          translateY: 0,
          ease: "linear",
          delay: 0.2,
        }
      );
    }
  }, []);

  const removeDateModel = () => {
    let tl = gsap.timeline({
      ease: "linear",
      transition: 0.15,
    });
    tl.fromTo(overlayRef.current, 0.15, { opacity: 1 }, { opacity: 0 });
    let tl2 = gsap.timeline({
      ease: "linear",
    });
    tl2.fromTo(
      sectionRef.current,
      0.25,
      {
        opacity: 1,
        translateY: 0,
      },
      {
        opacity: 0,
        translateY: 120,
        ease: "linear",
        delay: 0.2,
      }
    );
    setTimeout(() => {
      setGuestsModel(false);
    }, 350);
  };

  const changeUrlData = () => {
    setGuestsModel(false);
    router.push(
      `/book/${router.query.listingID}?numberOfAdults=${
        guests.adults.value
      }&numberOfChildren=${guests.children.value}&numberOfInfants=${
        guests.infants.value
      }&numberOfPets=${guests.pets.value}&checkin=${format(
        new Date(new Date(infos.checkin).toLocaleDateString() + ", 00:00:00"),
        "yyyy-MM-dd"
      )}&checkout=${format(
        new Date(new Date(infos.checkout).toLocaleDateString() + ", 00:00:00"),
        "yyyy-MM-dd"
      )}`
    );
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center">
      <div
        ref={overlayRef}
        className="overlay bg-blackColor bg-opacity-50 w-full h-full absolute top-0 left-0 opacity-0"
        onClick={removeDateModel}
      ></div>
      <div
        ref={sectionRef}
        className="rounded-lg custom-shadow bg-white relative z-40 p-3 max-w-[300px] w-full translate-y-[120px] opacity-0"
      >
        <button
          onClick={removeDateModel}
          className="rounded-full hover:bg-borderColor p-3"
        >
          <Times2 />
        </button>
        <div className="px-3">
          <GuestsPicker
            guests={guests}
            setGuests={setGuests}
            css={"border-0 w-full"}
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={changeUrlData}
            className="py-2 px-4 rounded-md text-sm text-white bg-blackColor"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
export default GuestsModel;
