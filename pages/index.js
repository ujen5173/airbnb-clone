import { useContext, useState } from "react";
import { Header, Posts } from "../components";
import Head from "next/head";
import { Context } from "./_app";
import Wishlist from "../components/Wishlist";

const Home = () => {
  const [overlay, setOverlay] = useState(false);
  const [selection, setSelection] = useState(null);
  const [headerSearch, setHeaderSearch] = useState(false);

  const { wishlist, setWishlist } = useContext(Context);

  return (
    <>
      <Head>
        <title>Airbnb Clone</title>
      </Head>
      <Header
        width="container"
        setOverlay={setOverlay}
        selection={selection}
        setSelection={setSelection}
        headerSearch={headerSearch}
        setHeaderSearch={setHeaderSearch}
      />

      <div className="min-h-screen relative">
        <Posts />

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
      </div>
    </>
  );
};

export default Home;
