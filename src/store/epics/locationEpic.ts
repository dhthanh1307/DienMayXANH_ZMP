import { locationApi } from "@api/api";
import { District, Province } from "@type/index";
import { Action } from "redux";
import { ofType } from "redux-observable";
import { catchError, from, map, mergeMap, of } from "rxjs";

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

interface ProvinceAction extends Action {
    payload?: Province;
}

interface DistrictAction extends Action {
    payload?: District;
}

export const fetchProvinceEpic = (action$: any) =>
    action$.pipe(
        ofType(fetchProvince.type),
        mergeMap(() =>
            from(locationApi.get("/provinces?pages=0&size=63")).pipe(
                map((response) => fetchProvinceSuccess(response.data.data)),
                catchError(() => of(fetchProvinceFailure("Lỗi khi lấy danh sách tỉnh")))
            )
        )
    );

export const fetchDistrictEpic = (action$: any) =>
    action$.pipe(
        ofType(fetchDistrict.type),
        mergeMap((action: ProvinceAction) =>
            from(locationApi.get(`/districts/${action.payload?.id}?pages=0&size=100`)).pipe(
                map((response) => fetchDistrictSuccess(response.data.data)),
                catchError(() => of(fetchDistrictFailure("Lỗi khi lấy danh sách huyện")))
            )
        )
    );

export const fetchWardEpic = (action$: any) =>
    action$.pipe(
        ofType(fetchWard.type),
        mergeMap((action: DistrictAction) =>
            from(locationApi.get(`/wards/${action.payload?.id}?pages=0&size=100`)).pipe(
                map((response) => fetchWardSuccess(response.data.data)),
                catchError(() => of(fetchWardFailure("Lỗi khi lấy danh sách phường")))
            )
        )
    );

export const locationEpic = [fetchProvinceEpic, fetchDistrictEpic, fetchWardEpic];
