import React, { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../pages/_app";
import Times from "../public/_svgs/Times";
import { gsap } from "gsap";
import { v4 as uuidv4 } from "uuid";

const Wishlist = () => {
  const { setWishlist } = useContext(Context);
  const [value, setValue] = useState("");
  const wishlistRef = useRef(null);
  const [existingWishlist, setExistingWishlist] = useState([]);
  const [newWishlist, setNewWishlist] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (data?.length > 0) {
      setExistingWishlist(data);
      setNewWishlist(false);
    } else {
      setNewWishlist(true);
    }
  }, []);

  useEffect(() => {
    if (wishlistRef.current) {
      gsap.fromTo(
        wishlistRef.current,
        0.4,
        { opacity: 0, translateY: 150 },
        {
          opacity: 1,
          translateY: 0,
        }
      );
    }
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40"
        onClick={() => {
          setWishlist(false);
        }}
      ></div>
      <div
        ref={wishlistRef}
        className="bg-white rounded-lg shadow w-[450px] z-20 opacity-0 translate-y-[50px]"
      >
        {newWishlist ? (
          <NewWishlist
            value={value}
            setValue={setValue}
            setWishlist={setWishlist}
          />
        ) : (
          <ExistingWishlists
            existingWishlist={existingWishlist}
            setNewWishlist={setNewWishlist}
            setWishlist={setWishlist}
          />
        )}
      </div>
    </div>
  );
};

export default Wishlist;

const ExistingWishlists = ({ existingWishlist, setNewWishlist }) => {
  const { wishlistData, setWishlist } = useContext(Context);
  return (
    <>
      <header className="p-4 relative flex items-center justify-center border-b border-borderColor">
        <div className="absolute left-4">
          <Times />
        </div>
        <h1 className="text-lg font-medium">Your Wishlist</h1>
      </header>
      <main className="px-4 py-6">
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => {
            setNewWishlist(true);
          }}
        >
          <button className="rounded-xl border border-borderColor w-16 h-16 flex items-center justify-center">
            <i class="uil uil-plus text-4xl"></i>
          </button>

          <span className="font-medium text-lg">Create New Wishlist</span>
        </div>
        {existingWishlist.map((wishlist) => {
          return (
            <div
              className="flex items-center gap-4 my-4 cursor-pointer"
              onClick={() => {
                let data = JSON.parse(localStorage.getItem("wishlist")) || [];
                const listingsIdx = data.findIndex(
                  (e) => e.name === wishlist.name
                );
                if (listingsIdx >= 0) {
                  if (
                    data[listingsIdx].listings.findIndex(
                      (e) => e._id === wishlistData._id
                    ) === -1
                  ) {
                    data[listingsIdx].listings = [
                      wishlistData,
                      ...data[listingsIdx].listings,
                    ];
                    localStorage.setItem("wishlist", JSON.stringify(data));
                  }
                }
                setWishlist(false);
              }}
            >
              <div className="rounded-xl border border-borderColor bg-borderColor w-16 h-16 flex items-center justify-center">
                {wishlist.listings.length > 0 && (
                  <img
                    src={wishlist.listings[0].images[0].url}
                    className="w-full h-full object-cover rounded-md"
                    alt=""
                  />
                )}
              </div>

              <span className="font-medium text-lg">{wishlist.name}</span>
            </div>
          );
        })}
      </main>
    </>
  );
};

const NewWishlist = ({ value, setValue, setWishlist }) => {
  const { wishlistData } = useContext(Context);
  return (
    <>
      <header className="p-4 relative flex items-center justify-center border-b border-borderColor">
        <div className="absolute left-4">
          <Times />
        </div>
        <h1 className="text-lg font-medium">Name New Wishlist</h1>
      </header>

      <main className="px-4 py-6 border-b border-borderColor">
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setValue(e.target.value)}
          type="text"
          className="border border-borderColor rounded-md px-4 py-2 w-full outline-darkBorderColor"
        />
        <span className="text-xs text-lightTextColor">
          50 charaters maximum
        </span>
      </main>
      <footer className="py-6 px-4 flex flex-end">
        <button
          onClick={() => {
            let data = JSON.parse(localStorage.getItem("wishlist")) || [];
            const listingsIdx = data.findIndex((e) => e.name === value);
            if (listingsIdx === -1) {
              data = [
                ...data,
                { _id: uuidv4(), name: value, listings: [wishlistData] },
              ];
              localStorage.setItem("wishlist", JSON.stringify(data));
            }
            setWishlist(false);
          }}
          disabled={value.length < 50 && value.length > 0 ? false : true}
          className={`btn-secondary w-full text-base ${
            value.length < 50 && value.length > 0
              ? ""
              : "cursor-not-allowed opacity-80"
          }`}
        >
          Create
        </button>
      </footer>
    </>
  );
};
