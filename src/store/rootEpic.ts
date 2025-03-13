import {combineEpics} from "redux-observable";

import {fetchDistrictEpic,fetchProvinceEpic,fetchWardEpic} from "./epics/locationEpic"
import {fetchProductCategoryEpic,fetchProductsEpic,fetchSearchProductsEpic} from "./epics/productEpic"
export const rootEpic=combineEpics(
    fetchProductCategoryEpic,
    fetchSearchProductsEpic,
    fetchProductsEpic,
    fetchDistrictEpic,
    fetchProvinceEpic,
    fetchWardEpic,
);  