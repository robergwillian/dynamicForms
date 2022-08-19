// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Config from './config/config.json'


export default function handler(req, res) {
  res.status(200).json(Config);
}
