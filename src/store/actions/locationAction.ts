import { createAction } from "@reduxjs/toolkit";
import { District, Province, Ward } from "@type/index";

export const fetchProvince = createAction("location/fetchProvince");
export const fetchProvinceSuccess = createAction<Province[]>("location/fetchProvinceSuccess");
export const fetchProvinceFailure = createAction<string>("location/fetchProvinceFailure");

export const fetchDistrict = createAction<Province>("location/fetchDistrict");
export const fetchDistrictSuccess = createAction<District[]>("location/fetchDistrictSuccess");
export const fetchDistrictFailure = createAction<string>("location/fetchDistrictFailure");

export const fetchWard = createAction<District>("location/fetchWard");
export const fetchWardSuccess = createAction<Ward[]>("location/fetchWardSuccess");
export const fetchWardFailure = createAction<string>("location/fetchWardFailure");
