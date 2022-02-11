import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { RatingStars } from "./rating/Rating";
import DiscountIcon from "../../resources/icons/discount.svg";
import { AddToCart } from "./addToCart/AddToCart";

const ProductWrapper = styled(Grid)({
  flexDirection: "column",
  height: "100%",
  justifyContent: "space-between",
  
});

const SupplierTitle = styled(Typography)({
  marginLeft: 5,
});

export const ProductActionArea = () => {
  return (
    <ProductWrapper container >
      <Grid item >
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </Typography>
        <Grid container spacing={1}>
          <Grid item>
            <Typography color="#A9A9A9">by </Typography>
          </Grid>
          <Grid item>
            <Typography color="sub"> Supplier expeteur sit</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <RatingStars />
        </Grid>
        <Grid item>
          <Grid container spacing={1}>
            <Grid item>
              <Typography>25980,00 EUR</Typography>
            </Grid>
            <Grid item>
              <Typography>+ 34,00 EUR shipping icon</Typography>
            </Grid>
          </Grid>
          <Typography color="#A9A9A9">all prices incl 10% taxes</Typography>
        </Grid>
      </Grid>

      <Grid item >
        <AddToCart />
      </Grid>
    </ProductWrapper>
  );
};
