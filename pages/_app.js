import React, { useState } from "react";
import "../styles/globals.css";

export const Context = React.createContext();

function MyApp({ Component, pageProps }) {
  const [wishlist, setWishlist] = useState(false);
  const [wishlistData, setWishlistData] = useState(null);

  const values = { wishlist, setWishlist, wishlistData, setWishlistData };

  return (
    <Context.Provider value={values}>
      <Component {...pageProps} />
    </Context.Provider>
  );
}

export default MyApp;
