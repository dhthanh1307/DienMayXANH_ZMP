import { Product } from "@components/Product/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cart {
    products: Product[];
    counts: number[];
}
const initialState: Cart = {
    products: [],
    counts: []
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<{ product: Product }>) {
            const { product } = action.payload;

            const index = state.products.findIndex((p) => p.title === product.title);
            if (index >= 0) {
                state.counts[index]++;
            } else {
                state.products.push(product);

                state.counts.push(1);
            }
        },
        removeToCart(state, action: PayloadAction<{ product: Product }>) {
            const { product } = action.payload;

            const index = state.products.findIndex((p) => p.title === product.title);
            if (index >= 0) {
                state.counts[index]--;

                if (state.counts[index] === 0) {
                    state.counts.splice(index, 1);

                    state.products.splice(index, 1);
                }
            }
        },
        clearCart(state, action: PayloadAction<{ product: Product }>) {
            const { product } = action.payload;

            const index = state.products.findIndex((p) => p.title === product.title);
            if (index >= 0) {
                state.counts.splice(index, 1);

                state.products.splice(index, 1);
            }
        }

    }
});

export const { addToCart, removeToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;