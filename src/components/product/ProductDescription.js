import React from "react";
import styled from "@emotion/styled";
import { TitleComponent } from "../UI/TitleComponent";
import { Typography, Grid } from "@mui/material";
import { ProductDetails } from "./ProductDetails";
import { ProductPricing } from "./ProductPricing";
import data from "../../data.json";
import { useSelector } from "react-redux";

const WrapperContainer = styled(Grid)({
  background: "#EFEFEF",
  padding: 30,
});

export const ProductDescription = () => {
  const { product } = useSelector((state) => state.product);
  
  return (
    <WrapperContainer container spacing={2}>
      {product?.article && (
        <>
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
              <Grid item>
                <ProductDetails />
              </Grid>
              <Grid item>
                <ProductPricing />
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </WrapperContainer>
  );
};
