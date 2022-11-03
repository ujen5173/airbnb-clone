import postData from "../../../data.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    const data = req.query;
    let markers = data["data[]"].map((e) => JSON.parse(e));

    markers = markers.map((marker) => ({
      latitude: marker.lat,
      longitude: marker.lng,
    }));

    const calcLocation = (lat, lng) => {
      if (
        +lat < +markers[0].latitude &&
        +lat > +markers[2].latitude &&
        +lng > +markers[0].longitude &&
        +lng < +markers[3].longitude
      ) {
        return true;
      } else {
        return false;
      }
    };

    let result;
    const newP = new Promise((r) => {
      if (true) {
        setTimeout(() => {
          r(
            (result = postData
              .map((post) => {
                const res = calcLocation(
                  post.geolocation.lat,
                  post.geolocation.lng
                );
                if (res) {
                  return post;
                } else {
                  return null;
                }
              })
              .filter((e) => e !== null))
          );
        }, Math.floor(Math.random() * 800));
      }
    });
    newP
      .then((response) => res.json({ success: true, data: response }))
      .catch((err) => res.json({ success: false, data: null }));
  }
}
