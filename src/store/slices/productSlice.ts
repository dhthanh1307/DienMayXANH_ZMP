import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@type/index";

import {
    fetchProductCategory,
    fetchProductCategoryFailure,
    fetchProductCategorySuccess,
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess,
    fetchSearchProducts,
    fetchSearchProductsFailure,
    fetchSearchProductsSuccess} from "../actions/productAction";

interface ProductState {
    products: ProductType[];
    searchProducts: ProductType[];
    category: ProductType[];
    loading: {
        product: boolean;
        search: boolean;
        category: boolean;
    };
    error: {
        product: string | null;
        search: string | null;
        category: string | null;
    };
}

const initialState: ProductState = {
    products: [],
    searchProducts: [],
    category: [],
    loading: {
        product: false,
        search: false,
        category: false,
    },
    error: {
        product: null,
        search: null,
        category: null,
    },
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts, (state) => {
            state.loading.product = true;

            state.error.product = null;
        });

        builder.addCase(fetchProductsSuccess, (state, action: PayloadAction<ProductType[]>) => {
            state.loading.product = false;

            state.products = action.payload;
        });

        builder.addCase(fetchProductsFailure, (state, action: PayloadAction<string>) => {
            state.loading.product = false;

            state.error.product = action.payload;
        });

        builder.addCase(fetchSearchProducts, (state) => {
            state.loading.search = true;

            state.error.search = null;
        });

        builder.addCase(fetchSearchProductsSuccess, (state, action: PayloadAction<ProductType[]>) => {
            state.loading.search = false;

            state.searchProducts = action.payload;
        });

        builder.addCase(fetchSearchProductsFailure, (state, action: PayloadAction<string>) => {
            state.loading.search = false;

            state.error.search = action.payload;
        });

        builder.addCase(fetchProductCategory, (state) => {
            state.loading.category = true;

            state.error.category = null;
        });

        builder.addCase(fetchProductCategorySuccess, (state, action: PayloadAction<ProductType[]>) => {
            state.loading.category = false;

            state.category = action.payload;
        });

        builder.addCase(fetchProductCategoryFailure, (state, action: PayloadAction<string>) => {
            state.loading.category = false;

            state.error.category = action.payload;
        });
    },
});

export default productSlice.reducer;
