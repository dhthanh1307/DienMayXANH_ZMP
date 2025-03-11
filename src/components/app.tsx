import CartPage from "@pages/Cart";
import DetailPage from "@pages/Detail";
import HomePage from "@pages/Home";
import PaymentPage from "@pages/Payment";
import SearchPage from "@pages/Search";
import {store} from "@store/store"
import React from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
// import { RecoilRoot } from "recoil";
import { AnimationRoutes, App, SnackbarProvider,ZMPRouter } from "zmp-ui";

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
              <Route path="/payment" element={<PaymentPage />} />
            </AnimationRoutes>
          </ZMPRouter>
        </SnackbarProvider>
      </App>
    </Provider>
  );
};
export default MyApp;
