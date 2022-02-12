import React from "react";
import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { ProductImages } from "./ProductImages";
import { ProductActionArea } from "./ProductActionArea";

const ProductWrapper = styled(Grid)({
  padding: 30,
});

export const Product = () => {
  return (
    <ProductWrapper container spacing={2}>
      <Grid item>
        <ProductImages />
      </Grid>
      <Grid item>
        <ProductActionArea />
      </Grid>
    </ProductWrapper>
  );
};
