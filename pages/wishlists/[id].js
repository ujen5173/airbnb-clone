import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Header } from "../../components";
import WishlistListing from "../../components/wishlist/WishlistListing";
import Wishlist from "../../components/Wishlist";
import { Context } from "../_app";

const WishlistMap = dynamic(
  () => import("../../components/wishlist/WishlistMap"),
  {
    ssr: false,
  }
);

const WishlistListings = () => {
  const { id } = useRouter().query;
  const [places, setPlaces] = useState([]);
  const [renderMap, setRenderMap] = useState(false);
  const [data, setData] = useState([]);
  const { wishlist, setWishlist } = useContext(Context);
  const [overlay, setOverlay] = useState(false);
  const [selection, setSelection] = useState(null);
  const [headerSearch, setHeaderSearch] = useState(false);

  useEffect(() => {
    setRenderMap(true);
  }, []);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    const res = data.find((e) => e._id === id);
    setData(res);
  }, [id]);

  return (
    <>
      <Header
        width={"w-full"}
        setOverlay={setOverlay}
        selection={selection}
        setSelection={setSelection}
        headerSearch={headerSearch}
        setHeaderSearch={setHeaderSearch}
      />
      <div className="w-full min-h-[calc(100vh-104px)] h-full flex flex-col-reverse lg:flex-row relative">
        <WishlistListing data={data} setPlaces={setPlaces} />
        {renderMap && places.length > 0 && (
          <div className="relative w-full z-[0]">
            <WishlistMap places={places} />
          </div>
        )}
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

export default WishlistListings;
