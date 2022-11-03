import data from "../../../data.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    const time = Math.floor(Math.random() * 1000);

    setTimeout(() => {
      return res.json({ success: true, data: data });
    }, time);
  }
}
