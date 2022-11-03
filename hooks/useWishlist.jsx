import { useState, useEffect, useContext } from "react";
import { Context } from "../pages/_app";

const useWishlist = (detail, wishlist) => {
  const [isSaved, setIsSaved] = useState(false);
  const { setWishlist, setWishlistData } = useContext(Context);

  const changeWishlist = () => {
    let data = JSON.parse(localStorage.getItem("wishlist"));
    if (data?.length > 0) {
      const idx = data.map((e, i) =>
        e.listings.findIndex((e) => e._id === detail._id) >= 0 ? i : -1
      );

      if (idx.filter((e) => e >= 0).length > 0) {
        const res = data[idx.filter((e) => e >= 0)[0]].listings.filter((e) => {
          return e._id !== detail._id;
        });

        data[idx.filter((e) => e >= 0)[0]].listings = res;

        localStorage.setItem("wishlist", JSON.stringify(data));

        setWishlist(false);
        setWishlistData(null);
        setIsSaved((prev) => !prev);
      } else {
        setWishlist(true);
        setWishlistData({ _id: detail._id, images: detail.images });
        setIsSaved((prev) => !prev);
      }
    } else {
      setWishlist(true);
      setWishlistData({ _id: detail._id, images: detail.images });
      setIsSaved((prev) => !prev);
    }
  };

  const checkWishlist = () => {
    const data = JSON.parse(localStorage.getItem("wishlist"));
    if (data?.length > 0) {
      const idx = data.map((e, i) =>
        e.listings.findIndex((e) => e._id === detail._id) >= 0 ? i : -1
      );
      if (idx.filter((e) => e >= 0).length > 0) {
        setIsSaved(true);
        return;
      } else {
        setIsSaved(false);
      }
    } else {
      setIsSaved(false);
    }
  };
  useEffect(() => {
    checkWishlist();
  }, [detail, wishlist]);

  return [isSaved, changeWishlist];
};

export default useWishlist;
