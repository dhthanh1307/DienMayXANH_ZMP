import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { showMoreById: Record<string, boolean>; } = {
    showMoreById:{}
};

const showmoreSlice = createSlice({
    name: "showmore",
    initialState,
    reducers: {
        setShowAll(state, action: PayloadAction<{id: string; showAll: boolean}>) {
            const { id, showAll } = action.payload;

            state.showMoreById[id] = showAll;
        }
    }
});

export const { setShowAll } = showmoreSlice.actions;
export default showmoreSlice.reducer;