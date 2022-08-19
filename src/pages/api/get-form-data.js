// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Data from "./config/data.json"

const getFormData = (req, res) => {
  res.status(200).json(Data);
};

export default getFormData;
