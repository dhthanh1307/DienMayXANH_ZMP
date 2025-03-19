import { Action, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@type/index";
import { ofType } from "redux-observable";
import { catchError, from, map, mergeMap, Observable, of } from "rxjs";

import {
    fetchProductCategory,
    fetchProductCategoryFailure,
    fetchProductCategorySuccess,
    fetchProducts,
    fetchProductsFailure,
    fetchProductsSuccess,
    fetchSearchProducts,
    fetchSearchProductsFailure,
    fetchSearchProductsSuccess} from "../actions/productAction";
import { productApi } from "@api/index";

export const fetchProductsEpic = (action$: any) =>
    action$.pipe(
        ofType(fetchProducts.type),
        mergeMap(() =>
            from(productApi.fetchProducts("mobile-accessories")).pipe(
                map(response => fetchProductsSuccess(response.data.products)),
                catchError(() => of(fetchProductsFailure("Lỗi khi tải sản phẩm")))
            )
        )
    );

export const fetchSearchProductsEpic = (action$: Observable<Action>) =>
    action$.pipe(
        ofType(fetchSearchProducts.type),
        mergeMap(action => {
            const typedAction = action as PayloadAction<string>;

            return from(productApi.searchProducts(typedAction.payload)).pipe(
                map(response => fetchSearchProductsSuccess(response.data.products as ProductType[])),
                catchError(() => of(fetchSearchProductsFailure("Lỗi khi tìm sản phẩm")))
            );
        })
    );

export const fetchProductCategoryEpic = (action$: any) =>
    action$.pipe(
        ofType(fetchProductCategory.type),
        mergeMap(() =>
            from(productApi.fetchProducts("mobile-accessories")).pipe(
                map(response => fetchProductCategorySuccess(response.data.products)),
                catchError(() => of(fetchProductCategoryFailure("Lỗi khi lấy danh mục sản phẩm")))
            )
        )
    );
