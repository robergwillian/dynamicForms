// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "./config/data.json";
import fs from "fs";

const formData = (req, res) => {
  if (req.method === "POST") {
    // Process a POST request

    console.log("posting", JSON.parse(req.body));
    fs.writeFileSync("src/pages/api/config/data.json", req.body);

    return res.status(200).json(JSON.parse(req.body));
  } else {
    res.status(200).json(Data);
  }
};

export default formData;
