import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { District, Province, Ward } from "@type/index";

import {
    fetchDistrict,
    fetchDistrictFailure,
    fetchDistrictSuccess,
    fetchProvince,
    fetchProvinceFailure,
    fetchProvinceSuccess,
    fetchWard,
    fetchWardFailure,
    fetchWardSuccess} from "../actions/locationAction";

interface AddressState {
    provinces: Province[];
    districts: District[];
    wards: Ward[];
    selectedProvince: Province | null;
    selectedDistrict: District | null;
    selectedWard: Ward | null;
    selectedStreet: string | null;
    loading: {
        provinces: boolean;
        districts: boolean;
        wards: boolean;
    };
    error: {
        provinces: string | null;
        districts: string | null;
        wards: string | null;
    };
}

const initialState: AddressState = {
    provinces: [],
    districts: [],
    wards: [],
    selectedStreet: null,
    selectedProvince: null,
    selectedDistrict: null,
    selectedWard: null,
    loading: {
        provinces: false,
        districts: false,
        wards: false,
    },
    error: {
        provinces: null,
        districts: null,
        wards: null,
    },
};

const locationSlice = createSlice({
    name: "location",
    initialState,
    reducers: {
        setSelectedProvince(state, action: PayloadAction<Province | null>) {
            state.selectedProvince = action.payload;

            state.selectedDistrict = null;

            state.districts = [];

            state.selectedWard = null;

            state.wards = [];
        },
        setSelectedDistrict(state, action: PayloadAction<District | null>) {
            state.selectedDistrict = action.payload;

            state.selectedWard = null;

            state.wards = [];
        },
        setSelectedWard(state, action: PayloadAction<Ward | null>) {
            state.selectedWard = action.payload;
        },
        setSelectedStreet(state, action: PayloadAction<string | null>) {
            state.selectedStreet = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProvince, (state) => {
            state.loading.provinces = true;

            state.error.provinces = null;
        });

        builder.addCase(fetchProvinceSuccess, (state, action: PayloadAction<Province[]>) => {
            state.loading.provinces = false;

            state.provinces = action.payload;
        });

        builder.addCase(fetchProvinceFailure, (state, action) => {
            state.loading.provinces = false;

            state.error.provinces = action.payload as string;
        });

        builder.addCase(fetchDistrict, (state) => {
            state.loading.districts = true;

            state.error.districts = null;
        });

        builder.addCase(fetchDistrictSuccess, (state, action: PayloadAction<District[]>) => {
            state.districts = action.payload;

            state.loading.districts = false;
        });

        builder.addCase(fetchDistrictFailure, (state, action) => {
            state.loading.districts = false;

            state.error.districts = action.payload as string;
        });

        builder.addCase(fetchWard, (state) => {
            state.loading.wards = true;

            state.error.wards = null;
        });

        builder.addCase(fetchWardSuccess, (state, action: PayloadAction<Ward[]>) => {
            state.loading.wards = false;

            state.wards = action.payload;
        });

        builder.addCase(fetchWardFailure, (state, action) => {
            state.loading.wards = false;

            state.error.wards = action.payload as string;
        });
    },
});

export const { setSelectedProvince, setSelectedDistrict, setSelectedWard, setSelectedStreet } = locationSlice.actions;
export default locationSlice.reducer;
