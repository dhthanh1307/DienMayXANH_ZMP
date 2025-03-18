import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { AnimationRoutes, App, SnackbarProvider,ZMPRouter } from "zmp-ui";

import { CartPage, CategoryPage, DetailPage, HomePage, Login, PaymentPage, SearchPage } from "./pages";
import {store} from "./store/store"
// import Cart1Page from "@pages/car";

const MyApp = () => {
  return (
    <Provider store={store}>
      <App>
        <SnackbarProvider>
          <ZMPRouter>
            <AnimationRoutes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/detail" element={<DetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              {/* <Route path="/cart1" element={<Cart1Page />} /> */}
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/category" element={<CategoryPage />} />
              <Route path="/login" element={<Login />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </Provider>
  );
};
export default MyApp;
