import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Product } from "../components/product/Product";
import { ProductDescription } from "../components/product/ProductDescription";
import { fetchProduct } from "../Redux/actions/productActions";

export const ProductPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  

  return (
    <>
      <Product />
      <ProductDescription />
    </>
  );
};
