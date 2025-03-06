import api from "@api/apiProduct";
import { Product } from "@components/Product/type";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// import axios from "axios";

interface ProductState {
    products: Product[];
    searchProducts: Product[];
    category:Product[];
    loading: {
        product: boolean;
        search: boolean;
        category:boolean;
    }

    error: {
        product: string | null;
        search: string | null;
        category: string | null;
    }
}

const initialState: ProductState = {
    products: [],
    searchProducts: [],
    category:[],
    loading: {
        product: false,
        search: false,
        category: false,
    },

    error: {
        product: null,
        search: null,
        category: null,
    }
};

export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/products/category/mobile-accessories");

            return response.data.products;
        } catch (error: unknown) {
            return rejectWithValue("Lỗi khi tải sản phẩm");
        }
    }
);

export const fetchSearchProducts = createAsyncThunk(
    "products/fetchSearch",
    async (keyword: string, { rejectWithValue }) => {
        try {
            const response = await api.get("/products/search", { params: { q: keyword }, });

            return response.data.products;
        } catch (error: unknown) {
            return rejectWithValue("Lỗi khi tìm sản phẩm");
        }
    }
);

export const fetchProductCategory=createAsyncThunk(
    "producs/fetchProductCategory",
    async (_,{ rejectWithValue })=>{
        try{
            const response= await api.get("/products/category/mobile-accessories");

            return response.data.products;
        }catch(error:unknown){
            return rejectWithValue("Lỗi khi lấy danh mục sản phẩm");
        }

    }
)

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading.product = true;

            state.error.product = null;
        });

        builder.addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading.product = false;

            state.products = action.payload;
        });

        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading.product = false;

            state.error.product = action.payload as string;
        });

        builder.addCase(fetchSearchProducts.pending, (state) => {
            state.loading.search = true;

            state.error.search = null;
        });

        builder.addCase(fetchSearchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading.search = false;

            state.searchProducts = action.payload;
        });

        builder.addCase(fetchSearchProducts.rejected, (state, action) => {
            state.loading.search = false;

            state.error.search = action.payload as string;
        });

        builder.addCase(fetchProductCategory.pending,(state)=>{
            state.loading.category=true;

            state.error.category=null;
        });

        builder.addCase(fetchProductCategory.fulfilled,(state,action: PayloadAction<Product[]>)=>{
            state.loading.category=false;

            state.category=action.payload;
        });

        builder.addCase(fetchProductCategory.rejected, (state, action) => {
            state.loading.category = false;

            state.error.category = action.payload as string;
        });
},
});

export default productSlice.reducer;
