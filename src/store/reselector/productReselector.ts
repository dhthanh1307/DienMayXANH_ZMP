import { RootState } from "@store/store";
import {createSelector} from "reselect";

const selectProduct = (state:RootState)=>state.products.products;

const selectSearchProduct=(state:RootState)=>state.products.searchProducts;

const selectCategory=(state:RootState)=>state.products.category
export const productReselector=createSelector(
    [selectProduct],
    (products)=>products
)
export const searchProductReselector=createSelector(
    [selectSearchProduct],
    (searchProducts)=>searchProducts
)
export const categoryReselector=createSelector(
    [selectCategory],
    (category)=>category
)