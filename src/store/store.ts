import {configureStore} from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";

import { rootEpic } from "./rootEpic";
import { rootReducer } from "./rootReducer";
const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(epicMiddleware)
});

epicMiddleware.run(rootEpic);

export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch= typeof store.dispatch;