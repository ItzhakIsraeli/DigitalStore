import mongoose from 'mongoose';
import {db} from "./db-connection";

const Schema = mongoose.Schema

export interface Product extends mongoose.Document{
    name: string,
    description: string,
    price: number,
    image: string,
    image2: string,
    market: string,
}

// const ProductModelSchema = new Schema<Product>({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     image: { type: String, required: true },
//     image2: { type: String, required: true },
//     market: { type: String, required: true },
// });

const ProductModelSchema = new Schema<Product>({
    name: String,
    description: String,
    price: Number,
    image: String,
    image2: String,
    market: String,
});

export const ProductModel = mongoose.model<Product>("Product", ProductModelSchema);