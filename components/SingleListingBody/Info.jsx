import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Times from "../../public/_svgs/Times";

const Info = React.forwardRef(({ listing }, ref) => {
  const [amenitiesModal, setAmenitiesModal] = useState(false);

  useEffect(() => {
    if (amenitiesModal) {
      document.querySelector("body").style.overflow = "hidden";
    } else {
      document.querySelector("body").style.overflow = "auto";
    }
  }, [amenitiesModal]);

  return (
    <div className="w-full">
      <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-4 pb-6">
        <div className="flex-1 h-full">
          {listing.loading ? (
            <div className="h-7 mb-2 rounded-md bg-lightBorderColor w-7/12"></div>
          ) : (
            <h1 className="text-lg md:text-2xl mb-2 font-semibold">
              Hosted by {listing.data?.user?.name}
            </h1>
          )}
          {listing.loading ? (
            <div className="h-7 mb-2 rounded-md bg-lightBorderColor w-4/12"></div>
          ) : (
            <div className="flex items-center gap-1 text-md">
              {listing.data?.person_capacity} guests{" · "}
              {listing.data?.pets_capacity > 0 &&
                `${listing.data?.person_capacity} pets`}
              {" · "}
              {listing.data?.bedrooms} bedrooms {" · "} {listing.data?.beds}{" "}
              beds
            </div>
          )}
        </div>
        <div className="rounded-full w-[70px] h-[70px] overflow-hidden">
          {listing.loading ? (
            <div className="rounded-full w-full h-full bg-lightBorderColor"></div>
          ) : (
            <img
              src={listing.data?.user?.profile?.url}
              className="rounded-full w-full h-full object-cover"
              alt=""
            />
          )}
        </div>
      </div>
      <div className="py-8 border-y border-darkBorderColor">
        {listing.loading ? (
          <div className="w-full h-7 bg-lightBorderColor rounded-md"></div>
        ) : (
          <p className="text-md text-lightTextColor">{listing.data?.about}</p>
        )}
      </div>
      <div className="py-8" ref={ref}>
        <h1 className="text-2xl mb-4 font-semibold">What this place offers?</h1>
        <ul className="block md:flex flex-wrap">
          {listing.data?.amenities &&
            [...listing.data?.amenities]?.splice(0, 10).map((e) => (
              <li
                className="w-[calc(100%/2-10px)] flex gap-2 my-2 py-2 md:py-0"
                key={uuidv4()}
              >
                <img
                  src={`/icons/${e
                    .toLowerCase()
                    .trim()
                    .replaceAll(" ", "_")}.png`}
                  className="w-6 h-6 mt-1"
                  alt=""
                />
                {e}
              </li>
            ))}
        </ul>
        <button
          className="btn-normal mt-8"
          onClick={() => setAmenitiesModal(true)}
        >
          See all {listing.data?.amenities?.length} amenities
        </button>
        {amenitiesModal && (
          <AmenitiesModal
            amenities={listing.data?.amenities}
            setAmenitiesModal={setAmenitiesModal}
          />
        )}
      </div>
    </div>
  );
});

export default React.memo(Info);

const AmenitiesModal = ({ amenities, setAmenitiesModal }) => {
  return (
    <div className="fixed w-screen h-screen inset-0 z-30 flex items-center justify-center">
      <div
        className="fixed top-0 left-0 w-full h-full z-30 bg-black bg-opacity-40"
        onClick={() => setAmenitiesModal(false)}
      ></div>
      <div className="w-[50rem] h-full max-h-[calc(100vh-110px)] bg-white z-40 relative rounded-xl animation_primary">
        <header className="flex items-center py-6 px-4">
          <button onClick={() => setAmenitiesModal(false)}>
            <Times />
          </button>
        </header>
        <main className="h-full w-full max-h-[calc(100vh-180px)] pt-3 md:pt-6 overflow-auto px-4">
          <h1 className="text-2xl font-semibold">What this place offers?</h1>
          <div className="h-full w-full">
            {amenities?.map((e) => (
              <li
                className="w-full py-4 md:py-6 border-b border-borderColor flex gap-2 items-center my-2"
                key={uuidv4()}
              >
                <img
                  src={`/icons/${e
                    .toLowerCase()
                    .trim()
                    .replaceAll(" ", "_")}.png`}
                  className="w-6 h-6"
                  alt=""
                />
                {e}
              </li>
            ))}
            {amenities?.map((e) => (
              <li
                className="w-full py-6 border-b border-borderColor flex gap-2 items-center my-2"
                key={uuidv4()}
              >
                <img
                  src={`/icons/${e
                    .toLowerCase()
                    .trim()
                    .replaceAll(" ", "_")}.png`}
                  className="w-6 h-6"
                  alt=""
                />
                {e}
              </li>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};
