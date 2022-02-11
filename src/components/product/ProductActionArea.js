import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { RatingStars } from "../UI/Rating";
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

const DiscountImg = styled("img")({
  height: 13,
  marginLeft: 3
});

const PriceContainer = styled(Grid)({
    alignItems: 'center'
})

export const ProductActionArea = () => {
  return (
    <ProductWrapper container>
      <Grid item>
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
              <PriceContainer container>
                <Typography>+ 34,00 EUR shipping</Typography>
                <DiscountImg src={DiscountIcon} />
              </PriceContainer>
            </Grid>
          </Grid>
          <Typography color="#A9A9A9">all prices incl 10% taxes</Typography>
        </Grid>
      </Grid>

      <Grid item>
        <AddToCart />
      </Grid>
    </ProductWrapper>
  );
};
