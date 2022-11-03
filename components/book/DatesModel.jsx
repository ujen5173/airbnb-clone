import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import DatePicker from "../Pickers/DatePicker";
import Times2 from "../../public/_svgs/Times2";
import { format } from "date-fns";

const DatesModel = ({ infos, setDateModel }) => {
  const router = useRouter();
  const [selectedDay, setSelectedDay] = useState(
    infos.checkin
      ? new Date(new Date(infos.checkin).toLocaleDateString() + ", 00:00:00")
      : null
  );
  const [selectEnd, setSelectEnd] = useState(
    infos.checkout
      ? new Date(new Date(infos.checkout).toLocaleDateString() + ", 00:00:00")
      : null
  );
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
      setDateModel(false);
    }, 350);
  };

  const changeUrlData = () => {
    setDateModel(false);
    router.push(
      `/book/${router.query.listingID}?numberOfAdults=${
        infos.numberOfAdults
      }&numberOfChildren=${infos.numberOfChildren}&numberOfInfants=${
        infos.numberOfInfants
      }&numberOfPets=${infos.numberOfPets}&checkin=${format(
        selectedDay,
        "yyyy-MM-dd"
      )}&checkout=${format(selectEnd, "yyyy-MM-dd")}`
    );
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 flex items-center justify-center">
      <div
        ref={overlayRef}
        className="overlay bg-blackColor bg-opacity-50 w-full h-full absolute top-0 left-0"
        onClick={removeDateModel}
      ></div>
      <div
        ref={sectionRef}
        className="rounded-lg custom-shadow bg-white relative z-40 p-6 max-w-[850px] translate-y-[120px] opacity-0"
      >
        <button
          onClick={removeDateModel}
          className="rounded-full hover:bg-borderColor p-3"
        >
          <Times2 />
        </button>
        <DatePicker
          selectedDay={selectedDay}
          setSelectedDay={setSelectedDay}
          selectEnd={selectEnd}
          setSelectEnd={setSelectEnd}
          css={"border-0"}
        />
        <div className="flex gap-6 justify-end">
          <button
            onClick={() => {
              setSelectedDay(null);
              setSelectEnd(null);
            }}
            className="text-sm underline text-blackColor"
          >
            Clear dates
          </button>
          <button
            disabled={selectedDay && selectEnd ? false : true}
            onClick={changeUrlData}
            className={`${
              selectedDay && selectEnd ? "" : "opacity-25 cursor-not-allowed"
            } py-2 px-4 rounded-md text-sm text-white bg-blackColor`}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatesModel;
