import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components";
import { v4 as uuidv4 } from "uuid";
import Head from "next/head";
import WishlistCard from "../../components/wishlist/WishlistCard";
import Wishlist from "../../components/Wishlist";
import { Context } from "../_app";

const WishlistPage = () => {
  const [data, setData] = useState([]);
  const [overlay, setOverlay] = useState(false);
  const [selection, setSelection] = useState(null);
  const [headerSearch, setHeaderSearch] = useState(false);
  const { wishlist, setWishlist } = useContext(Context);

  useEffect(() => {
    const res = JSON.parse(localStorage.getItem("wishlist")) || [];
    setData(res);
  }, []);

  return (
    <>
      <Head>
        <title>Your lists - Wishlists - Airbnb</title>
      </Head>
      <Header
        setOverlay={setOverlay}
        selection={selection}
        setSelection={setSelection}
        headerSearch={headerSearch}
        setHeaderSearch={setHeaderSearch}
      />
      <div className="w-full">
        <div className="max-w-[1320px] mx-auto w-full py-10 px-4">
          <h1 className="text-3xl font-bold">Wishlist</h1>
          <div className="my-4 md:my-10 flex gap-6 flex-wrap">
            {data.length > 0 ? (
              data.map((data) => <WishlistCard key={uuidv4()} data={data} />)
            ) : (
              <div className="w-full md:w-6/12">
                <h1 className="text-2xl mb-4 font-semibold">
                  Create your first wishlist
                </h1>
                <p className="text-md text-lightTextColor">
                  As you search, tap the heart icon to save your favorite places
                  to stay or things to do to a wishlist.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {overlay && (
        <div
          className="fixed top-0 left-0 w-full h-full z-30 bg-black bg-opacity-40"
          onClick={() => {
            setSelection(null);
            setOverlay(false);
            setHeaderSearch(false);
          }}
        ></div>
      )}
      {wishlist && <Wishlist setWishlist={setWishlist} />}
    </>
  );
};

export default WishlistPage;
