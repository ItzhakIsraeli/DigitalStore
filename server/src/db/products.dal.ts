import {ProductModel, Product} from "./products.schema";

export const getAllProducts = async () => {
    const products: Product[] = await ProductModel.find();
    console.log(products)
    return products;
};