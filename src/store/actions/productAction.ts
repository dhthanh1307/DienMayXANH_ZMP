import { createAction } from "@reduxjs/toolkit";
import { ProductType } from "@type/index";

export const fetchProducts = createAction("products/fetchProducts");
export const fetchProductsSuccess = createAction<ProductType[]>("products/fetchProductsSuccess");
export const fetchProductsFailure = createAction<string>("products/fetchProductsFailure");

export const fetchSearchProducts = createAction<string>("products/fetchSearch");
export const fetchSearchProductsSuccess = createAction<ProductType[]>("products/fetchSearchSuccess");
export const fetchSearchProductsFailure = createAction<string>("products/fetchSearchFailure");

export const fetchProductCategory = createAction("products/fetchProductCategory");
export const fetchProductCategorySuccess = createAction<ProductType[]>("products/fetchProductCategorySuccess");
export const fetchProductCategoryFailure = createAction<string>("products/fetchProductCategoryFailure");