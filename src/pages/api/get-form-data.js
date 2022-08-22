// src/pages/api/get-form-data.js
import fs from "fs";
import path from "path";

const formData = (req, res) => {
  const file = path.join(process.cwd(), "files", "data.json");
  const data = fs.readFileSync(file, "utf8");
  const dataJSON = JSON.parse(data);

  if (req.method === "POST") {
    fs.writeFileSync(file, req.body);
    return res.status(200).json(JSON.parse(req.body));
  } else {
    res.status(200).json(dataJSON);
  }
};

export default formData;
