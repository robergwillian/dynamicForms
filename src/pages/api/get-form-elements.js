import fs from "fs";
import path from "path";

const formElements = (req, res) => {
  const file = path.join(process.cwd(), "files", "config.json");
  const config = fs.readFileSync(file, "utf8");
  const configJSON = JSON.parse(config);

  res.status(200).json(configJSON);
};

export default formElements;
