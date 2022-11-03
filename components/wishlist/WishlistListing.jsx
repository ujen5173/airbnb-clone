import React, { useEffect, useState } from "react";
import Card from "../Posts/body/Card";
import postsData from "../../bot/data.json";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const WishlistListing = ({ data, setPlaces }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (data && data.listings) {
      const ids = data?.listings?.map((e) => e._id);
      const res = postsData.filter((e) => ids.includes(e._id));
      setListings(res);
      setPlaces(
        res.map((e) => ({
          lat: e.geolocation.lat,
          lng: e.geolocation.lng,
          price: e.price,
        }))
      );
    }
  }, [data]);

  return (
    <div className="bg-white lg:shadow lg:border-r lg:border-borderColor max-w-[850px] w-full px-4 py-6">
      <header className="flex items-center justify-between mb-6">
        <button>
          <Link href={"/wishlists"}>
            <span>
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                className="block fill-none; h-[16px] w-[16px] stroke-current stroke-[4] overflow-visible;"
              >
                <g fill="none">
                  <path d="m4 16h26"></path>
                  <path d="m15 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path>
                </g>
              </svg>
            </span>
          </Link>
        </button>
      </header>
      <main>
        <h1 className="text-3xl font-semibold mb-5">
          {data?.name &&
            data.name.slice(0, 1).toUpperCase() +
              data.name.slice(1, data.name.length)}
        </h1>
        <ul className="flex flex-wrap w-full gap-6">
          {listings.length > 0 ? (
            listings.map((e) => (
              <div
                className="w-full sm:w-[calc(100%/3-16px)] lg:w-[calc(100%/2-16px)]"
                key={uuidv4()}
              >
                <Card post={e} />
              </div>
            ))
          ) : (
            <h1 className="text-xl font-semibold text-lightTextColor">
              No Wishlists added
            </h1>
          )}
        </ul>
      </main>
    </div>
  );
};

export default WishlistListing;
