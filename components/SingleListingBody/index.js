import { add, format } from "date-fns";
import { useContext, useEffect, useRef, useState } from "react";
import useLabeling from "../../hooks/useLabeling";
import { guestsData } from "../../utils/miniData";
import Images from "../SingleListingComponents/Images";
import ImageViewer from "../SingleListingComponents/ImageViewer";
import Date_GuestsPickerCard from "./Date_GuestsPickerCard";
import Reviews from "./Reviews";
import Location from "./Location";
import Info from "./Info";
import Title from "./Title";
import Star from "../../public/_svgs/star";
import BtnPrimary from "../Button/BtnPrimary";
import { useRouter } from "next/router";
import LeftArrow from "../../public/_svgs/LeftArrow";
import Heart from "../../public/_svgs/Heart";
import { Context } from "../../pages/_app";
import useWishlist from "../../hooks/useWishlist";

const SingleListingBody = ({ listing }) => {
  const router = useRouter();
  const [selection, setSelection] = useState(null); // 'guests', 'dates', null
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageViewer, setImageViewer] = useState(false);
  const [guests, setGuests] = useState({
    ...guestsData,
    adults: { ...guestsData.adults, value: 1 },
  });
  const result = useLabeling(guests);
  const [selectedDay, setSelectedDay] = useState(
    new Date(new Date().toLocaleDateString() + ", 00:00:00")
  );
  const [selectEnd, setSelectEnd] = useState(
    add(new Date(new Date().toLocaleDateString() + ", 00:00:00"), {
      days: 6,
    })
  );

  const ImagesRef = useRef(null);
  const AmenitiesRef = useRef(null);
  const ReviewsRef = useRef(null);
  const LocationRef = useRef(null);
  const CardRef = useRef(null);

  const [scroll, setScroll] = useState(null);
  const [showHeader, setShowHeader] = useState(false);
  const [rightSectionHeader, setRightSectionHeader] = useState(false);
  const { wishlist } = useContext(Context);
  const [isSaved, changeWishlist] = useWishlist(listing.data, wishlist);

  useEffect(() => {
    if (CardRef.current) {
      const { x } = CardRef.current?.getBoundingClientRect();

      window.addEventListener("scroll", () => {
        if (window.scrollY > x) {
          setRightSectionHeader(true);
        } else {
          setRightSectionHeader(false);
        }
      });
    }
  }, [CardRef.current]);

  useEffect(() => {
    if (scroll) {
      switch (scroll) {
        case "photos":
          window.scrollBy(
            0,
            ImagesRef.current?.getBoundingClientRect().top - 80
          );
          break;
        case "amenities":
          window.scrollBy(
            0,
            AmenitiesRef.current?.getBoundingClientRect().top - 80
          );
          break;
        case "reviews":
          window.scrollBy(
            0,
            ReviewsRef.current?.getBoundingClientRect().top - 80
          );
          break;
        case "location":
          window.scrollBy(
            0,
            LocationRef.current?.getBoundingClientRect().top - 80
          );
          break;
      }
    }
  }, [scroll]);

  useEffect(() => {
    if (imageViewer) {
      document.querySelector("body").style = "overflow:hidden";
    } else {
      document.querySelector("body").style = "overflow:visible";
    }
  }, [imageViewer]);

  useEffect(() => {
    if (ImagesRef.current) {
      const { bottom } = ImagesRef.current?.getBoundingClientRect();
      window.addEventListener("scroll", () => {
        if (window.scrollY > bottom) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
      });
    }
  }, [ImagesRef.current]);

  console.count("Index");

  return (
    <>
      {imageViewer && (
        <ImageViewer
          selectedImage={selectedImage}
          images={listing.data?.images}
          isSaved={isSaved}
          setImageViewer={setImageViewer}
        />
      )}
      <header
        className={`w-full bg-white fixed bottom-0 lg:top-0 lg:bottom-auto left-0 z-30 border-t lg:border-b border-borderColor shadow-top ${
          showHeader ? "opacity-1 z-30" : "lg:opacity-0 lg:z-0"
        }`}
      >
        <div className="max-w-[1120px] px-4 mx-auto flex items-center justify-between">
          <ul className="hidden md:flex gap-4">
            <li
              onClick={() => setScroll("photos")}
              className="text-md font-medium py-6 px-2 border-b-4 border-transparent transition duration-200 cursor-pointer hover:border-blackColor"
            >
              Photos
            </li>
            <li
              onClick={() => setScroll("amenities")}
              className="text-md font-medium py-6 px-2 border-b-4 border-transparent transition duration-200 cursor-pointer hover:border-blackColor"
            >
              Amenities
            </li>
            <li
              onClick={() => setScroll("reviews")}
              className="text-md font-medium py-6 px-2 border-b-4 border-transparent transition duration-200 cursor-pointer hover:border-blackColor"
            >
              Reviews
            </li>
            <li
              onClick={() => setScroll("location")}
              className="text-md font-medium py-6 px-2 border-b-4 border-transparent transition duration-200 cursor-pointer hover:border-blackColor"
            >
              Location
            </li>
          </ul>

          <div
            className={`gap-4 w-full justify-between md:w-fit md:justify-start py-3 md:py-0 flex md:${
              rightSectionHeader ? "flex" : "hidden"
            }`}
          >
            <div className="whitespace-nowrap">
              <span>
                <span className="font-medium text-lg">
                  {listing.data.price}
                </span>
                <span className="text-md"> night</span>
              </span>
              <div className="flex gap-1 items-center">
                <span>
                  <Star />
                </span>
                <span className="text-xs font-medium">
                  {listing?.data.rating}
                </span>
                <span> ·</span>
                <span className="text-xs underline text-lightTextColor">
                  20 reviews
                </span>
              </div>
            </div>
            <BtnPrimary
              style={{ fontSize: "1rem", width: "fit-content" }}
              onClick={() =>
                router.push(
                  `/book/${listing?.data._id}?numberOfAdults=${
                    guests.adults.value || 0
                  }&numberOfChildren=${
                    guests.children.value || 0
                  }&numberOfInfants=${guests.infants.value || 0}&numberOfPets=${
                    guests.pets.value || 0
                  }&checkin=${
                    selectedDay && format(selectedDay, "yyyy-MM-dd")
                  }&checkout=${selectEnd && format(selectEnd, "yyyy-MM-dd")}`
                )
              }
            >
              Reserve
            </BtnPrimary>
          </div>
        </div>
      </header>

      <div className="w-full relative block lg:hidden">
        <nav className="absolute top-0 left-0 w-full p-2 z-20 flex items-center justify-between">
          <button
            onClick={() => {
              router.push("/");
            }}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
          >
            <LeftArrow />
          </button>
          <button
            onClick={changeWishlist}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-white"
          >
            <Heart
              css={`h-[20px] w-[20px] stroke-white stroke-[3] ${
                isSaved ? "fill-[#ff385c]" : "fill-[rgba(0, 0, 0, 0.5)]"
              }`}
            />
          </button>
        </nav>
        <ImageSlider listing={listing} />
      </div>

      <section className="w-full px-4">
        <div className="max-w-[1120px] mx-auto py-8">
          <Title
            isSaved={isSaved}
            listing={listing}
            addWishlist={changeWishlist}
          />
          <div
            ref={ImagesRef}
            className="hidden lg:block h-screen rounded-2xl overflow-hidden my-8 relative min-h-[20vh] max-h-[40vh]"
          >
            <Images
              setSelectedImage={setSelectedImage}
              listing={listing}
              setImageViewer={setImageViewer}
            />
          </div>

          <div className="flex gap-16 relative mb-8 mt-8 lg:mt-0">
            <Info listing={listing} ref={AmenitiesRef} />
            <div className="hidden lg:block">
              <Date_GuestsPickerCard
                selection={selection}
                setSelection={setSelection}
                selectedDay={selectedDay}
                selectEnd={selectEnd}
                setSelectedDay={setSelectedDay}
                setSelectEnd={setSelectEnd}
                result={result}
                guests={guests}
                setGuests={setGuests}
                listing={listing.data}
                ref={CardRef}
              />
            </div>
          </div>
          <Reviews data={listing.data} ref={ReviewsRef} />
          <Location listing={listing.data} ref={LocationRef} />
        </div>
      </section>
    </>
  );
};

export default SingleListingBody;

const ImageSlider = ({ listing }) => {
  // console.log("Image slider re-rendered");
  return (
    <div className="w-full min-h-[30vh]">
      {listing.data?.images && (
        <img
          src={listing.data.images[0]?.url}
          className="w-full object-cover"
          alt=""
        />
      )}
    </div>
  );
};
