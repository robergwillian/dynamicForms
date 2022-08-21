import Config from "./config/config.json";

const formElements = (req, res) => {
  res.status(200).json(Config);
};

export default formElements;
