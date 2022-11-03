import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import { v4 as uuidv4 } from "uuid";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

const WishlistMap = ({ places }) => {
  return (
    <MapContainer
      center={[places[0].lat, places[0].lng]}
      zoom={7}
      scrollWheelZoom={true}
      className="w-full h-full min-h-[60vh]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {places?.map((place) => {
        return (
          <Marker
            key={uuidv4()}
            position={[place?.lat, place?.lng]}
            icon={L.divIcon({
              html: `<div class="px-4 py-2 rounded-full text-md flex gap-1 font-bold w-[80px] shadow ${
                place?.hovered
                  ? "bg-blackColor text-white"
                  : "bg-white text-blackColor"
              }">
              <span>${place?.price}</span>
              <span>❤️</span>
              </div> `,
            })}
          />
        );
      })}
    </MapContainer>
  );
};

export default WishlistMap;
