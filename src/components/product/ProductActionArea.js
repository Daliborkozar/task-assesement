import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { RatingStars } from "../UI/Rating";
import DiscountIcon from "../../resources/icons/discount.svg";
import { AddToCart } from "./addToCart/AddToCart";
import data from "../../data.json";


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
  marginLeft: 3,
});

const PriceContainer = styled(Grid)({
  alignItems: "center",
});

export const ProductActionArea = () => {
  const { product } = useSelector((state) => state.product);

  return (
    <ProductWrapper container>
      {product?.article && (
        <>
          <Grid item>
            <Typography variant="h6">
              {product.article.description_short}
            </Typography>
            <Grid container spacing={1}>
              <Grid item>
                <Typography color="#A9A9A9">by </Typography>
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
                  <Typography>{`${data.article.price.toLocaleString()} ${
                    data.article.currency
                  }`}</Typography>
                </Grid>
                <Grid item>
                  <PriceContainer container>
                    <Typography color="#A9A9A9">{`+ ${data.article.transport_costs.toLocaleString()} shipping`}</Typography>
                    <DiscountImg src={DiscountIcon} />
                  </PriceContainer>
                </Grid>
              </Grid>
              <Typography color="#A9A9A9">all prices incl 10% taxes</Typography>
            </Grid>
          </Grid>

          <Grid item>
            <AddToCart unit={product.article.unit} />
          </Grid>
        </>
      )}
    </ProductWrapper>
  );
};
