import {Schema, model} from "mongoose";

interface ProductI {
  sizes: string[];
  brand: string;
  title: string;
  category: string;
  gender: string;
  price: number;
  images: string;
}

const products = new Schema<ProductI>({
  sizes: [String],
  brand: String,
  title: {type: String, required: true},
  category: String,
  gender: String,
  price: Number,
  images: String,
});

const Product = model<ProductI>("Product", products);
export default Product;
