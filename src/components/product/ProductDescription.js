import React from "react";
import styled from "@emotion/styled";
import { TitleComponent } from "../UI/TitleComponent";
import { Typography, Grid } from "@mui/material";
import { ProductDetails } from "./ProductDetails";
import { ProductPricing } from "./ProductPricing";
import { useSelector } from "react-redux";

const WrapperContainer = styled(Grid)({
  background: "#EFEFEF",
  padding: 30,
});

export const ProductDescription = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <>
      {product?.article && (
        <WrapperContainer container >
          <Grid item xs={12}>
            <TitleComponent>DESCRIPTION</TitleComponent>
          </Grid>
          <Grid item xs={12} md={12} lg={9}>
            <Typography variant="h6" color="#696969">
              {product.article.description_long}
            </Typography>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={5} lg={3}>
                <ProductDetails />
              </Grid>
              <Grid item xs={12} sm={6} md={5} lg={3}>
                <ProductPricing />
              </Grid>
            </Grid>
          </Grid>
        </WrapperContainer>
      )}
    </>
  );
};
