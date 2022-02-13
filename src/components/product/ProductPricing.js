import React from "react";
import styled from "@emotion/styled";
import { Grid, Box, Divider, Stack, Chip, Typography } from "@mui/material";
import { TitleComponent } from "../UI/TitleComponent";
import { BulletList } from "../UI/BulletList";
import { PriceList } from "../UI/PriceBreaks";
import { useSelector } from "react-redux";

const Wrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: 20,
  maxWidth: 400,
  height: "100%",
});

const TitleContainer = styled(Grid)({
  marginBottom: 10,
});

const BoxMargin = styled(Box)({
  marginTop: 20,
});

export const ProductPricing = () => {
  const { product } = useSelector((state) => state.product);
  return (
    <Wrapper container>
      <Box>
        <TitleContainer container>
          <Grid item>
            <TitleComponent>PRICING & SHIPPING</TitleComponent>
          </Grid>
        </TitleContainer>
      </Box>
      <Divider />
      <BoxMargin>
        <BulletList
          feature="Minimum order"
          val={`${product.article.minimum_order_quantity} ${product.article?.unit}`}
        />
        <BulletList
          feature="Shipping"
          val={`${product.article?.transport_costs} ${product.article?.currency}`}
        />
        <BulletList
          feature="Delivery"
          val={`${product.article?.delivery_time} days`}
        />
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Price Breaks
        </Typography>
      </BoxMargin>
      <Box>
        <PriceList
          qty={20}
          disc={product.article.price_breaks[20]}
          total={product.article.price}
          currency={product.article.currency}
          unit={product.article.unit}
        />
        <PriceList
          qty={50}
          disc={product.article.price_breaks[50]}
          total={product.article.price}
          currency={product.article.currency}
          unit={product.article.unit}
        />
        <PriceList
          qty={100}
          disc={product.article.price_breaks[100]}
          total={product.article.price}
          currency={product.article.currency}
          unit={product.article.unit}
        />
      </Box>
    </Wrapper>
  );
};
