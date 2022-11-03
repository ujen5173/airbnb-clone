import dynamic from "next/dynamic";

const MapHandlerComponent = dynamic(() => import("./MapHandler"), {
  ssr: false,
});

export default MapHandlerComponent;
