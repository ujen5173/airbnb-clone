import { Header, SingleListingBody } from "../../components";
import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import axios from "axios";
import { Context } from "../_app";
import Wishlist from "../../components/Wishlist";

const Listing = () => {
  const router = useRouter();
  const { wishlist, setWishlist } = useContext(Context);
  const [overlay, setOverlay] = useState(false);
  const [selection, setSelection] = useState(null);
  const [headerSearch, setHeaderSearch] = useState(false);
  const [listing, setListing] = useState({
    loading: true,
    data: {},
  });

  useEffect(() => {
    if (router.query.slug) {
      setListing({
        loading: true,
        data: {},
      });
      (async () => {
        const { data } = await axios(`/api/listings/${router.query.slug}`);
        if (data.success) {
          setListing({
            loading: false,
            data: data.data[0],
          });
        }
      })();
    }
  }, [router.query]);

  return (
    <>
      <Head>
        <title>
          House rent in {listing.loading ? "..." : listing.data?.title} - Aribnb
          Clone
        </title>
      </Head>
      <Header
        header="relative"
        width="max-w-[1120px] hidden lg:flex"
        setOverlay={setOverlay}
        selection={selection}
        setSelection={setSelection}
        headerSearch={headerSearch}
        setHeaderSearch={setHeaderSearch}
      />
      <SingleListingBody listing={listing} />
      <Footer />
      {overlay && (
        <div
          className="fixed top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40"
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

export default Listing;
