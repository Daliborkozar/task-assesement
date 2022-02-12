import React from "react";
import styled from "@emotion/styled";
import { Grid, Box, Divider, Stack, Chip, Typography } from "@mui/material";
import { TitleComponent } from "../UI/TitleComponent";
import { BulletList } from "../UI/BulletList";
import { PriceList } from "../UI/PriceBreaks";
import data from '../../data.json'

const Wrapper = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  padding: 20,
  minWidth: 300,
});

const TitleContainer = styled(Grid)({
  marginBottom: 10,
});

const BoxMargin = styled(Box)({
  marginTop: 20,
});

export const ProductPricing = () => {
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
        <BulletList />
        <BulletList />
        <BulletList />
      </BoxMargin>
      <BoxMargin>
        <Typography variant="h6" color="#A9A9A9">
          Price Breaks
        </Typography>
      </BoxMargin>
      <Box>
        <PriceList />
        <PriceList />
        <PriceList />
      </Box>
    </Wrapper>
  );
};
