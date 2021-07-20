// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Product from "./models/Products";
import {dbConnection} from "./middleware/db_connect";
import {NextApiRequest, NextApiResponse} from "next";
import axios from "axios";

export default async function GetProduct (
  req: NextApiRequest,
  res: NextApiResponse
) {
  dbConnection();
  const prod = await Product.findById(
    "60b2d12df4e4b022e86ac0fb"
  ).lean();
  // const {data} = await axios.get(
  //   "https://jsonplaceholder.typicode.com/posts/1"
  // );
  res.status(200).json(prod);
  console.log("ok");
}
// _id: "60b2d12df4e4b022e86ac0fb",
