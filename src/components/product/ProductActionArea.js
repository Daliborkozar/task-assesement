import React, { useRef, useEffect } from "react";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RatingStars } from "../UI/Rating";
import DiscountIcon from "../../resources/icons/discount.svg";
import { AddToCart } from "./addToCart/AddToCart";


const ProductWrapper = styled(Grid)({
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  maxWidth: 500,
});

const SupplierTitle = styled(Typography)({
  marginLeft: 5,
});

const DiscountImg = styled("img")({
  height: 13,
  width: 13,
  marginLeft: 3,
});

const PriceContainer = styled(Grid)({
  alignItems: "center",
});

export const ProductActionArea = ({ cartAction }) => {
  const { product } = useSelector((state) => state.product);

  const containerRef = useRef(null);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    cartAction(entry.isIntersecting);
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <>
      {product?.article && (
        <ProductWrapper container>
          <Grid item>
            <Typography variant="h6">
              {product.article.description_short}
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Typography color="#A9A9A9">by</Typography>
              </Grid>
              <Grid item>
                <Typography color="sub">{` Supplier ${product.article.supplier_name}`}</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <RatingStars />
            </Grid>
            <Grid item>
              <Grid container spacing={1}>
                <Grid item>
                  <Typography>{`${product.article.price.toLocaleString()} ${
                    data.article.currency
                  }`}</Typography>
                </Grid>
                <Grid item>
                  <PriceContainer container>
                    <Typography color="#A9A9A9">{`+ ${product.article.transport_costs.toLocaleString()} shipping`}</Typography>
                    <DiscountImg src={DiscountIcon} />
                  </PriceContainer>
                </Grid>
              </Grid>
              <Typography color="#A9A9A9">all prices incl 10% taxes</Typography>
            </Grid>
          </Grid>

          <Grid item ref={containerRef}>
            <AddToCart unit={product.article.unit} />
          </Grid>
        </ProductWrapper>
      )}
    </>
  );
};
