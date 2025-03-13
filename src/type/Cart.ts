import { ProductType } from "./ProductType";

export interface Cart {
    products: ProductType[];
    counts: number[];
}