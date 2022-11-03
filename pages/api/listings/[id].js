import data from "../../../data.json";

export default function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.id;
    const response = data.filter((e) => e._id !== id);
    return res.json({ success: true, data: response });
  }
}
