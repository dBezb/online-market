import React, { useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filteredByPrice } from "../../features/products/productsSlice";

const Home = () => {
  const dispatch = useDispatch();

  const {
    products: { list, filtered },
    categories,
  } = useSelector((state) => ({
    products: state.products,
    categories: state.categories,
  }));

  useEffect(() => {
    if (!list.length) return;

    dispatch(filteredByPrice(100));
  }, [dispatch, list.length]);

  return (
    <>
      <Poster />
      <Products products={list} amount={10} title="Trending" />
      <Categories products={categories.list} amount={5} title="Categories" />
      <Banner />
      <Products products={filtered} amount={5} title="Less than 100$" />
    </>
  );
};

export default Home;
