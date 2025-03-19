import { createApiInstance } from "./configApi";

export const locationApiInstance = createApiInstance("https://open.oapi.vn/location");
export const locationApi = {
    fetchProvinces: () => {
        return locationApiInstance.get('/provinces?pages=0&size=63')
    },
    fetchDistricts: (provinceId:string|undefined) => {
        console.log('testD',provinceId)
        return locationApiInstance.get(`/districts/${provinceId}?pages=0&size=100`)
    },
    fetchWards: (districtId:string|undefined) => {
        return locationApiInstance.get(`/wards/${districtId}?pages=0&size=100`)
    },
};