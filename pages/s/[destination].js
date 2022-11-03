import Head from "next/head";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../components";
import PlacesListMapSection from "../../components/MapFilter/PlacesListMapSection";
import { getParams } from "../../utils/handlers";
import dynamic from "next/dynamic";
import FilterModal from "../../components/MapFilter/Filters";
import axios from "axios";
import LOADING from "../../public/images/giphy.gif";
import Wishlist from "../../components/Wishlist";
import { Context } from "../_app";

const Map = dynamic(() => import("../../components/MapFilter/LeafletMap"), {
  ssr: false,
});
// const GoogleMapComponent = dynamic(
//   () => import("../../components/MapFilter/GoogleMap"),
//   {
//     ssr: false,
//   }
// );

const SearchPage = () => {
  const { destination } = useRouter().query;
  const [infos, setInfos] = useState({});
  const [data, setData] = useState({
    loading: true,
    results: [],
  });

  const [overlay, setOverlay] = useState(false);
  const [selection, setSelection] = useState(null);
  const [headerSearch, setHeaderSearch] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [filterModal, setFilterModal] = useState(false);
  const [location, setLocation] = useState(null);
  const [hoveredPlace, setHoveredPlace] = useState(null);
  const [places, setPlaces] = useState([]);
  const { wishlist, setWishlist } = useContext(Context);

  useEffect(() => {
    if (typeof data === "string") {
      setData(JSON.parse(data));
    }
  }, [data]);

  useEffect(() => {
    if (places.length > 0) {
      const newData = places.map((e) => {
        return e._id === hoveredPlace
          ? { ...e, hovered: true }
          : { ...e, hovered: false };
      });
      setPlaces(newData);
    }
  }, [hoveredPlace]);

  useEffect(() => {
    setInfos({ ...getParams(), destination });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation([position.coords.latitude, position.coords.longitude]);
      });
    }
    (async () => {
      if (destination?.trim()) {
        const url = `https://nominatim.openstreetmap.org/?addressdetails=1&q=${destination.trim()}&format=json&limit=1`;
        const { data } = await axios(url);

        if (data.length === 1) {
          if (data[0].lat && data[0].lon) {
            setLocation([+data[0].lat, +data[0].lon]);
          }
        } else {
          if (userLocation) {
            setLocation(userLocation);
          } else {
            setLocation([-34.6037, -58.563]);
          }
        }
      } else {
        if (userLocation) {
          setLocation(userLocation);
        } else {
          setLocation([-34.6037, -58.563]);
        }
      }
    })();
  }, [destination]);

  return (
    <>
      <Head>
        <title>
          Airbnb Clone | Map Choice - Vacation Rentals & Places to stay - Airbnb
        </title>
      </Head>
      <Header
        width="px-6"
        setOverlay={setOverlay}
        selection={selection}
        setSelection={setSelection}
        headerSearch={headerSearch}
        setHeaderSearch={setHeaderSearch}
        defaultInfos={infos}
      />
      <div className="flex flex-col-reverse xl:flex-row w-full h-[calc(100vh-81px)] relative z-10">
        <PlacesListMapSection
          data={data}
          setFilterModal={setFilterModal}
          hoveredPlace={hoveredPlace}
          setHoveredPlace={setHoveredPlace}
        />
        {location ? (
          // <GoogleMapComponent
          //   destination={destination}
          //   markers={markers}
          //   setData={setData}
          //   location={location}
          //   userLocation={userLocation}
          //   hoveredPlace={hoveredPlace}
          //   setHoveredPlace={setHoveredPlace}
          //   places={places}
          //   setPlaces={setPlaces}
          // />
          <Map
            setData={setData}
            location={location}
            places={places}
            setPlaces={setPlaces}
          />
        ) : (
          <div className="w-full h-full bg-[#e1e1e1] flex items-center justify-center">
            <img src={LOADING.src} className="w-24 h-24" alt="" />
          </div>
        )}
      </div>
      {filterModal && <FilterModal setFilterModal={setFilterModal} />}
      {overlay && (
        <div
          className="overlay"
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

export default SearchPage;
