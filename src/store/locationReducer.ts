import api from "@api/apiLocation";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Province {
    name: string;
    id: string;
}
interface District {
    name: string;
    id: string;
}
interface Ward {
    name: string;
    id: string;
}

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

export const fetchProvince = createAsyncThunk(
    "location/province",
    async (_, { rejectWithValue }) => {
        try {
            const response = await api.get("/provinces?pages=0&size=63");

            return response.data.data;
        }
        catch (error: unknown) {
            return rejectWithValue("Lỗi khi lấy danh sách tỉnh")
        }
    }
);
export const fetchDistrict = createAsyncThunk(
    "location/district",
    async (province: Province, { rejectWithValue }) => {
        try {
            const response = await api.get(`/districts/${province.id}?pages=0&size=100`);

            return response.data.data;
        }
        catch (error: unknown) {
            return rejectWithValue("Lỗi khi lấy danh sách huyện")
        }
    }
);
export const fetchWard = createAsyncThunk(
    "location/wards",
    async (district: District, { rejectWithValue }) => {
        try {
            const response = await api.get(`/wards/${district.id}?pages=0&size=100`);

            return response.data.data;
        }
        catch (error: unknown) {
            return rejectWithValue("Lỗi khi lấy danh sách phường")
        }
    }
);
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
        builder.addCase(fetchProvince.pending, (state) => {
            state.loading.provinces = true;

            state.error.provinces = null;
        });

        builder.addCase(fetchProvince.fulfilled, (state, action: PayloadAction<Province[]>) => {
            state.loading.provinces = false;

            state.provinces = action.payload;
        });

        builder.addCase(fetchProvince.rejected, (state, action) => {
            state.loading.provinces = false;

            state.error.provinces = action.payload as string;
        });

        builder.addCase(fetchDistrict.pending, (state) => {
            state.loading.districts = true;

            state.error.districts = null;
        });

        builder.addCase(fetchDistrict.fulfilled, (state, action: PayloadAction<District[]>) => {
            state.districts = action.payload;

            state.loading.districts = false;
        });

        builder.addCase(fetchDistrict.rejected, (state, action) => {
            state.loading.districts = false;

            state.error.districts = action.payload as string;
        });

        builder.addCase(fetchWard.pending, (state) => {
            state.loading.wards = true;

            state.error.wards = null;
        });

        builder.addCase(fetchWard.fulfilled, (state, action: PayloadAction<Ward[]>) => {
            state.loading.wards = false;

            state.wards = action.payload;
        })

        builder.addCase(fetchWard.rejected, (state, action) => {
            state.loading.wards = false;

            state.error.wards = action.payload as string;
        })
    }
})

export const { setSelectedProvince, setSelectedDistrict, setSelectedWard,setSelectedStreet } = locationSlice.actions;
export default locationSlice.reducer;