import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import { ROUTES } from "../../utils/routes";
import SingleProduct from "../Products/singleProduct";
import Profile from "../Profile/Profile";
import SingleCategory from "../Categories/SingleCategory";
import Cart from "../Cart/Cart";
import Favorites from "../Favorites/Favorites";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={ROUTES.PRODUCT} element={<SingleProduct />}></Route>
      <Route path={ROUTES.PROFILE} element={<Profile />}></Route>
      <Route path={ROUTES.CATEGORY} element={<SingleCategory />}></Route>
      <Route path={ROUTES.CART} element={<Cart />}></Route>
      <Route path={ROUTES.FAVORITES} element={<Favorites />}></Route>
    </Routes>
  );
};

export default AppRoutes;
