const data = require("./data.json");
const { v4 } = require("uuid");
const fs = require("fs");

const geo = [
  { lat: 26.452541597780193, lng: 83.24268193669977 },
  { lat: 26.599988452035497, lng: 81.5676379382733 },
  { lat: 26.319677784051954, lng: 83.94565122128533 },
  { lat: 25.781755929041896, lng: 83.66006994942246 },
  { lat: 26.08803267931835, lng: 84.41795870936622 },
  { lat: 26.437786503347798, lng: 83.12185909091163 },
  { lat: 28.037642381615317, lng: 84.58021318221611 },
  { lat: 27.91393515286474, lng: 84.75295162982314 },
  { lat: 27.918789088222546, lng: 84.73750552737866 },
  { lat: 27.94260055116689, lng: 84.7206864380502 },
  { lat: 27.87403362055262, lng: 84.71931345116624 },
  { lat: 27.870846932616605, lng: 84.65958852171417 },
  { lat: 27.89315177944272, lng: 84.64088157542027 },
  { lat: 27.925007874468797, lng: 84.66061826187708 },
  { lat: 27.916210462191763, lng: 84.69356994709206 },
  { lat: 27.899827166671496, lng: 84.6704007934253 },
  { lat: 27.91029456415899, lng: 84.92656725366102 },
  { lat: 27.78401160655354, lng: 84.55860676876077 },
  { lat: 27.978232111529124, lng: 84.80025246033706 },
  { lat: 27.871453933810184, lng: 85.22313242059553 },
  { lat: 28.783708514633055, lng: 118.75518731608291 },
  { lat: 29.756429614783187, lng: 118.4861294417828 },
  { lat: 29.512923517470423, lng: 118.35434599314597 },
  { lat: 29.968418543690884, lng: 116.21738450666766 },
  { lat: 30.19301388399302, lng: 116.39309577151668 },
  { lat: 30.189452864486697, lng: 116.62234406237447 },
  { lat: 30.127708075241546, lng: 116.7994280714802 },
  { lat: 29.80768165503785, lng: 116.82276472384297 },
  { lat: 29.680098933475055, lng: 116.83923765492257 },
  { lat: 29.532043287445333, lng: 116.81452825830317 },
  { lat: 29.401718317159876, lng: 116.8282557008695 },
  { lat: 29.359835351130275, lng: 116.53311787272928 },
  { lat: 29.53084840711142, lng: 116.56057275786198 },
  { lat: 29.76954309226164, lng: 116.52213591867623 },
  { lat: 30.000534797229456, lng: 116.4315347977384 },
  { lat: 29.90534533689429, lng: 116.46173517138435 },
  { lat: 29.78027103180899, lng: 116.35466111936695 },
  { lat: 29.53443300576308, lng: 116.3272062342343 },
  { lat: 29.933911742615948, lng: 116.26817823119904 },
  { lat: 30.096821188157605, lng: 116.41918009942871 },
  { lat: 30.056428, lng: 87.780733 },
  { lat: 30.238702, lng: 116.41918009942871 },
  { lat: 30.096821188157605, lng: 88.596778 },
  { lat: 17.535808, lng: 78.028124 },
  { lat: 18.788454, lng: 116.41918009942871 },
  { lat: 25.38043, lng: 92.363861 },
  { lat: 18.455298, lng: 97.64082 },
  { lat: 7.191741, lng: 81.140012 },
  { lat: 7.07023, lng: 116.41918009942871 },
  { lat: 30.096821188157605, lng: 80.712773 },
  { lat: 6.650286, lng: 116.41918009942871 },
  { lat: 6.80849, lng: 81.537298 },
  { lat: 6.453823, lng: 80.762245 },
  { lat: -26.554955, lng: 152.828024 },
  { lat: -27.922429, lng: 152.828024 },
];
const json = JSON.stringify(
  data.map((e, i) => ({ ...e, geolocation: geo[i] }))
);

// const json = JSON.stringify(
//   data.map((e, i) => ({
//     ...e,
//     user: { ...e.user, name: e.user.name.replace("Hosted by ", "") },
//   }))
// );

// const amenities = [
//   "Wifi",
//   "Kitchen",
//   "Air conditioning",
//   "Washer",
//   "Iron",
//   "Free parking",
//   "Dryer",
//   "Heating",
//   "Dedicated workspace",
//   "TV",
//   "Hair dryer",
//   "Pool",
//   "Hot tub",
//   "EV charger",
//   "Crib",
//   "Gym",
//   "BBQ grill",
//   "Breakfast",
//   "Indoor fireplace",
//   "Smoking allowed",
//   "Waterfront",
//   "Smoke alarm",
//   "Carbon monoxide alarm",
// ];

// // const json = data.map((e) => {
// //   console.log(e._id);
// //   const am = [];
// //   const max = amenities.length;
// //   const min = 5;
// //   for (let i = 0; i <= Math.floor(Math.random() * (max - min) + min); i++) {
// //     am[i] = amenities[Math.floor(Math.random() * amenities.length)];
// //   }
// //   return { ...e, amenities: [...new Set(am)] };
// // });

// const json = data.map((e) => {
//   //! Math.random() * (max - min) + min;

//   const bedrooms = Math.floor(Math.random() * (5 - 1) + 1);
//   const beds = Math.floor(Math.random() * (bedrooms * 2 - 1) + 1);
//   const person_capacity = Math.floor(Math.random() * (bedrooms * 2 - 2) + 2);
//   const pets_capacity = Math.floor(Math.random() * (4 - 0) + 0);

//   const rest = {
//     bedrooms: bedrooms,
//     beds: beds,
//     person_capacity: person_capacity,
//     pets_capacity: pets_capacity,
//   };
//   return { ...e, ...rest };
// });

fs.writeFile("data.json", JSON.stringify(json), "utf8", function (err) {
  if (err) throw err;
  console.log("complete");
});
