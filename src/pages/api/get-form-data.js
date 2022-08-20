// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "./config/data.json";

const formData = (req, res) => {
  if (req.method === "POST") {
    // Process a POST request
    console.log("posting", req.body);
  } else {
    res.status(200).json(Data);
  }
};

export default formData;
