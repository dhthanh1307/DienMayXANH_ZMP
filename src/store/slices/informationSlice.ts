import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Info {
    userGener: string ;
    userName: string ;
    userPhone: string ;
}
const initialState: Info = {
    userGener: '',
    userName: '',
    userPhone: '',

}

const informationSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.userName = action.payload;
        },
        setGener(state,action:PayloadAction<string>){
            state.userGener=action.payload;
        },
        setPhone(state,action:PayloadAction<string>){
            state.userPhone=action.payload;
        }

    }
});

export const { setGener,setName,setPhone } = informationSlice.actions;
export default informationSlice.reducer;